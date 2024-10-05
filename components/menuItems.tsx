"use client";
import React from "react";
import bookSvg from "@/assets/Icons/book.svg";
import bugSvg from "@/assets/Icons/bug.svg";
import checkCircleSvg from "@/assets/Icons/check-circle.svg";
import crosshairSvg from "@/assets/Icons/crosshair.svg";
import homeSvg from "@/assets/Icons/home.svg";
import gridSvg from "@/assets/Icons/grid.svg";
import codeSvg from "@/assets/Icons/code.svg";
import Image from "next/image";
import {
  Music,
  LayoutDashboard,
  VideoIcon,
  MessageSquare,
  ImageIcon,
  Code,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const MenuItems = () => {
  const pathname = usePathname();

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "text-sky-500",
      bgColor: "bg-sky-500/30",
    },
    {
      label: "Conversation",
      icon: MessageSquare,
      href: "/conversation",
      color: "text-violet-500",
      bgColor: "bg-violet-500/30",
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      href: "/image",
      color: "text-pink-700",
      bgColor: "bg-pink-700/30",
    },
    {
      label: "Video Generation",
      icon: VideoIcon,
      href: "/video",
      color: "text-orange-700",
      bgColor: "bg-orange-700/30",
    },
    {
      label: "Music Generation",
      icon: Music,
      href: "/music",
      color: "text-emerald-400",
      bgcolor: "bg-emerald-400",
    },
    {
      label: "Code Generation",
      icon: Code,
      href: "/code",
      color: "text-green-500",
      bgcolor: "bg-green-500",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
      bgColor: "bg-gray-300/30",
    },
  ];
  return (
    <ul className="menu  rounded-box w-56">
      <li>
        {routes.map((route) => (
          <Link
            className={cn(
              "text-sm mb-[5px] group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition",

              pathname === route.href
                ? "text-white bg-primary-content/70"
                : "text-zinc-400 "
            )}
            href={route.href}
            key={route.href}
          >
            <div className="flex items-center flex-1">
              <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
              {route.label}
            </div>
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default MenuItems;

//  {
//    routes.map((route) => (
//      <Link
//        className={cn(
//          "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-primary-content/70  rounded-lg transition",

//          pathname === route.href ? "text-white bg-white/10" : "text-zinc-400 "
//        )}
//        href={route.href}
//        key={route.href}
//      >
//        <div className="flex items-center flex-1">
//          <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
//          {route.label}
//        </div>
//      </Link>
//    ));
//  }
