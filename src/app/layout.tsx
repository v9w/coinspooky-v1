import "@/styles/tailwind.css";
import "@/styles/app.css";
import { Jersey, GeistSans, GeistMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"antialised relative min-h-screen w-full font-geist-sans text-sm",
					Jersey.variable,
					GeistSans.variable,
					GeistMono.variable
				)}
			>
				<header className="sticky top-0 z-50 mb-8 w-full bg-slate-950/75 shadow-primary drop-shadow-md backdrop-blur">
					<Topbar />
					<Navbar />
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
