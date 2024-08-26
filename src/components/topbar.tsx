import Container from "@/components/container";
import Link from "next/link";

export default function Topbar() {
	return (
		<div className="w-full border-b border-slate-900/10 dark:border-slate-50/[0.06]">
			<Container className="h-10 font-space-mono text-[0.7rem]">
				<div className="ml-auto -tracking-[0.06em]">
					<Link
						href="#"
						className="hover:text-primary pointer transition-colors duration-200"
					>
						Login
					</Link>{" "}
					/{" "}
					<Link
						href="#"
						className="hover:text-primary pointer transition-colors duration-200"
					>
						Register
					</Link>
				</div>
			</Container>
		</div>
	);
}
