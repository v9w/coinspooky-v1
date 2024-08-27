import Link from "next/link";
import Image from "next/image";

export default function Logo() {
	return (
		<Link href="/" className="mr-10 flex items-center space-x-2">
			<Image
				src="/images/logo.svg"
				alt="COINSPOOKY Logo"
				width={35}
				height={35}
			/>
			<h1 className="font-jersey text-4xl lowercase lg:text-5xl">COINSPOOKY</h1>
		</Link>
	);
}
