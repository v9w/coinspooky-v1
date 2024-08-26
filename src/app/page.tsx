import Container from "@/components/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
	return (
		<Container className="space-x-4">
			<div className="flex w-full flex-col items-center space-y-4 lg:flex-row lg:space-x-2 lg:space-y-0">
				<Skeleton className="h-20 w-[80%] lg:w-[50%]" />
				<Skeleton className="h-20 w-[80%] lg:w-[50%]" />
			</div>
		</Container>
	);
}
