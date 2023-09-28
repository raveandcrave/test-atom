import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { Product } from "@/types";

export const usePutProduct = () => {
  const queryClient = useQueryClient();

  const updateProduct = async (product: Product) => {
    const { data: updatedProduct } = await axios.put<Product>(
      `/api/products/${product.id}`,
      product
    );

    return updatedProduct;
  };

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: (updatedProduct) => {
      queryClient.setQueryData<Product[]>(["products"], (products) => {
        return products?.map((product) => {
          if (product.id === updatedProduct.id) {
            return {
              ...product,
              ...updatedProduct,
            };
          }

          return product;
        });
      });
      queryClient.setQueryData<Product>(["product"], (product) => ({
        ...product,
        ...updatedProduct,
      }));
    },
  });
};
