"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "../ui/input";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
	fullname: z.string(),
	email: z.string().email({ message: "Invalid email address" }),
	message: z
		.string()
		.min(10, { message: "Message must be at least 10 characters long" })
});

export default function ContactForm() {
	const { toast } = useToast();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullname: "",
			email: "",
			message: ""
		}
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		const { fullname, email, message } = values;
		toast({
			title: "Message sent",
			description: `with ${fullname} at ${email} about ${message}`,
			className: "bg-green-500 text-white"
		});
	}
	return (
		<Card className="w-full md:w-[50%] mx-auto bg-transparent">
			<CardHeader></CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="fullname"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Your full name</FormLabel>
									<FormControl className="bg-transparent">
										<Input placeholder="full name" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Your email</FormLabel>
									<FormControl className="bg-transparent">
										<Input
											placeholder="youremail@example.com"
											{...field}
											type="email"
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Your message</FormLabel>
									<FormControl className="bg-transparent">
										<Textarea
											placeholder="Type here your message"
											className="resize-none"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full">
							Send
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
