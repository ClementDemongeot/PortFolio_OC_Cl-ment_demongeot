import React from "react";

import NavigationMenu from "../navigation/NavigationMenu";

function Header() {
  return (
    <header className=" w-full h-full flex">
      <div className="relative w-full h-[600px]">
        <img
          className="w-full h-full object-cover"
          src={"images/DSC08931-1-2+FX.PNG"}
          alt="Image Clem"
        />
        {/* Dégradé flou en bas de l'image */}
      </div>
      <NavigationMenu className="w-full" />
    </header>
  );
}

export default Header;
