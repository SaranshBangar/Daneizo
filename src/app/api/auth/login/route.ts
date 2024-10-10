// pages/api/auth/login.ts
import connect from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    await connect();

    try {
        // Extract body from the request
        const reqBody = await req.json();
        const { email, password } = reqBody;

        // Validate if email and password are provided
        if (!email || !password) {
            return NextResponse.json(
                { success: false, message: 'Please provide both email and password.' },
                { status: 400 }
            );
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { success: false, message: 'Invalid email or password.' },
                { status: 400 }
            );
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json(
                { success: false, message: 'Invalid password.' },
                { status: 400 }
            );
        }

        // Prepare JWT payload
        const payload = { userId: user._id, email: user.email };

        // Generate JWT token
        const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });

        // Send the token in the response and set cookie
        const response = NextResponse.json(
            {
                success: true,
                message: 'Login successful',
                token, // Send the token back to the client
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                },
            },
            { status: 200 }
        );

        response.cookies.set("token", token, { httpOnly: true });
        return response; // Ensure the response is returned here
    } catch (error) {
        console.error('Error during login:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error.' },
            { status: 500 }
        );
    }
}
