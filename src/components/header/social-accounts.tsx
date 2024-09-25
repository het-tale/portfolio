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
import ModeToggle from "./mode-toggle";
import { ReactNode } from "react";

export default function SocialAccounts() {
	const accounts: { name: string; icon: ReactNode }[] = [
		{ name: "GitHub", icon: <Icons.gitHub className="w-6 h-6" /> },
		{ name: "Twitter", icon: <Icons.twitter className="w-6 h-6" /> },
		{ name: "LinkedIn", icon: <Icons.linkedin className="w-6 h-6" /> }
	];
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{accounts.map((account, index) => (
					<NavigationMenuItem key={index}>
						<Link href="/" legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									"hover:bg-transparent dark:hover:text-white bg-transparent dark:text-white"
								)}
							>
								{account.icon}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
				<NavigationMenuItem>
					<ModeToggle />
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
