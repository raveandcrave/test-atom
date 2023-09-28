import axios from "axios";
import { NextResponse } from "next/server";

import { Product } from "@/types";

export async function POST(req: Request) {
  try {
    const product = (await req.json()) as Product;

    // Имитация запроса
    // const newProduct = await axios.post(
    //   "https://fakestoreapi.com/products",
    //   product
    // );

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCT_ID_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET() {
  try {
    const products = await axios.get("https://fakestoreapi.com/products");

    if (!products.data) {
      return new NextResponse("Not Found", { status: 404 });
    }

    return NextResponse.json(products.data);
  } catch (error) {
    console.log("[PRODUCTS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
