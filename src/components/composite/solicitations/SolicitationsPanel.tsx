"use client";

import { Plus } from "lucide-react";

import { useSolicitations } from "@/hooks/useSolicitations";

import SearchBar from "@/components/ui/searchBar/SearchBar";
import { Button } from "@/components/ui/button";
import Table from "../table";
import { TableColumn } from "@/types/table";
import { SolicitationProps } from "@/types/solicitations";
import { ProductProps } from "@/types/item";
import { formatPrice } from "@/helpers/functions";

const sumProductPrices = (productArray: Array<ProductProps>) => {
  let finalPrice = 0;

  productArray.forEach((product) => {
    finalPrice =
      finalPrice +
      product.costValue[product.costValue.length - 1].price *
        (product.itemQnty ? product.itemQnty : 1);
  });

  return formatPrice(finalPrice);
};

const sumProductsQty = (productArray: Array<ProductProps>) => {
  let finalQty = 0;

  productArray.forEach((product) => {
    finalQty = finalQty + 1 * (product.itemQnty ? product.itemQnty : 1);
  });

  return finalQty;
};

const headerItems: Array<TableColumn<SolicitationProps>> = [
  {
    header: "solicitação",
    key: "_id",
    renderFirstCell: (row) => (
      <div className="flex flex-col gap-[5px] w-full">
        <span className="font-rubik text-[12.5px] text-black font-medium">
          {row._id}
        </span>
        <div className="flex gap-[10px]">
          <span>{sumProductsQty(row.items)} itens</span>
          <span>{sumProductPrices(row.items)}</span>
        </div>
      </div>
    ),
  },
  {
    header: "solicitante",
    key: "createdBy",
  },
  {
    header: "criado em",
    key: "createdAt",
    renderFirstCell: (row) =>
      new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(row.createdAt)),
  },
  {
    header: "data de necessidade",
    key: "necessaryDate",
    renderFirstCell: (row) =>
      new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(row.necessaryDate)),
  },
  {
    header: "tipo",
    key: "type",
    renderFirstCell: (row) => <span>{row.type.title}</span>,
  },
  {
    header: "status",
    key: "statusOrder",
    renderFirstCell: (row) => <span>{row.statusOrder}</span>,
  },
];

const SolicitationsPanel = () => {
  const { data, isLoading } = useSolicitations();

  const handleSearch = (value: string) => {
    console.log("Pesquisando...");
  };

  return (
    <div className="w-full border-t border-gray-200 mt-[40px] py-[20px]">
      <div className="w-full flex justify-between items-center">
        <SearchBar onSubmit={(value: string) => handleSearch(value)} />
        <Button
          title="Nova Solicitação"
          color="primary"
          size="small"
          icon={<Plus size={14} />}
        />
      </div>

      <div className="mt-[20px]">
        {!isLoading && data ? (
          <h1>
            <Table
              columns={headerItems}
              content={data?.requests}
              action={(row) => console.log(row)}
            />
          </h1>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default SolicitationsPanel;
