"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Problem Statements",
    href: "/problem-statements",
  },
  {
    name: "Our Team",
    href: "/team",
  },
  {
    name: "Judges",
    href: "/judges",
  },
];

function NavComponent() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">LOGO</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem
            key={`${item.href}-${index}`}
            isActive={pathname === item.href}
          >
            <Link
              color={pathname === item.href ? "primary" : "foreground"}
              className="w-full"
              href={item.href}
              size="md"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="https://srm-builds4.devfolio.co/"
            color="primary"
            variant="shadow"
            target="_blank"
            radius="sm"
          >
            Register Now
          </Button>
        </NavbarItem>
        <ThemeSwitcher />
      </NavbarContent>
      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.href}-${index}`}
            isActive={pathname === item.href}
          >
            <Link
              color={pathname === item.href ? "primary" : "foreground"}
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavComponent;
