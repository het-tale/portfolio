import { Icons } from "../icons";
import Introduction from "./introduction";

export default function Hero() {
	return (
		<section className="flex justify-between w-full p-6" id="about">
			<Introduction />
			<Icons.logo className="w-96 stroke-current transition-all duration-200 hover:rotate-180 bg-transparent rounded hidden md:flex" />
		</section>
	);
}
