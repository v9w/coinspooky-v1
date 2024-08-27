import { cn } from "@/lib/utils";

export default function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"mx-auto flex w-full max-w-[1200px] items-center px-4 lg:px-0",
				className
			)}
		>
			{children}
		</div>
	);
}
