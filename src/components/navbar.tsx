import Container from "@/components/container";
import DarkModeToggle from "@/components/dark-mode-toggle";
import Link from "next/link";
import Image from "next/image";

function Logo() {
	return (
		<Link href="/" className="flex space-x-2 items-center">
			<Image
				src="/assets/images/logo.svg"
				alt="COINSPOOKY Logo"
				width={35}
				height={35}
			/>
			<h1 className="text-4xl lowercase font-jersey-10">COINSPOOKY</h1>
		</Link>
	);
}

export default function Navbar() {
	return (
		<Container className="justify-between h-24 mb-4">
			<Logo />
			<DarkModeToggle />
		</Container>
	);
}
