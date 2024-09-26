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

import emailjs from "@emailjs/browser";

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
	async function onSubmit(values: z.infer<typeof formSchema>) {
		const { fullname, email, message } = values;
		try {
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
				{ fullname: fullname, user_email: email, message: message },
				{ publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "" }
			);
			toast({
				title: "Email sent",
				description: "Your email has been sent successfully",
				variant: "default"
			});
		} catch (error: any) {
			toast({
				title: "Unable to send email",
				description: `The following error occurred: ${error.message}`,
				variant: "destructive"
			});
		}
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
										<Input
											placeholder="full name"
											{...field}
											className="dark:border-neutral-50 dark:border-opacity-50"
										/>
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
											className="dark:border-neutral-50 dark:border-opacity-50"
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
											{...field}
											className="resize-none dark:border-neutral-50 dark:border-opacity-50"
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
