"use client";

import { useQuery } from "@tanstack/react-query";

type TotalizerProps = {
  _id: string;
  priceSum: number;
  count: number;
};

type TotalizerRequestProps = {
  pending: TotalizerProps;
  cancelled: TotalizerProps;
  concluded: TotalizerProps;
};

export function useTotalizers() {
  return useQuery<TotalizerRequestProps>({
    queryKey: ["solicitationsTotalizers"],
    queryFn: async () => {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_PRODUCTION}/request/totalizers`
      );

      const json = await data.json();
      console.log(json);

      return json;
    },
    staleTime: 60_000,
  });
}
