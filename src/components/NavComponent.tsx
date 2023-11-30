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
  Image,
} from "@nextui-org/react";

import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const navItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Tracks",
    href: "#tracks",
  },
  {
    name: "Team",
    href: "#team",
  },
  {
    name: "Judges",
    href: "#judges",
  },
  {
    name: "FAQs",
    href: "#faqs",
  },
];

function NavComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathname, setPathname] = useState(
    window?.location?.href?.split("/").pop() ?? "",
  );
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link href="#" className="font-bold text-inherit">
            <Image
              src="/logo2.png"
              height={200}
              alt="SRM Build 4.0"
              radius="none"
              className="aspect-auto h-10"
            />
          </Link>
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
              onClick={() => {
                setPathname(item.href);
              }}
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
              onClick={() => {
                setPathname(item.href);
              }}
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
