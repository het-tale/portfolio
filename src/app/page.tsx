"use client";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";

export default function Home() {
	return (
		<div className="flex flex-col dark:text-white">
			<Header />
			<main className="flex flex-col">
				<Hero />
			</main>
		</div>
	);
}
