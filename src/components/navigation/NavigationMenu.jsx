import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { MenuIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar className="flex  items-center ">
      <Link color="foreground" href="/">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
          Clément Demongeot Front-End Developer
        </h1>
      </Link>
      <button
        className="block sm:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MenuIcon className="h-6 w-6" />
      </button>
      <NavbarContent
        className={`${
          isMenuOpen ? "block" : "hidden"
        } flex-col sm:flex sm:flex-row gap-6 sm:gap-8 transition-transform duration-300`}
        justify="end"
      >
        <NavbarItem>
          <Link
            className="hover:text-blue-500 hover:scale-125 transition duration-200"
            color="foreground"
            href="#about"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:text-blue-500 hover:scale-125 transition duration-200"
            color="foreground"
            href="#specifications"
          >
            Spécifications
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:text-blue-500 hover:scale-125 transition duration-200"
            color="foreground"
            href="#projets"
          >
            Projets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:text-blue-500 hover:scale-125 transition duration-200"
            color="foreground"
            href="#contact"
          >
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:text-blue-500 hover:scale-125 transition duration-200"
            color="foreground"
            href="#liens"
          >
            Liens
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavigationMenu;
