import { dbConnect } from '@/lib/dbConnect';
import Product from '@/lib/models/product';
import Rental from '@/lib/models/rental';
import User from '@/lib/models/user';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  await dbConnect();

  // Parsing the JSON body of the request
  const { userId, productId, rentalDuration, rentalAmount } = await req.json();

  try {
    // Validate input
    if (!userId || !productId || !rentalDuration || !rentalAmount) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Find the user
    const user = await User.findById(userId);
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    // Find the product
    const product = await Product.findById(productId);
    if (!product) return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    
    // Check if the product is available
    if (!product.availability) {
      return NextResponse.json({ error: 'Product not available' }, { status: 400 });
    }

    // Create a new rental
    const newRental = new Rental({
      user: userId,
      product: productId,
      rentalDuration,
      rentalAmount,
    });

    // Save the rental
    await newRental.save();

    // Update product availability
    product.availability = false;
    await product.save();

    // Associate rental with the user
    user.rentals.push(newRental._id);
    await user.save();

    return NextResponse.json({ message: 'Product rented successfully', rental: newRental });
  } catch (error) {
    console.error('Error renting product:', error);
    return NextResponse.json({ error: 'Server error, please try again later.' }, { status: 500 });
  }
}
