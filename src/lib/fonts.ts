import { Jersey_10 } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

const Jersey = Jersey_10({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-jersey",
});

export { Jersey, GeistSans, GeistMono };
