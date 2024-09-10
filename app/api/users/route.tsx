import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';
export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: 'ziyad',
    },
    {
      id: 2,
      name: 'mosh',
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!body.name) return NextResponse.json(validation.error?.errors);

  return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
}
