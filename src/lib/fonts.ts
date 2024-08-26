import { Roboto, Space_Mono, Jersey_10 } from "next/font/google";

export const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	display: "swap",
	variable: "--font-roboto",
});

export const spaceMono = Space_Mono({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-space-mono",
});

export const jersey10 = Jersey_10({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-jersey-10",
});
