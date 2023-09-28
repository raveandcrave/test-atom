"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { Product } from "@/types";

export const useProducts = () => {
  const getProducts = async () => {
    const { data } = await axios.get<Product[]>("/api/products");

    return data;
  };

  return useQuery({
    queryFn: getProducts,
    queryKey: ["products"],
    staleTime: 1000 * 60 * 5,
  });
};
