import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/react-query-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	preload: true
});

export const metadata: Metadata = {
	title: "Hasnaa Et-taleby | Frontend Developer",
	description: "Personal portfolio of Hasnaa Et-taleby, a frontend developer.",
	icons: { icon: "/logo.svg" }
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(inter.className, "dark:bg-zinc-950")}>
				<ReactQueryProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						enableSystem
						disableTransitionOnChange
					>
						{children}
						<Analytics />
					</ThemeProvider>
				</ReactQueryProvider>
				<Toaster />
			</body>
		</html>
	);
}
