// import { NextResponse } from "next/server";
// import mongoose from "mongoose";
// import { connectionStr } from "@/lib/db";
// import { product } from "@/lib/model/product";

// export async function GET(request) {
//   try {
//     //
//     await mongoose.connect(connectionStr);
//     const data = product.find();
//     console.log(data);

//     return NextResponse.json("hello");
//   } catch {}
// }

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { product } from "@/lib/model/product";

export async function GET(request) {
  try {
    await mongoose.connect(connectionStr);
    
    // Corrected: Added await and exec() to get the result of the query
    const data = await product.find().exec();
    
    console.log(data);

    // Corrected: Closing the MongoDB connection
    await mongoose.disconnect();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.error("Internal Server Error", 500);
  }
}
