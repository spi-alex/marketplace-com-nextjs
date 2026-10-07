import { NextRequest, NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ teste: "Hello" });
}
const users: string[] = [];
export async function POST(request: NextRequest) {
  const name = await request.json();
  users.push(name);
  return NextResponse.json({ users });
}
export async function PUT() {
  return NextResponse.json({ teste: "Hello" });
}
export async function DELETE() {
  return NextResponse.json({ teste: "Hello" });
}
