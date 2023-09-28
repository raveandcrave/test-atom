import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(
  req: Request,
  { params }: { params: { productId: number } }
) {
  try {
    if (!params.productId) {
      return new NextResponse("Product ID missing", { status: 400 });
    }

    const { data: product } = await axios.get(
      `https://fakestoreapi.com/products/${params.productId}`
    );

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCT_ID_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { productId: number } }
) {
  try {
    const updatedProduct = await req.json();

    if (!params.productId) {
      return new NextResponse("Product ID missing", { status: 400 });
    }

    // const product = await axios.put(
    //   `https://fakestoreapi.com/products/${params.productId}`,
    //   updatedProduct
    // );

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.log("[PRODUCT_ID_PUT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { productId: number } }
) {
  try {
    if (!params.productId) {
      return new NextResponse("Product ID missing", { status: 400 });
    }

    // await axios.delete(`https://fakestoreapi.com/products/${params.productId}`);

    return NextResponse.json(params.productId);
  } catch (error) {
    console.log("[PRODUCT_ID_PUT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
