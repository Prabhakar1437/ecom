import { connectMongoDB } from "@/config/dbConfig";
import { UserModel } from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
connectMongoDB();

export async function GET(request: NextRequest) {
  try {
    const searchparams = request.nextUrl.searchParams; 
    let filters:any ={};
    
    if(searchparams.has("name")){
      filters.name = searchparams.get("name");
    }
    if(searchparams.has("age")){
      filters.age = searchparams.get("age");
    }
    const users = await UserModel.find(filters);
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

    const newUser = new UserModel(reqBody);
    const response  = await newUser.save();

    console.log("Table Name",request.nextUrl.searchParams.get("tableName"));
    
    return NextResponse.json(
      {
        message: "user created successfully",
        data: response,
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
