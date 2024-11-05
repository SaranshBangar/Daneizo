import { dbConnect } from '@/lib/dbConnect';
import product from '@/lib/models/product';

import { NextRequest, NextResponse } from 'next/server';


export  async function GET(req: NextRequest, res: NextResponse) {
  await dbConnect();

  try {
    const products = await product.find({ availability: true });
    return NextResponse.json({ products });
  } catch (error : any) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      // In case it's not an `Error` type, you can provide a fallback message
      return NextResponse.json({ error: 'An unknown error occurred' });
    }
  }
}
