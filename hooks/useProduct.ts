"use client";

import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { Product } from "@/types";

export const useProduct = (productId: number | string) => {
  const queryClient = useQueryClient();

  const getProduct = async () => {
    const cachedProduct = queryClient
      .getQueryData<Product[]>(["products"])
      ?.find((product) => product.id == productId);

    if (!cachedProduct) {
      const { data: product } = await axios.get<Product>(
        `/api/products/${productId}`
      );

      return product;
    }

    return cachedProduct;
  };

  return useQuery({
    queryFn: getProduct,
    queryKey: ["product"],
    // staleTime: 1000 * 60 * 5,
  });
};
