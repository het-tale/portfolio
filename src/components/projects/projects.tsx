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
			title: "AlgoVisualizer",
			description:
				"This project involved designing and building a web application that allows users to visualize various sorting algorithms in real-time, providing a visual representation of how each algorithm functions and how it sorts data.",
			tags: ["React", "Algorithms", "D3.js"],
			image: "/undraw_visual_data_re_mxxo.svg",
			link: "/"
		},
		{
			title: "TrevorUi",
			description:
				"UI library of reusable components using Next.js. This library aims to streamline the development process by providing a consistent and customizable set of UI elements that can be easily integrated into various web applications.",
			tags: ["Next.js", "Storybook", "npm"],
			image: "/undraw_design_components_9vy6.svg",
			link: "/"
		},
		{
			title: "Ft_transcendence",
			description:
				"A dynamic full-stack web application using React.js and Nest.js, providing users with a comprehensive platform for engaging in multiplayer ping pong games and fostering social interactions.",
			tags: ["React", "TailwindCSS"],
			image: "/undraw_gaming_re_cma2.svg",
			link: "/"
		},
		{
			title: "Webserv",
			description:
				"This project involved designing and building a high-performance server capable of handling HTTP requests, parsing headers, and efficiently serving static and dynamic content.",
			tags: ["HTTPS", "NGINX", "Network"],
			image: "/undraw_server_cluster_jwwq.svg",
			link: "/"
		},
		{
			title: "Inception",
			description:
				"This project involved setting up and running Nginx, MariaDB as the database management system, and WordPress as the content management system, each encapsulated within separate Docker containers",
			tags: ["Docker", "Devops", "containerization"],
			image: "/undraw_container_ship_re_alm4.svg",
			link: "/"
		}
	];
	return (
		<section className="flex flex-col w-full p-6 items-center" id="projects">
			<h2 className="text-2xl font-bold mb-6">Projects</h2>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
