"use client";

import axios from "axios";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { Loader2 } from "lucide-react";

import { ProductActions } from "@/components/ProductActions/ProductActions";
import { useProduct } from "@/hooks/useProduct";
import { Product } from "@/types";
import cat from "@/cat.jpg";

const ProductPage = () => {
  const params = useParams();
  const productId = params.productId as string;

  const { data: product, isLoading, isFetching } = useProduct(productId);

  if (isLoading || isFetching) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin h-10 w-10" />
      </main>
    );
  }

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen max-w-6xl mx-auto px-5 pt-5">
      <div className="flex gap-5">
        <Image
          width={300}
          height={300}
          src={product.image || cat}
          alt={product.title}
        />
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p>Price: {product.price} $</p>
          <p>Category: {product.category}</p>
          <p>{product.description}</p>
          <ProductActions product={product} />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
