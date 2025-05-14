"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { LogOut } from "lucide-react";
import { ClickAwayListener } from "@mui/material";

import { capitalizeFirstLetter } from "@/helpers/functions";
import { SidebarItem } from "../../ui/sidebarItem";
import { Button } from "@/components/ui/button";

type Props = {
  userData?: {
    name?: string | null;
    email?: string | null;
    image?: any | null;
    companyId?: string | null;
    role?: any;
    id?: string | null;
  };
};

export const UserDropdown = ({ userData }: Props) => {
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
  };

  useEffect(() => {
    console.log(userData);
  }, []);

  return (
    <div className="flex relative items-center z-1 gap-[15px]">
      <Image
        src={userData?.image.location}
        height={30}
        width={30}
        alt="user-img"
        style={{
          borderRadius: "50px",
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      />

      {open && (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div className="flex flex-col absolute w-[270px] top-[40px] right-[0px] border border-gray drop-shadow-sm bg-white rounded-lg">
            <div className="flex items-center gap-[10px] border-b border-gray pb-[12px] pt-[15px] px-[15px]">
              <Image
                src={userData?.image.location}
                height={30}
                width={30}
                alt="user-img"
                style={{
                  borderRadius: "50px",
                }}
              />
              <div className="flex flex-col gap-[2px]">
                <h1 className="text-xs font-sf-pro text-black">
                  {userData?.name}
                </h1>
                <span className="font-sf-pro text-xs text-darker-gray">
                  {capitalizeFirstLetter(userData?.role)}
                </span>
              </div>
            </div>

            <div className="flex flex-col py-[10px] gap-[4px] px-[8px] border-b border-gray">
              <SidebarItem
                icon="user"
                href="/"
                collapsed={false}
                isActive={false}
              >
                Perfil
              </SidebarItem>
              <SidebarItem
                icon="company"
                href="/"
                collapsed={false}
                isActive={false}
              >
                Empresa
              </SidebarItem>
              <SidebarItem
                icon="password"
                href="/"
                collapsed={false}
                isActive={false}
              >
                Senha
              </SidebarItem>
            </div>

            <div className="flex flex-col py-[10px] gap-[5px] px-[8px] justify-center items-center">
              <Button
                title="Sair"
                icon={<LogOut size={16} />}
                color="logout"
                onClick={() => handleLogout()}
              />
            </div>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};
