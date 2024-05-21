import React from "react";
import { appContent } from "./variants";
import HoverEffect from "./HoverEffect";

const tabs = ["Home", "Services", "About", "Contact"];
const Navbar = () => {
  return (
    <div className="bg-white shadow-lg fixed top-0 w-[100%] z-10">
      <div
        className={appContent({
          class: "flex py-2 items-center  justify-between",
        })}
      >
        <img src="/images/Braxweb_logo.png" alt="logo" className="w-[200px] " />
        <div className="flex items-center gap-4  mr-7">
          {tabs.map((tab) => {
            return (
              <div>
                <HoverEffect tab={tab} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
