"use client";

import { Plus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import { useProducts } from "@/hooks/useProducts";
import SearchBar from "@/components/ui/searchBar/SearchBar";
import { Button } from "@/components/ui/button";
import Table from "../table";
import StockLabel from "@/components/ui/stockLabel";

import { TableColumn } from "@/types/table";
import { ProductProps } from "@/types/item";
import { formatPrice } from "@/helpers/functions";
import { useEffect } from "react";

const handleStatus = (product: ProductProps) => {
  if (product.stockQty >= product.securityStock) {
    return "inStock";
  } else if (
    product.stockQty < product.securityStock &&
    product.stockQty > product.minStock
  ) {
    return "lowStock";
  } else {
    return "outOfStock";
  }
};

const headerItems: Array<TableColumn<ProductProps>> = [
  {
    header: "nome",
    key: "title",
    renderFirstCell: (row) => (
      <div className="flex items-center gap-[10px]">
        {row.imgSrc ? (
          <Image
            src={row.imgSrc}
            alt="product_img"
            width={35}
            height={35}
            style={{
              borderRadius: "50px",
              border: "1px solid #DFDFDF",
              objectFit: "contain",
            }}
          />
        ) : (
          <div className="flex items-center justify-center rounded-[50px] w-[35px] h-[35px] border border-[#DFDFDF]">
            {row.title.substring(0, 2).toUpperCase()}
          </div>
        )}
        <span className="font-medium">{row.title}</span>
      </div>
    ),
  },
  {
    header: "descrição",
    key: "description",
  },
  {
    header: "qnt. em estoque",
    key: "stockQty",
    renderFirstCell: (row) => (
      <span>{`${row.stockQty}${row.unitOfMeasurement}`}</span>
    ),
  },
  {
    header: "estoque",
    key: "minStock",
    renderFirstCell: (row) => <StockLabel status={handleStatus(row)} />,
  },
  {
    header: "preço",
    key: "costValue",
    renderFirstCell: (row) => (
      <span>
        {row.costValue[row.costValue.length - 1].price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    ),
  },
];

export default function ProductPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data, isLoading } = useProducts(searchParams.get("search") || "");

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("search", value);
    router.push(`?${params.toString()}`);
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
          <Table
            columns={headerItems}
            content={data?.products}
            action={(row) => console.log(row)}
          />
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}
