"use client";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";

export default function Home() {
	return (
		<div className="flex flex-col dark:text-white w-full">
			<Header />
			<main className="flex flex-col md:gap-36 w-full">
				<Hero />
				<Projects />
				<Contact />
				<Footer />
			</main>
		</div>
	);
}
