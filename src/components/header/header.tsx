"use client";

import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import MainNav from "./main-nav";
import ModeToggle from "./mode-toggle";
import MobileNav from "./mobile-nav";
import Logo from "./logo";

export default function Header() {
	return (
		<header className="flex justify-between py-2 w-full sticky top-0 z-20 w-full backdrop-blur-md px-4">
			<Logo isMobile={false} />
			<MainNav />
			<MobileNav className="md:hidden" />
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="/" legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									"hover:bg-transparent dark:hover:text-white bg-transparent dark:text-white"
								)}
							>
								<Icons.gitHub className="w-6 h-6" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/" legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									"hover:bg-transparent dark:hover:text-white bg-transparent dark:text-white"
								)}
							>
								<Icons.twitter className="w-6 h-6" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/" legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									"hover:bg-transparent dark:hover:text-white bg-transparent dark:text-white"
								)}
							>
								<Icons.linkedin className="w-6 h-6" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<ModeToggle />
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
}
