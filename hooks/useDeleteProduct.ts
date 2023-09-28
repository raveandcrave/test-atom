"use client";

import axios from "axios";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product } from "@/types";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const deleteProduct = async (productId: string) => {
    const { data } = await axios.delete(`/api/products/${productId}`);

    return data;
  };

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: (productId) => {
      queryClient.setQueryData<Product[]>(["products"], (products) =>
        products?.filter((product) => product.id != productId)
      );
    },
  });
};
