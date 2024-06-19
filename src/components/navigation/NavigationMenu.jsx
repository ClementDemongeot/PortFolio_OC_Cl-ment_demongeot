import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { useState } from "react";
import { scrollTo } from "scroll-js";
function NavigationMenu() {
  const [activeItem, setActiveItem] = useState(null);
  const handleClick = async (id) => {
    setActiveItem(id);
    const element = document.getElementById(id);
    if (element) {
      await scrollTo(element, {
        duration: 700,
        easing: "ease-in-out",
      });
    }
  };
  return (
    <Navbar>
      <h1 className="text-2xl font-bold ">
        Clément Demongeot Front-End Developer
      </h1>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link
            color="foreground"
            href="#about"
            onPress={() => handleClick("about")}
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#specifications"
            onPress={() => handleClick("specifications")}
          >
            Spécifications
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#projets"
            onPress={() => handleClick("projets")}
          >
            Projets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#contact"
            onPress={() => handleClick("contact")}
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavigationMenu;
