import ProjectCard from "./project-card";

export default function Projects() {
	const projects: {
		title: string;
		description: string;
		tags: string[];
		image: string;
		link: string;
	}[] = [
		{
			title: "🤖 AI Code Review",
			description:
				"An intelligent code review tool powered by Mistral AI that provides instant analysis for security vulnerabilities, performance optimizations, and best practices across multiple programming languages.",
			tags: ["Next.js", "Mistral AI", "TypeScript"],
			image: "",
			link: "https://ai-code-review-tool-seven.vercel.app/"
		},
		{
			title: "🎨 PortfolioHub",
			description:
				"Full‑stack CMS powering personal portfolio content with authenticated CRUD, and image uploads",
			tags: ["React", "FastAPI", "PostgreSQL"],
			image: "/undraw_visual_data_re_mxxo.svg",
			link: "https://github.com/het-tale/portfolio-cms"
		},
		{
			title: "🏓 Ft_transcendence",
			description:
				"A dynamic full-stack web application using React.js and Nest.js, providing users with a comprehensive platform for engaging in multiplayer ping pong games and fostering social interactions.",
			tags: ["React", "TailwindCSS"],
			image: "/undraw_gaming_re_cma2.svg",
			link: "https://github.com/het-tale/ft_transcendence"
		},
		{
			title: "🌐 Webserv",
			description:
				"This project involved designing and building a high-performance server capable of handling HTTP requests, parsing headers, and efficiently serving static and dynamic content.",
			tags: ["HTTPS", "NGINX", "Network"],
			image: "/undraw_server_cluster_jwwq.svg",
			link: "https://github.com/het-tale/webserver"
		},
		{
			title: "🐳 Inception",
			description:
				"This project involved setting up and running Nginx, MariaDB as the database management system, and WordPress as the content management system, each encapsulated within separate Docker containers",
			tags: ["Docker", "Devops", "containerization"],
			image: "/undraw_container_ship_re_alm4.svg",
			link: "https://github.com/het-tale/42_inception"
		}
	];
	return (
		<section
			className="flex flex-col w-full p-6 items-center min-h-screen"
			id="projects"
		>
			<h2 className="text-2xl font-bold mb-6">Projects</h2>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						description={project.description}
						tags={project.tags}
						image={project.image}
						link={project.link}
					/>
				))}
			</div>
		</section>
	);
}
