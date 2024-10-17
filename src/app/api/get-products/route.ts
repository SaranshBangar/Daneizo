import { dbConnect } from '@/lib/dbConnect';
import product from '@/lib/models/product';

import { NextRequest, NextResponse } from 'next/server';


export  async function GET(req: NextRequest, res: NextResponse) {
  await dbConnect();

  try {
    const products = await product.find({ availability: true });
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
