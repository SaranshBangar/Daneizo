import { dbConnect } from '@/lib/dbConnect';
import User from '@/lib/models/user'; // Make sure to use the correct casing for the model
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    // Parse the request body
    const body = await req.json();
    const { username, email, password } = body;

    if (!username || !email || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Save new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    return NextResponse.json({ message: 'User created successfully', newUser });
  } catch (error : any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
