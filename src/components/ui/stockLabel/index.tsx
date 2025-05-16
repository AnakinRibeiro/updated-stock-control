"use client";

import clsx from "clsx";

type Props = {
  status: "inStock" | "lowStock" | "outOfStock";
};

const labels = {
  inStock: "em estoque",
  lowStock: "estoque baixo",
  outOfStock: "sem estoque",
};

const bgModifiers = {
  inStock: "bg-emerald-400",
  lowStock: "bg-yellow-400",
  outOfStock: "bg-red-500",
};

const colorModifiers = {
  inStock: "text-emerald-400",
  lowStock: "text-yellow-400",
  outOfStock: "text-red-500",
};

const StockLabel = ({ status }: Props) => {
  return (
    <div className="flex items-center gap-[5px]">
      <div
        className={clsx("w-[10px] h-[10px] rounded-[2px]", bgModifiers[status])}
      />
      <span className={clsx("uppercase text-[12.5px]", colorModifiers[status])}>
        {labels[status]}
      </span>
    </div>
  );
};

export default StockLabel;
