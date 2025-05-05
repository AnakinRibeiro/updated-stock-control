import { CircleDollarSign } from "lucide-react";
import { formatPrice } from "@/helpers/functions";

import Graph from "@/components/ui/graph";

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

const SolicitationsTotalizers = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL_PRODUCTION}/request/totalizers`,
    {
      next: {
        revalidate: 60,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const totalizers = (await data.json()) as TotalizerRequestProps;

  return (
    <div className="w-full flex">
      <div className="flex gap-[10px] border-r border-gray-200 pr-[26px]">
        <div className="w-[28px] h-[28px] flex rounded-full bg-gray-100 items-center justify-center mt-[2px]">
          <CircleDollarSign size={20} className="text-oncrets-primary" />
        </div>

        <div className="flex flex-col justify-start gap-[10px]">
          <span className={`font-rubik text-xs uppercase text-black`}>
            valor total das solicitações
          </span>
          <h1
            className={`font-rubik text-[20.5px] uppercase text-slate-700 font-medium`}
          >
            {formatPrice(
              totalizers.concluded.priceSum +
                totalizers.pending.priceSum +
                totalizers.cancelled.priceSum
            )}
          </h1>
        </div>
      </div>

      <div className="w-[50%] ml-[26px]">
        <Graph
          data={[
            {
              label: "cancelled",
              qty: totalizers.cancelled.count,
              value: totalizers.cancelled.priceSum,
              color: "#ef4444",
            },
            {
              label: "pending",
              qty: totalizers.pending.count,
              value: totalizers.pending.priceSum,
              color: "#000",
            },
            {
              label: "concluded",
              qty: totalizers.concluded.count,
              value: totalizers.concluded.priceSum,
              color: "#22c55e",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SolicitationsTotalizers;
