"use client"

import Link from "next/link"
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IconMenu2 } from '@tabler/icons-react';
import { Logo } from "@/components/logo";

export function Navigation({ className }: { className?: string }) {
  return (
    <>
      <div className={cn("flex sm:hidden", className)}>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <IconMenu2 stroke={2} />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-wrap px-4 space-y-2">
              <div className="w-full">
                <p className="font-bold">Household</p>
                <ul className="grid grid-cols-1">
                  {navigationContent.household.map((component) => (
                    <Link
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </Link>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <ul className="grid grid-cols-1">
                  {navigationContent.pricing.map((component) => (
                    <Link
                      className="font-bold"
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.title}
                    </Link>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <p className="font-bold">Pets</p>
                <ul className="grid grid-cols-1">
                  {navigationContent.account.map((component) => (
                    <Link
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className={cn("hidden sm:flex", className)}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Household</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-96">
                  {navigationContent.household.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {navigationContent.pricing.map((component) => (
                <NavigationMenuLink key={component.title} asChild className={navigationMenuTriggerStyle()}>
                  <Link href={component.href}>{component.title}</Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Account</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-96 gap-2 md:grid-cols-2">
                  {navigationContent.account.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

interface NavigationLink {
  title: string;
  href: string;
  description?: string;
}

interface NavigationContent {
  household: NavigationLink[]
  pricing: NavigationLink[]
  account: NavigationLink[]
}

const navigationContent: NavigationContent = {
  household: [
    {
      title: "Create",
      href: "/create-a-household",
      description:
        "Create a new household",
    },
    {
      title: "Household",
      href: "/household",
      description:
        "Make a change to my household",
    },
    {
      title: "Add a pet",
      href: "/household",
      description:
        "Add a pet to my household",
    },
    {
      title: "Update a pet",
      href: "/household",
      description:
        "Update infomation about a pet",
    },
  ],
  pricing: [
    {
      title: "Pricing",
      href: "pricing",
    },
  ],
  account: [
    {
      title: "Privacy",
      href: "/account",
      description:
        "Manage my accounts privacy",
    },
    {
      title: "Account Details",
      href: "/account",
      description:
        "Update my accounts details",
    },
    {
      title: "Settings",
      href: "/account",
      description:
        "Make changes to your whole account",
    },
  ]
}
