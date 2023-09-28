"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/useModalStore";
import { Product } from "@/types";

interface ProductActionsProps {
  product: Product;
}

export const ProductActions = ({ product }: ProductActionsProps) => {
  const { onOpen } = useModal();

  return (
    <div className="flex gap-2">
      <Button onClick={() => onOpen("changeProduct", { product })}>
        Change
      </Button>
      <Button
        variant="destructive"
        onClick={() => onOpen("deleteProduct", { product })}
      >
        Delete
      </Button>
    </div>
  );
};
