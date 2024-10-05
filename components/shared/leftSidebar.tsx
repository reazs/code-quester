import React from "react";
import MenuItems from "../menuItems";
import { LogOut } from "lucide-react";

const LeftSidebar = () => {
  return (
    <div className=" md:inline-block hidden  h-full overflow-y-auto p-[5px] border-r">
      <div className="h-full flex flex-col justify-between">
        <div></div>
        <MenuItems />
        <div className="btn btn-outline">
          <LogOut />
          Log Out
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
