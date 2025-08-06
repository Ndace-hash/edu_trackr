import { Link, Outlet } from "react-router";
import type { Route } from "./+types/dashboard";
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Edu Trackr Dashboard" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

const TabsMenu = () => {
	return (
		<div className="flex gap-6 h-20 px-4 items-center">
			<Link to={"/dashboard"} className="border py-2 px-4 rounded-xl">
				Home
			</Link>
			<Link
				to={"/dashboard/upload-csv"}
				className="border py-2 px-4 rounded-xl"
			>
				Upload CSV
			</Link>
			<Link
				to={"/dashboard/students-query"}
				className="border py-2 px-4 rounded-xl"
			>
				Student Query
			</Link>
			<Link
				to={"/dashboard/all-records"}
				className="border py-2 px-4 rounded-xl"
			>
				All Records
			</Link>
		</div>
	);
};

export default function Dashboard() {
	return (
		<section>
			<TabsMenu />
			<div>
				<Outlet />
			</div>
		</section>
	);
}
