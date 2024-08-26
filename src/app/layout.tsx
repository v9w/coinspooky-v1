import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";

import { roboto, spaceMono, jersey10 } from "@/lib/fonts";
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
					"relative h-screen w-full antialised font-roboto text-md",
					roboto.variable,
					spaceMono.variable,
					jersey10.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<header className="sticky top-0 z-50 w-full border-boder/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
						<Topbar />
						<Navbar />
					</header>
					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
