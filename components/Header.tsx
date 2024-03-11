"use client"

import {
  Home,
  Settings,
  Waves,
  MessageCircle,
  PlusSquare,
  Search,
  Heart,
  Repeat,
  AlignJustify,
  Keyboard,
  LogOut,
  Sun,
  AlertTriangle
} from 'lucide-react';
import Link from "next/link";
import { useRecoilState, useSetRecoilState } from 'recoil';

import {
  appModeState,
  navigationMenuTriggerStyleState
} from '@/app/recoil/appState';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { AppModes } from "@/constants";

const Header = () => {
  const [navigationMenuTriggerStyle, setNavigationMenuTriggerStyle] = useRecoilState(navigationMenuTriggerStyleState);
  const setAppMode = useSetRecoilState(appModeState);

  if (typeof window !== 'undefined') {
    const { navigationMenuTriggerStyle: clientSideFunction } = require("@/components/ui/navigation-menu");
    setNavigationMenuTriggerStyle(() => clientSideFunction);
  }

  return (
    <header className="h-full bg-transparent hover:bg-white transition-colors duration-200 text-black flex flex-col justify-start items-center z-50">
      <div className="logo pt-6 pb-6 w-12 flex items-center justify-center">
        <Link href="/"  legacyBehavior passHref>
          <a onClick={() => { setAppMode(AppModes.VISUALIZER); }}><Waves size={36}/></a>
        </Link>
      </div>
      <div className="items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col items-center justify-center">
            <NavigationMenuItem className="m-3">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink onClick={() => { setAppMode(AppModes.HOME); }} className={`flex items-center ${navigationMenuTriggerStyle ? navigationMenuTriggerStyle() : ""}`}>
                  <Home />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="mt-auto mb-5">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <AlignJustify />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ml-2 mb-2 w-64">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuItem>
              <AlertTriangle className="mr-2 h-4 w-4" />
              <span>Report a problem</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Sun className="mr-2 h-4 w-4" />
              <span>Switch appearance</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Header;
