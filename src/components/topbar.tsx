import Container from "@/components/container";
import {
	RegisterLink,
	LoginLink,
	LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Topbar() {
	const { isAuthenticated } = getKindeServerSession();
	const isUserAuthenticated = await isAuthenticated();
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	return (
		<div className="w-full border-b border-slate-100/[0.06]">
			<Container className="h-12">
				<div className="ml-auto hidden font-geist-mono text-[0.7rem] -tracking-[0.05em] md:block">
					{isUserAuthenticated ? (
						<div className="flex items-center gap-x-2">
							{user.email}
							<LogoutLink>Logout</LogoutLink>
						</div>
					) : (
						<>
							<LoginLink className="pointer transition-colors duration-300 hover:text-purple-500">
								Login
							</LoginLink>{" "}
							/{" "}
							<RegisterLink className="pointer transition-colors duration-300 hover:text-purple-500">
								Register
							</RegisterLink>
						</>
					)}
				</div>
			</Container>
		</div>
	);
}
