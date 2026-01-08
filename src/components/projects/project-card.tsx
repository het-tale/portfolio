import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";

import { Link as LinkUrl } from "lucide-react";

interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
	image: string;
	link: string;
}
export default function ProjectCard({
	title,
	description,
	tags,
	link
}: ProjectCardProps) {
	return (
		<Card className="w-[350px] bg-transparent hover:-translate-y-[10px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-cyan-500/50 transition-all duration-300">
			<CardHeader className="h-48">
				<CardTitle className="text-2xl font-bold">{title}</CardTitle>
				<CardDescription className="leading-relaxed">
					{description}
				</CardDescription>
			</CardHeader>

			<CardFooter className="flex justify-between items-start w-full gap-3">
				<div className="flex flex-wrap gap-2 flex-1">
					{tags.map((tag, index) => (
						<Badge
							key={index}
							variant="secondary"
							className="bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-800 dark:text-white border border-gray-300 dark:border-white/20 px-3 py-1 text-xs font-medium"
						>
							{tag}
						</Badge>
					))}
				</div>

				<Link href={link} passHref className="shrink-0">
					<LinkUrl className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
				</Link>
			</CardFooter>
		</Card>
	);
}
