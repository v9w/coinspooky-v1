import Container from "@/components/container";
import Link from "next/link";

export default function Topbar() {
	return (
		<div className="w-full border-b border-slate-900/10 dark:border-slate-50/[0.06]">
			<Container className="h-10">
				<div className="ml-auto font-space-mono text-[0.7rem] -tracking-[0.06em]">
					<Link
						href="/login"
						className="hover:text-primary pointer transition-colors duration-300"
					>
						Login
					</Link>{" "}
					/{" "}
					<Link
						href="/register"
						className="hover:text-primary pointer transition-colors duration-200"
					>
						Register
					</Link>
				</div>
			</Container>
		</div>
	);
}
