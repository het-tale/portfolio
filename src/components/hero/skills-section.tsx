import { motion } from "framer-motion";

const skills = [
	"React",
	"TypeScript",
	"Next.js",
	"Tailwind CSS",
	"JavaScript",
	"HTML",
	"CSS",
	"Git",
	"Jest"
];

export default function SkillsSection() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
			className="mt-12 w-full max-w-3xl"
		>
			<h2 className="text-2xl font-semibold mb-4 text-center">My Skills</h2>
			<div className="flex flex-wrap justify-center gap-3">
				{skills.map((skill, index) => (
					<motion.span
						key={skill}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.3, delay: index * 0.1 }}
						className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
					>
						{skill}
					</motion.span>
				))}
			</div>
		</motion.div>
	);
}
