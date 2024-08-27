import Link from "next/link";
import Image from "next/image";

export default function Logo() {
	return (
		<Link href="/" className="mr-10 flex items-center space-x-2">
			<Image
				src="/images/logo.svg"
				alt="COINSPOOKY Logo"
				width={32}
				height={32}
				className="w-6 md:w-8"
			/>
			<h1 className="font-jersey text-4xl lowercase md:text-5xl">COINSPOOKY</h1>
		</Link>
	);
}
