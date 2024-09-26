import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navbar({ isMobile }: Readonly<{ isMobile: boolean }>) {
	const sections: { name: string; link: string }[] = [
		{ name: "About", link: "#about" },
		{ name: "Projects", link: "#projects" },
		{ name: "Blog", link: "#blog" },
		{ name: "Contact", link: "#contact" }
	];
	function scrollToSection(section: string) {
		const element = document.querySelector(section);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}
	return (
		<NavigationMenu className={cn(isMobile ? "flex flex-col w-full my-8" : "")}>
			<NavigationMenuList
				className={cn(isMobile ? "flex flex-col justify-start" : "")}
			>
				{sections.map((section, index) => (
					<NavigationMenuItem
						className={cn(
							isMobile ? "self-start" : "",
							navigationMenuTriggerStyle(),
							"hover:bg-transparent dark:hover:text-white bg-transparent font-normal dark:text-white focus:bg-transparent cursor-pointer"
						)}
						key={index}
						onClick={() => scrollToSection(section.link)}
					>
						{section.name}
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
