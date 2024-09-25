"use client";

import MainNav from "./main-nav";

import MobileNav from "./mobile-nav";
import Logo from "./logo";
import SocialAccounts from "./social-accounts";

export default function Header() {
	return (
		<header className="flex justify-between py-2 w-full sticky top-0 z-20 w-full backdrop-blur-md px-4">
			<Logo isMobile={false} />
			<MainNav />
			<MobileNav className="md:hidden" />
			<SocialAccounts />
		</header>
	);
}
