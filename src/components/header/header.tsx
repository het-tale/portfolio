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
import Image from "next/image";
import ModeToggle from "./mode-toggle";

export default function Header() {
	return (
		<header className="flex justify-between py-2 w-full sticky top-0 z-20 w-full bg-fuchsia-800 backdrop-blur-md">
			<Link href="/">
				<Image
					src="/logo.svg"
					alt="logo"
					width={100}
					height={100}
					className="w-12 text-white stroke-current transition-all duration-200 hover:rotate-180 lg:w-14 bg-transparent rounded"
				/>
			</Link>
			<MainNav />
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="/" legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									"hover:bg-transparent hover:text-white bg-transparent text-white"
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
									"hover:bg-transparent hover:text-white bg-transparent text-white"
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
									"hover:bg-transparent hover:text-white bg-transparent text-white"
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
