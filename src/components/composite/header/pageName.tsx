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

  const capitalizeFirstLetter = (str: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

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
