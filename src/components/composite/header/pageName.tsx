"use client";

import {
  Home,
  Archive,
  ScrollText,
  Settings,
  CircleHelp,
  Package,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { capitalizeFirstLetter } from "@/helpers/functions";

const iconsMap: { [key: string]: React.ReactNode } = {
  "/": <Home size={20} className="text-slate-800" />,
  "/solicitations": <ScrollText size={20} className="text-slate-800" />,
  "/products": <Package size={20} className="text-slate-800" />,
  "/stocks": <Archive size={20} className="text-slate-800" />,
  "/settings": <Settings size={20} className="text-slate-800" />,
  "/support": <CircleHelp size={20} className="text-slate-800" />,
};

export const PageName = () => {
  const pathname = usePathname();
  const currentIcon = iconsMap[pathname] || (
    <Home size={20} className="text-slate-800" />
  );

  return (
    <div className="flex items-center gap-[6px]">
      {currentIcon}
      <h1 className={`text-base text-slate-800 font-sf-pro`}>
        {pathname === "/"
          ? "Home"
          : capitalizeFirstLetter(pathname.replace("/", ""))}
      </h1>
    </div>
  );
};
