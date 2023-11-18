import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { product } from "@/lib/model/product";

export async function GET(request) {
  try {
    //
    await mongoose.connect(connectionStr);
    const data = product.find();
    console.log(data);

    return NextResponse.json("hello");
  } catch {}
}
