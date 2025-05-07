"use client";

import SearchBar from "@/components/ui/searchBar/SearchBar";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

const SolicitationsPanel = () => {
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
    </div>
  );
};

export default SolicitationsPanel;
