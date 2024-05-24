import { connectMongoDB } from "@/config/dbConfig";
import { UserModel } from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest,{params}:any) {
  try {
    const userid = params.userid;
    const user = await UserModel.findById(userid);
    if(!user){
      throw new Error("user not found")
    }
    return NextResponse.json(
      {
        message: "user updated successfully",
        data: user,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message:error.message,
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest,{params}:any) {
  try {
    const userid = params.userid;
    const reqBody=await request.json();
    const response=await UserModel.findByIdAndUpdate(userid,reqBody,{new:true,});
    
    return NextResponse.json(
      {
        message: "user updated successfully" ,
        data:response,
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


export async function DELETE(request: NextRequest,{params}:any) {
  try {
    const userid = params.userid;
    //const reqBody=await request.json();
    const response=await UserModel.findByIdAndDelete(userid);
    
    return NextResponse.json(
      {
        message: "user deleted successfully" ,
        data:response,
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
