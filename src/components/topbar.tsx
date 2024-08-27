import Container from "@/components/container";
import Link from "next/link";

export default function Topbar() {
	return (
		<div className="w-full border-b border-slate-100/[0.06]">
			<Container className="h-12">
				<div className="ml-auto hidden font-geist-mono text-[0.7rem] -tracking-[0.05em] md:block">
					<Link
						href="/login"
						className="pointer transition-colors duration-300 hover:text-purple-500"
					>
						Login
					</Link>{" "}
					/{" "}
					<Link
						href="/register"
						className="pointer transition-colors duration-300 hover:text-purple-500"
					>
						Register
					</Link>
				</div>
			</Container>
		</div>
	);
}
