import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest,{params}:any) {
  try {
    console.log("params",params.userid);
    
    return NextResponse.json(
      {
        message: "user updated successfully" +" for user id " +  params.userid ,
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
