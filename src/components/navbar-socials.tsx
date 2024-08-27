import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function NavbarSocials() {
	return (
		<>
			<Link
				href=""
				className="pointer hidden items-center space-x-2 rounded bg-purple-950 p-2 md:flex"
			>
				<FaTelegramPlane className="text-md" />
				<p className="font-geist-mono text-xs">7K</p>
			</Link>
			<Link
				href=""
				className="pointer hidden items-center space-x-2 rounded bg-purple-950 p-2 md:flex"
			>
				<FaXTwitter className="text-md" />
				<p className="font-geist-mono text-xs">10K</p>
			</Link>
		</>
	);
}
