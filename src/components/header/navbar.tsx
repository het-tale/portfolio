import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navbar({ isMobile }: Readonly<{ isMobile: boolean }>) {
	return (
		<NavigationMenu className={cn(isMobile ? "flex flex-col w-full my-8" : "")}>
			<NavigationMenuList
				className={cn(isMobile ? "flex flex-col justify-start" : "")}
			>
				<NavigationMenuItem className={cn(isMobile ? "self-start" : "")}>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink
							className={cn(
								navigationMenuTriggerStyle(),
								"hover:bg-transparent dark:hover:text-white bg-transparent font-normal dark:text-white"
							)}
						>
							About
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className={cn(isMobile ? "self-start" : "")}>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink
							className={cn(
								navigationMenuTriggerStyle(),
								"hover:bg-transparent dark:hover:text-white bg-transparent dark:text-white font-normal"
							)}
						>
							Projects
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className={cn(isMobile ? "self-start" : "")}>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink
							className={cn(
								navigationMenuTriggerStyle(),
								"hover:bg-transparent dark:hover:text-white bg-transparent dark:text-white font-normal"
							)}
						>
							Blog
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className={cn(isMobile ? "self-start" : "")}>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink
							className={cn(
								navigationMenuTriggerStyle(),
								"hover:bg-transparent dark:hover:text-white bg-transparent dark:text-white font-normal"
							)}
						>
							Contact
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
