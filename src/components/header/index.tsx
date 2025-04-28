import { PageName } from "./pageName";
import { UserDropdown } from "../userDropdown";

export const Header = () => {
  return (
    <div className="w-auto flex border-b border-gray-200 h-[67.5px] items-center justify-between">
      <PageName />

      <UserDropdown />
    </div>
  );
};
