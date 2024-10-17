
import { dbConnect } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
//testing route for db connection

export async function GET(req: NextRequest, res: NextResponse) {
    
    await dbConnect();
    return NextResponse.json({ message: 'HI there'});
  
  }
  