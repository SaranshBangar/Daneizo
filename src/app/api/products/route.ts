import { dbConnect } from '@/lib/dbConnect';
import product from '@/lib/models/product';

import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest, res: NextResponse) {
  await dbConnect();

  const { name, description, price } = await req.json();

  try {
    const newproduct = new product({ name, description, price });
    await newproduct.save();
    return NextResponse.json({ message: 'Product created successfully', newproduct });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
