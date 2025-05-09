"use client";

import { useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";

import {
  SolicitationProps,
  TotalizerRequestProps,
} from "@/types/solicitations";

type RequestDataProps = {
  requests: Array<SolicitationProps>;
  total: number;
};

export function useTotalizers() {
  return useQuery<TotalizerRequestProps>({
    queryKey: ["solicitationsTotalizers"],
    queryFn: async () => {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_PRODUCTION}/request/totalizers`
      );

      const json = await data.json();
      return json;
    },
    staleTime: 60_000,
  });
}

export function useSolicitations() {
  return useQuery<RequestDataProps>({
    queryKey: ["solicitations"],
    queryFn: async () => {
      const session = await getSession();
      const token = session?.accessToken;

      if (!token) throw new Error("Usuário não autenticado (client)");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_PRODUCTION}/request/user?page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.json();
    },
    staleTime: 60_000,
  });
}
