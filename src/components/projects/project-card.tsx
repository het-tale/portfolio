import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
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
	image,
	link
}: ProjectCardProps) {
	return (
		<Card className="w-[350px] bg-transparent">
			<CardHeader className="h-48">
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<Image
					src={image}
					alt={title}
					className="w-full h-48 object-cover"
					width={48}
					height={48}
				/>
			</CardContent>
			<CardFooter className="flex justify-between w-full">
				<div className="flex gap-2 max-w-[80%]">
					{tags.map((tag, index) => (
						<Badge key={index}>{tag}</Badge>
					))}
				</div>

				<Link href={link} passHref>
					<LinkUrl />
				</Link>
			</CardFooter>
		</Card>
	);
}
