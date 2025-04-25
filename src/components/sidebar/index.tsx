"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";

import { SidebarItem } from "./sidebarItem";

import { ChevronLeft } from "lucide-react";
import { useState } from "react";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`flex flex-col h-screen bg-gray-50 ${
        collapsed ? "w-[65px] p-[12px]" : "w-3xs p-[20px]"
      } border border-gray-200 relative justify-between transition-all duration-300`}
    >
      <div>
        <div className="w-full flex border-b border-gray-200 pb-[20px]">
          <Image
            src={`/${
              collapsed ? "iconBlackBlue.png" : "oncrets-logo-black.svg"
            }`}
            alt="Logo Oncrets"
            width={collapsed ? 30 : 110}
            height={40}
          />

          <button
            aria-label={`open-btn`}
            id="sidebar-btn"
            className="absolute -right-[12px] top-[34px] transform -translate-y-1/2 bg-white border border-gray-200 w-[24px] h-[24px] rounded-full flex justify-center items-center cursor-pointer shadow"
            onClick={() => setCollapsed(!collapsed)}
          >
            <ChevronLeft
              size={16}
              className={`transition-transform duration-300 ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <div className={`w-full flex flex-col gap-[12px] mt-[22px]`}>
          {!collapsed && (
            <span
              className={`${rubik.className} uppercase text-[10.5px] text-gray-400`}
            >
              menu principal
            </span>
          )}
          <SidebarItem icon="home" href="/" collapsed={collapsed}>
            Home
          </SidebarItem>
          <SidebarItem
            icon="solicitations"
            href="/solicitations"
            collapsed={collapsed}
          >
            Solicitations
          </SidebarItem>
          <SidebarItem icon="products" href="/products" collapsed={collapsed}>
            Products
          </SidebarItem>
          <SidebarItem icon="stocks" href="/stocks" collapsed={collapsed}>
            Stocks
          </SidebarItem>
        </div>
      </div>

      <div>
        <div className="w-full flex flex-col gap-[12px] pb-[22px]">
          <SidebarItem icon="settings" href="/settings" collapsed={collapsed}>
            Settings
          </SidebarItem>
          <SidebarItem icon="support" href="/support" collapsed={collapsed}>
            Help & Support
          </SidebarItem>
        </div>

        <div className="w-full flex border-t border-gray-200 gap-[10px] pt-[22px]">
          <Image
            src={"/CompanyLogo.png"}
            alt="Logo Oncrets"
            width={36}
            height={36}
          />
          {!collapsed && (
            <div className="flex flex-col justify-between">
              <span className="text-xs text-slate-800">Evehx Engenharia</span>
              <span className="text-[10.5px] text-gray-500">Geral - CWB</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
