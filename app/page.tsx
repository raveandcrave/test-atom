"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import ProductCard from "@/components/ProductCard/ProductCard";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/useProducts";
import { useModal } from "@/hooks/useModalStore";
import { useAuth } from "@/hooks/useAuthStore";

export default function Home() {
  const { data: products, isLoading } = useProducts();
  const { onOpen } = useModal();
  const isAuth = useAuth((state) => state.isAuth);
  const router = useRouter();

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin h-10 w-10" />
      </main>
    );
  }

  return (
    <main className="min-h-screen max-w-6xl mx-auto p-5">
      <div className="flex justify-between items-center gap-2 mb-4">
        <Button onClick={() => onOpen("createProduct")} size="lg">
          Add new product
        </Button>
        {isAuth && <span>YOU ARE NOW LOGGED IN</span>}
        <Button
          onClick={
            isAuth
              ? () => signOut({ callbackUrl: "/" })
              : () => router.push("/api/auth/signin")
          }
          size="lg"
        >
          {isAuth ? "Sign Out" : "Sign In"}
        </Button>
      </div>

      <div className=" grid grid-cols-2 gap-8">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
