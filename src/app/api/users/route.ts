import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    console.log("searchParams", searchParams.get("age"));

    const users = [
      {
        id: 1,
        name: "Vats",
      },
      {
        id: 2,
        name: "Lovlu",
      },
    ];
    return NextResponse.json(
      {
        data: users,
        message: "users fetched successfully",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    console.log( reqBody);

    console.log("Table Name",request.nextUrl.searchParams.get("tableName"));
    
    return NextResponse.json(
      {
        message: "user created successfully",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
