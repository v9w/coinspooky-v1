import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";

import { Jersey, GeistSans, GeistMono } from "@/lib/fonts";
import "@/styles/tailwind.css";
import "@/styles/app.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"antialised relative h-screen w-full font-geist-sans text-sm text-foreground",
					Jersey.variable,
					GeistSans.variable,
					GeistMono.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<header className="border-boder/40 sticky top-0 z-50 mb-8 w-full border-b border-slate-900/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-slate-50/[0.06]">
						<Topbar />
						<Navbar />
					</header>
					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
