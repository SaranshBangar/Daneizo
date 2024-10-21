import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const dbName = 'Daneizo';
const collectionName = 'ContactUs';

export async function POST(request) {
    const body = await request.json();

    try {
        const client = new MongoClient(uri);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const result = await collection.insertOne(body);

        await client.close();

        return NextResponse.json({
            message: "Data saved successfully!",
            status: true,
            data: result,
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({
            message: "Failed to save data",
            status: false,
            error: error.message,
        }, { status: 500 });
    }
}


export function GET() {
    return NextResponse.json({ message: "Hello, World!" });
}