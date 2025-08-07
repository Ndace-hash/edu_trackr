import { Link, Outlet, useLocation } from "react-router";
import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Edu Trackr Dashboard" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

const TabsMenu = () => {
	const location = useLocation();

	const tabs = [
		{ name: "Home", path: "/dashboard" },
		{ name: "Upload CSV", path: "/dashboard/upload-csv" },
		{ name: "Students Query", path: "/dashboard/students-query" },
		{ name: "All Records", path: "/dashboard/all-records" },
	];

	const checkActive = (path: string) => {
		return location.pathname == path;
	};

	return (
		<div className="flex gap-6 h-20 items-center">
			{tabs.map((tab) => (
				<Link
					to={tab.path}
					className={` text-sm py-2 px-4 rounded-xl ${checkActive(tab.path) ? "text-white bg-[#004A99]" : "text-black bg-[#D1D5DB]"}`}
					key={tab.path}
				>
					{tab.name}
				</Link>
			))}
		</div>
	);
};

export default function Dashboard() {
	return (
		<section className="px-6 w-full">
			<TabsMenu />
			<div>
				<Outlet />
			</div>
		</section>
	);
}
