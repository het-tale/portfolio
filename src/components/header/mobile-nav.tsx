import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import Logo from "./logo";
import Navbar from "./navbar";

type MobileProps = React.HTMLAttributes<HTMLButtonElement>;

export default function MobileNav(props: MobileProps) {
	return (
		<Sheet>
			<SheetTrigger {...props}>
				<Menu />
			</SheetTrigger>
			<SheetContent side={"left"} className="dark:bg-zinc-950">
				<SheetHeader>
					<SheetTitle>
						<Logo isMobile={true} />
					</SheetTitle>
				</SheetHeader>
				<Navbar isMobile={true} />
			</SheetContent>
		</Sheet>
	);
}
