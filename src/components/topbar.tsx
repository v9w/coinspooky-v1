import Container from "@/components/container";
import Link from "next/link";

export default function Topbar() {
	return (
		<div className="w-full border-b border-slate-900/10 dark:border-slate-50/[0.06]">
			<Container className="h-10">
				<div className="ml-auto font-geist-mono text-[0.7rem] -tracking-[0.05em]">
					<Link
						href="/login"
						className="pointer transition-colors duration-300 hover:text-primary"
					>
						Login
					</Link>{" "}
					/{" "}
					<Link
						href="/register"
						className="pointer transition-colors duration-200 hover:text-primary"
					>
						Register
					</Link>
				</div>
			</Container>
		</div>
	);
}
