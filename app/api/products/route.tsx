import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  return NextResponse.json([
    { name: 'milk', id: 1, price: 100 },
    { name: 'egg', id: 2, price: 20 },
    { name: 'beef', id: 3, price: 500 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  return NextResponse.json(
    { id: body.id, name: body.name, price: body.price },
    { status: 201 }
  );
}
