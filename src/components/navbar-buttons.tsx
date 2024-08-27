import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

export default function NavbarButtons() {
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
}
