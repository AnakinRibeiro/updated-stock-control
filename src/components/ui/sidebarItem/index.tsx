"use client";

import {
  Home,
  Archive,
  ScrollText,
  Settings,
  CircleHelp,
  Package,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SideBarItemProps = {
  children: string;
  icon:
    | "home"
    | "solicitations"
    | "products"
    | "stocks"
    | "settings"
    | "support";
  href: string;
  collapsed: boolean;
};

const icons = {
  home: Home,
  solicitations: ScrollText,
  products: Package,
  stocks: Archive,
  settings: Settings,
  support: CircleHelp,
};

export const SidebarItem = ({
  children,
  icon,
  href,
  collapsed,
}: SideBarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const Icon = icons[icon];

  return (
    <Link
      className={`flex text-xs font-sf-pro ${
        isActive
          ? "text-oncrets-primary bg-oncrets-super-light hover:bg-oncrets-light"
          : "text-slate-800 hover:bg-gray"
      } w-full h-[36px] p-[10px] gap-[6.5px] items-center rounded-sm transition-all duration-300`}
      href={href}
    >
      {Icon && <Icon size={16} />}
      {!collapsed && <span>{children}</span>}
    </Link>
  );
};
