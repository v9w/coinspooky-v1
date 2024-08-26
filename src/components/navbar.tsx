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
				<Button className="bg-primary-button shadow-primary-button flex items-center p-4 drop-shadow-md transition-colors duration-300 hover:bg-amber-500">
					Submit Coin
				</Button>
				<Button className="bg-secondary-button shadow-secondary-button text-primary-foreground drop-shadow-md transition-colors duration-300 hover:bg-purple-500">
					<HamburgerMenuIcon />
				</Button>
			</div>
		</Container>
	);
}
