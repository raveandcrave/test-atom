"use client";

import { Loader2 } from "lucide-react";

import ProductCard from "@/components/ProductCard/ProductCard";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/useProducts";
import { useModal } from "@/hooks/useModalStore";

export default function Home() {
  const { data: products, isLoading } = useProducts();
  const { onOpen } = useModal();

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin h-10 w-10" />
      </main>
    );
  }

  return (
    <main className="min-h-screen max-w-6xl mx-auto p-5">
      <Button
        onClick={() => onOpen("createProduct")}
        size="lg"
        className="mb-4"
      >
        Add new product
      </Button>
      <div className=" grid grid-cols-2 gap-8">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
