import Container from "@/components/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
	return (
		<Container className="space-x-4">
			<Skeleton className="h-20 w-[50%]" />
			<Skeleton className="h-20 w-[50%]" />
		</Container>
	);
}
