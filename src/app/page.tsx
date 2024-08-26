import Container from "@/components/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
	return (
		<Container className="space-x-4">
			<Skeleton className="w-[50%] h-20" />
			<Skeleton className="w-[50%] h-20" />
		</Container>
	);
}
