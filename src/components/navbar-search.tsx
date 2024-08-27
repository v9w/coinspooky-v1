import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

export default function NavbarSearch() {
	return (
		<div className="relative mx-12 hidden max-w-96 flex-1 md:flex">
			<span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<FaSearch className="h-5 w-5 text-slate-500" aria-hidden="true" />
			</span>
			<Input
				type="text"
				placeholder="Search coin name..."
				className="rounded-md border-0 bg-purple-950 pl-12 text-primary-foreground focus:outline-none focus:ring-0"
			/>{" "}
		</div>
	);
}
