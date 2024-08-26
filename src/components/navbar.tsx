import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

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
			<div className="flex items-center space-x-4">
				<Button className="flex items-center bg-primary p-4 shadow-primary drop-shadow-md transition-colors duration-300 hover:bg-amber-400">
					Submit Coin
				</Button>
				<Button className="bg-purple-500 text-primary-foreground shadow-purple-500 drop-shadow-md transition-colors duration-300 hover:bg-purple-400">
					<HamburgerMenuIcon />
				</Button>
			</div>
		</Container>
	);
}
