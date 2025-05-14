"use client";

import {
  Home,
  Archive,
  ScrollText,
  Settings,
  CircleHelp,
  Package,
  User,
  BriefcaseBusiness,
  LockKeyhole,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

type SideBarItemProps = {
  children: string;
  icon:
    | "home"
    | "solicitations"
    | "products"
    | "stocks"
    | "settings"
    | "support"
    | "user"
    | "company"
    | "password"
    | "logout";
  href: string;
  collapsed: boolean;
  isActive: boolean;
};

const icons = {
  home: Home,
  solicitations: ScrollText,
  products: Package,
  stocks: Archive,
  settings: Settings,
  support: CircleHelp,
  user: User,
  company: BriefcaseBusiness,
  password: LockKeyhole,
  logout: LogOut,
};

export const SidebarItem = ({
  children,
  icon,
  href,
  collapsed,
  isActive,
}: SideBarItemProps) => {
  const Icon = icons[icon];

  return (
    <Link
      className={clsx(
        "flex text-xs font-sf-pro  w-full h-[36px] p-[10px] gap-[6.5px] items-center rounded-sm transition-all duration-300",
        isActive
          ? "text-oncrets-primary bg-oncrets-super-light hover:bg-oncrets-light"
          : "text-black hover:bg-gray",
        collapsed && "justify-center"
      )}
      href={href}
    >
      {Icon && <Icon size={16} />}
      {!collapsed && <span>{children}</span>}
    </Link>
  );
};
