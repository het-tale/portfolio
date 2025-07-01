import Introduction from "./introduction";
import SkillsSection from "./skills-section";

export default function Hero() {
	// function scrollToSection(section: string) {
	// 	const element = document.querySelector(section);
	// 	if (element) {
	// 		element.scrollIntoView({ behavior: "smooth" });
	// 	}
	// }

	return (
		<section
			className="flex flex-col items-center justify-center w-full 2xl:px-36 p-6 min-h-screen"
			id="about"
		>
			<div className="flex flex-col items-center max-w-4xl">
				<Introduction />
				{/* <div className="flex gap-4 mt-6">
					<a
						href="/Hasnaa_Et-taleby_Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
					>
						My Resume
					</a>
					<button
						onClick={() => scrollToSection("#contact")}
						className="bg-transparent outline outline-neutral-900 dark:outline-neutral-50 text-secondary-foreground hover:bg-secondary/90 px-4 py-2 rounded-md transition-colors"
					>
						Get in Touch
					</button>
				</div> */}
				<SkillsSection />
			</div>
		</section>
	);
}
