"use client";

import { useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";
import { ProductProps } from "@/types/item";

type TotalizerProps = {
  priceSum: number;
  count: number;
};

type ProductTotalizerProps = {
  inStock: TotalizerProps;
  lowStock: TotalizerProps;
  outOfStock: TotalizerProps;
};

type ProductsDataProps = {
  products: Array<ProductProps>;
  total: number;
};

export function useTotalizers() {
  return useQuery<ProductTotalizerProps>({
    queryKey: ["productsTotalizers"],
    queryFn: async () => {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_PRODUCTION}/item/totalizers`
      );

      const json = await data.json();
      return json;
    },
    staleTime: 60_000,
  });
}

export function useProducts(search: string) {
  return useQuery<ProductsDataProps>({
    queryKey: ["products", search],
    queryFn: async () => {
      const session = await getSession();
      const token = session?.accessToken;

      if (!token) throw new Error("Usuário não autenticado (client)");

      const data = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_PRODUCTION}/item?search=${search}&page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const json = await data.json();

      return json;
    },
  });
}
