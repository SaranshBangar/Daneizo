// pages/api/auth/signup.ts
import connect from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    await connect();

    try {
        const reqBody = await req.json();
        const { username, email, password } = reqBody;

        // Validate required fields
        if (!username || !email || !password) {
            return NextResponse.json(
                { success: false, message: 'Please provide all the required fields.' },
                { status: 400 }
            );
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { success: false, message: 'Email is already registered.' },
                { status: 400 }
            );
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        // Respond with success message
        return NextResponse.json(
            { success: true, message: 'User registered successfully.' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error during signup:', error);
        return NextResponse.json(
            { success: false, message: 'Server error, please try again later.' },
            { status: 500 }
        );
    }
}
