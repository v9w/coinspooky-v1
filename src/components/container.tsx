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
				"container max-w-screen-xl w-full mx-auto flex items-center",
				className
			)}
		>
			{children}
		</div>
	);
}
