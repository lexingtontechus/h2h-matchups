"use client";
import React from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
  NBA,
} from "./Icons.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "NBA", url: "nba" },
    { name: "NFL", url: "nfl" },
    { name: "CFB", url: "cfb" },
  ];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    nba: <NBA className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">
            <Link href="/">MATCHUPS</Link>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                NBA
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="NBA"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="live"
              description="Live Games Box Scores."
              startContent={icons.nba}
            >
              <Link color="foreground" href="/nba/live">
                Live
              </Link>
            </DropdownItem>
            <DropdownItem
              key="h2h"
              description="Head To Head MatchUp"
              startContent={icons.flash}
            >
              <Link color="foreground" href="/nba/h2h">
                Head To Head
              </Link>
            </DropdownItem>
            <DropdownItem
              key="standings"
              description="League Standings."
              startContent={icons.activity}
            >
              <Link color="foreground" href="/nba/standings">
                Standings
              </Link>
            </DropdownItem>
            <DropdownItem
              key="Teams"
              description="Team Rosters."
              startContent={icons.user}
            >
              <Link color="foreground" href="/nba/rosters">
                Teams
              </Link>
            </DropdownItem>
            <DropdownItem
              key="news"
              description="Latest NBA News."
              startContent={icons.server}
            >
              <Link color="foreground" href="/nba/news">
                News
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                NFL
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="NBA"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="live"
              description="Live Games Box Scores."
              startContent={icons.nba}
            >
              <Link color="foreground" href="/nba/live">
                Live
              </Link>
            </DropdownItem>
            <DropdownItem
              key="standings"
              description="League Standings."
              startContent={icons.activity}
            >
              <Link color="foreground" href="/nba/standings">
                Standings
              </Link>
            </DropdownItem>
            <DropdownItem
              key="Teams"
              description="Team Rosters."
              startContent={icons.flash}
            >
              <Link color="foreground" href="/nba/rosters">
                Teams
              </Link>
            </DropdownItem>
            <DropdownItem
              key="news"
              description="Latest NBA News."
              startContent={icons.server}
            >
              <Link color="foreground" href="/nba/news">
                News
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                CFB
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="NBA"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="live"
              description="Live Games Box Scores."
              startContent={icons.nba}
            >
              <Link color="foreground" href="/nba/live">
                Live
              </Link>
            </DropdownItem>
            <DropdownItem
              key="standings"
              description="League Standings."
              startContent={icons.activity}
            >
              <Link color="foreground" href="/nba/standings">
                Standings
              </Link>
            </DropdownItem>
            <DropdownItem
              key="Teams"
              description="Team Rosters."
              startContent={icons.flash}
            >
              <Link color="foreground" href="/nba/rosters">
                Teams
              </Link>
            </DropdownItem>
            <DropdownItem
              key="news"
              description="Latest NBA News."
              startContent={icons.server}
            >
              <Link color="foreground" href="/nba/news">
                News
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            CONNECT
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.url}
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
