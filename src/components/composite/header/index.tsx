import { getServerSession } from "next-auth";

import { PageName } from "./pageName";
import { UserDropdown } from "../userDropdown";

import { authOptions } from "@/lib/authOptions"; // ajuste o caminho conforme necessário

export const Header = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) return null;

  return (
    <div className="w-auto flex border-b border-gray-200 h-[67.5px] items-center justify-between">
      <PageName />

      <UserDropdown userData={session.user} />
    </div>
  );
};
