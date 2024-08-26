import Container from "@/components/container";
import DarkModeToggle from "@/components/dark-mode-toggle";
import Link from "next/link";
import Image from "next/image";

function Logo() {
	return (
		<Link href="/" className="flex items-center space-x-2">
			<Image
				src="/images/logo.svg"
				alt="COINSPOOKY Logo"
				width={35}
				height={35}
			/>
			<h1 className="font-jersey text-4xl lowercase">COINSPOOKY</h1>
		</Link>
	);
}

export default function Navbar() {
	return (
		<Container className="h-24 justify-between">
			<Logo />
			<DarkModeToggle />
		</Container>
	);
}
