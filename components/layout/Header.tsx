"use client";
import { cn } from "@/lib/utils";
import {
  IconBaselineDensityMedium,
  IconHome,
  IconMessage,
  IconPackages,
  IconPhone,
  IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../Sheet";

const links = [
  {
    name: "Home",
    href: "/",
    icon: IconHome,
  },
  {
    name: "About Us",
    href: "/about",
    icon: IconUsers,
  },
  {
    name: "Products",
    href: "/services",
    icon: IconPackages,
  },
  {
    name: "FAQ",
    href: "/faq",
    icon: IconMessage,
  },
  {
    name: "Contact Us",
    href: "/contact",
    icon: IconPhone,
  },
];
const Header = () => {
  const pathname = usePathname();

  return (
    <div className="py-2.5 md:py-4 sticky top-0 bg-white shadow-sm z-50">
      <div className="container flex items-center justify-between">
        <Image
          src="/logo.svg"
          alt="AarogyaNIX"
          width={198}
          height={48}
          quality={100}
          className="w-40 md:w-49.5"
        />
        <div className="hidden lg:flex gap-5 items-center">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={cn(
                "text-gray-600 font-semibold text-base leading-6 hover:text-primary hover:font-bold",
                pathname === link.href && "text-primary font-bold"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <IconBaselineDensityMedium />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader className="py-2.5 px-3">
              <SheetTitle>
                <Image
                  src="/logo.svg"
                  alt="AarogyaNIX"
                  width={198}
                  height={48}
                  quality={100}
                  className="w-40 md:w-49.5"
                />
              </SheetTitle>
            </SheetHeader>
            <div className="px-4 flex flex-col gap-4  ">
              {links.map((link) => (
                <SheetClose key={link.name} asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-gray-600 font-semibold text-base leading-6 flex items-center gap-2 hover:text-primary hover:font-bold",
                      pathname === link.href && "text-primary font-bold"
                    )}
                  >
                    <link.icon />
                    {link.name}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
