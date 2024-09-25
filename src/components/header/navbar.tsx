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
	const sections: { name: string; link: string }[] = [
		{ name: "About", link: "#about" },
		{ name: "Projects", link: "#projects" },
		{ name: "Blog", link: "/" },
		{ name: "Contact", link: "/" }
	];
	return (
		<NavigationMenu className={cn(isMobile ? "flex flex-col w-full my-8" : "")}>
			<NavigationMenuList
				className={cn(isMobile ? "flex flex-col justify-start" : "")}
			>
				{sections.map((section, index) => (
					<NavigationMenuItem
						className={cn(isMobile ? "self-start" : "")}
						key={index}
					>
						<Link href={section.link} legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									"hover:bg-transparent dark:hover:text-white bg-transparent font-normal dark:text-white focus:bg-transparent"
								)}
							>
								{section.name}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
