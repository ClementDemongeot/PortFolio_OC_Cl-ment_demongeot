import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Specifications", href: "#specifications" },
    { name: "Projets", href: "#projets" },
    { name: "Contact", href: "#contact" },
    { name: "Liens", href: "#liens" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    console.log("Menu closed");
  };

  return (
    <Navbar
      className="absolute bg-transparent top-3 left-0 p-2 sm:p-5 "
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      style={{ backdropFilter: "none" }}
    >
      <NavbarContent className="flex items-center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
        <NavbarBrand className="gap-2 sm:gap-3">
          <p className="font-bold sm:text-2xl text-inherit">
            Clément Demongeot
          </p>
          <p className="hidden sm:block font-light text-sm sm:text-xl text-inherit">
            <em>Front-End Developer</em>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-3 sm:gap-2" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className=" bg-text-base md:text-md"
              color="foreground"
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="bg-neutral-40">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className=" text-neutral-600 w-full pt-2 sm:pt-3"
              href={item.href}
              onClick={handleLinkClick}
              size="md"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
