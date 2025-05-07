import clsx from "clsx";

import { capitalizeFirstLetter, formatPrice } from "@/helpers/functions";

export type ItemProps = {
  label: string;
  qty: number;
  value: number;
  color: string;
};

type GraphProps = {
  data: Array<ItemProps>;
};

const Graph = ({ data }: GraphProps) => {
  const handleTotalData = () => {
    let total = 0;

    data.forEach((item) => {
      total = total + item.qty;
    });

    return total;
  };

  const calcPercentage = (index: number) => {
    const total = handleTotalData();

    return (data[index].qty / total) * 100;
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <span className="font-rubik text-sm text-light-black">
        <strong className="font-rubik text-base text-black">
          {" "}
          {handleTotalData()}{" "}
        </strong>
        solicitações
      </span>
      <div className="w-full flex justify-between gap-1">
        {data.length > 0 &&
          data.map(
            (item, i) =>
              item.qty > 0 && (
                <div
                  className={clsx("h-[6px] rounded-sm", item.color)}
                  style={{
                    width: `${calcPercentage(i)}%`,
                  }}
                  key={`${item.label} + graphItem`}
                ></div>
              )
          )}
      </div>
      <div className="w-full flex gap-6">
        {data.length > 0 &&
          data.map((item) => (
            <div
              className="flex items-center gap-[4px]"
              key={`${item.label} + graphSub`}
            >
              <div
                className={clsx("w-[12px] h-[12px] rounded-full", item.color)}
              />
              <span className="text-xs font-rubik text-light-black">
                {capitalizeFirstLetter(item.label) + ":"}
              </span>
              <h1 className="text-xs font-rubik text-black">
                {`${item.qty} | ${formatPrice(item.value)}`}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Graph;
