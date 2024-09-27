import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navbar({ isMobile }: Readonly<{ isMobile: boolean }>) {
	const sections: { name: string; link: string; disabled?: boolean }[] = [
		{ name: "About", link: "#about" },
		{ name: "Projects", link: "#projects" },
		{ name: "Blog", link: "#blog", disabled: true },
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
							"hover:bg-transparent dark:hover:text-white bg-transparent font-normal dark:text-white focus:bg-transparent cursor-pointer",
							section.disabled && "opacity-50 cursor-not-allowed"
						)}
						key={index}
						onClick={() => !section.disabled && scrollToSection(section.link)}
					>
						{section.disabled && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-4 inline-block mr-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
								/>
							</svg>
						)}
						{section.name}
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
