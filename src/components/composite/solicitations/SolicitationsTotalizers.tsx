"use client";

import { CircleDollarSign } from "lucide-react";
import Skeleton from "@mui/material/Skeleton";

import { formatPrice } from "@/helpers/functions";
import { useTotalizers } from "@/hooks/useSolicitations";
import Graph from "@/components/ui/graph";
import TotalizerValue from "@/components/ui/totalizerValue";

const SolicitationsTotalizers = () => {
  const { data, isLoading } = useTotalizers();

  console.log("running...");

  return (
    <div className="w-full flex">
      <div className="flex gap-[10px] border-r border-gray-200 pr-[26px] ">
        <div className="w-[28px] h-[28px] flex rounded-full bg-gray-100 items-center justify-center mt-[2px]">
          <CircleDollarSign size={20} className="text-oncrets-primary" />
        </div>

        {data && !isLoading ? (
          <TotalizerValue
            label="valor total das solicitações"
            value={formatPrice(
              data.concluded.priceSum +
                data.pending.priceSum +
                data.cancelled.priceSum
            )}
          />
        ) : (
          <div className="flex flex-col justify-start gap-[10px] items-center">
            <Skeleton variant="rounded" width={220} height={12} />
            <Skeleton variant="rounded" width={180} height={22} />
          </div>
        )}
      </div>

      <div className="w-[50%] ml-[26px] flex items-center">
        {data && !isLoading ? (
          <Graph
            data={[
              {
                label: "cancelled",
                qty: data.cancelled.count,
                value: data.cancelled.priceSum,
                color: "bg-red-500",
              },
              {
                label: "pending",
                qty: data.pending.count,
                value: data.pending.priceSum,
                color: "bg-light-black",
              },
              {
                label: "concluded",
                qty: data.concluded.count,
                value: data.concluded.priceSum,
                color: "bg-emerald-400",
              },
            ]}
          />
        ) : (
          <Skeleton variant="rounded" width={600} height={12} />
        )}
      </div>
    </div>
  );
};

export default SolicitationsTotalizers;
