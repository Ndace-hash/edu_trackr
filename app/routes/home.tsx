import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<div className="flex">
			<section className="bg-gradient-to-b from-[#0066CC] to-[#00BFFF] w-1/6 h-screen flex flex-col items-center">
				<h2 className="text-2xl text-white font-semibold my-12">EduTrackr</h2>
				<div className="text-white text-lg capitalize flex flex-col items-center list-none gap-6">
					<li className="py-1 px-6 bg-white text-[#004A99] font-bold">
						Dashboard
					</li>
					<li>Settings</li>
					<li>Help & FAQ</li>
				</div>
			</section>
			<section>hello</section>
		</div>
	);
}
