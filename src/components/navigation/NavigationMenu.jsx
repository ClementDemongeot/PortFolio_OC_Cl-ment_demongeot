import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

function NavigationMenu() {
  return (
    <Navbar>
      <Link color="foreground" href="/">
        <h1 className="text-2xl font-bold">
          Clément Demongeot Front-End Developer
        </h1>
      </Link>
      <NavbarContent className="sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#specifications">
            Spécifications
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#projets">
            Projets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavigationMenu;
