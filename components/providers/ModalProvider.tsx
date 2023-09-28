"use client";

import { useEffect, useState } from "react";

import { DeleteProductModal } from "@/components/modals/DeleteProductModal";
import { CreateProductModal } from "@/components/modals/CreateProductModal";
import { ChangeProductModal } from "@/components/modals/ChangeProductModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <DeleteProductModal />
      <CreateProductModal />
      <ChangeProductModal />
    </>
  );
};
