import Container from "@/components/container";
import Logo from "@/components/logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaBars, FaSearch, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const NavbarButtons = () => {
	return (
		<div className="flex items-center justify-center space-x-4">
			<Button
				asChild
				className="bg-primary-button shadow-primary-button hidden items-center p-4 drop-shadow-md transition-colors duration-300 hover:bg-amber-500 md:flex"
			>
				<Link href="#">Submit Coin</Link>
			</Button>
			<Button className="bg-secondary-button shadow-secondary-button text-primary-foreground drop-shadow-md transition-colors duration-300 hover:bg-purple-500">
				<FaBars />
			</Button>
		</div>
	);
};

const NavbarSearch = () => {
	return (
		<div className="relative mx-12 hidden max-w-96 flex-1 md:flex">
			<span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<FaSearch className="h-5 w-5 text-purple-400" aria-hidden="true" />
			</span>
			<Input
				type="text"
				placeholder="Search coin name..."
				className="rounded border-0 bg-purple-950 pl-12 text-primary-foreground focus:outline-none focus:ring-0"
			/>{" "}
		</div>
	);
};

const NavbarSocials = () => {
	return (
		<>
			<Link
				href=""
				className="pointer hidden items-center space-x-2 rounded bg-purple-950 p-2 text-purple-200 md:flex"
			>
				<FaTelegramPlane className="text-md" />
				<p className="text-xs font-bold">7K</p>
			</Link>
			<Link
				href=""
				className="pointer hidden items-center space-x-2 rounded bg-purple-950 p-2 text-purple-200 md:flex"
			>
				<FaXTwitter className="text-m" />
				<p className="text-xs font-bold">10K</p>
			</Link>
		</>
	);
};

export default function Navbar() {
	return (
		<Container className="h-24 justify-between">
			<div className="flex items-center justify-center md:space-x-2">
				<Logo />
				<NavbarSocials />
			</div>
			<NavbarSearch />
			<NavbarButtons />
		</Container>
	);
}
