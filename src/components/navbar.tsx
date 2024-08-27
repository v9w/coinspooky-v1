import Container from "@/components/container";
import Logo from "@/components/logo";
import NavbarSearch from "@/components/navbar-search";
import NavbarButtons from "@/components/navbar-buttons";
import NavbarSocials from "@/components/navbar-socials";

export default function Navbar() {
	return (
		<Container className="h-24 justify-between">
			<div className="flex items-center justify-center md:space-x-2">
				<Logo />
				<NavbarSocials />
			</div>
			<NavbarSearch />
			<NavbarButtons />
		</Container>
	);
}
