import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { Product } from "@/types";

export const usePostProduct = () => {
  const queryClient = useQueryClient();

  const createProduct = async (product: Product) => {
    const { data: newProduct } = await axios.post("/api/products", product);

    return newProduct;
  };

  return useMutation({
    mutationFn: createProduct,
    onSuccess: (newProduct) => {
      queryClient.setQueryData<Product[]>(["products"], (products) => {
        if (products) {
          return [newProduct, ...products];
        } else {
          return [newProduct];
        }
      });
    },
  });
};
