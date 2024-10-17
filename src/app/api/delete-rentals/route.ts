import { dbConnect } from '@/lib/dbConnect';
import Rental from '@/lib/models/rental';
import User from '@/lib/models/user';
import Product from '@/lib/models/product';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest) {
  await dbConnect();

  const { rentalId } = await req.json();

  if (!rentalId) {
    return NextResponse.json({ error: 'Rental ID is required' }, { status: 400 });
  }

  try {
    // Find the rental
    const rental = await Rental.findById(rentalId);
    if (!rental) {
      return NextResponse.json({ error: 'Rental not found' }, { status: 404 });
    }

    // Remove the rental from the user's rentals array
    await User.updateOne(
      { _id: rental.user },
      { $pull: { rentals: rental._id } }
    );

    // Update product availability to true
    await Product.findByIdAndUpdate(rental.product, { availability: true });

    // Delete the rental document
    await Rental.findByIdAndDelete(rentalId);

    return NextResponse.json({ message: 'Rental deleted successfully' });
  } catch (error) {
    console.error('Error deleting rental:', error);
    return NextResponse.json({ error: 'Server error, please try again later.' }, { status: 500 });
  }
}
