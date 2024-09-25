"use client";

import Navbar from "./navbar";
export default function MainNav() {
	return (
		<div className="hidden md:flex">
			<Navbar isMobile={false} />
		</div>
	);
}
