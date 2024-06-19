import React from "react";

import NavigationMenu from "../navigation/NavigationMenu";
function Header() {
  return (
    <header className="w-full h-20 bg-orange-200 flex ">
      <NavigationMenu />
    </header>
  );
}

export default Header;
