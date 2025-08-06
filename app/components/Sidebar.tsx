import type { FC } from "react";
import { Link, useLocation } from "react-router";

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const location = useLocation();

	const checkActive = (path: string) => {
		return location.pathname.startsWith(path);
	};

	const pages = [
		{ name: "Dashboard", path: "/dashboard" },
		{ name: "Settings", path: "/settings" },
		{ name: "Help & FAQ", path: "/help" },
	];

	return (
		<section
			className={`bg-gradient-to-b from-[#0066CC] to-[#00BFFF] w-1/6 h-screen flex flex-col items-center ${className} `}
		>
			<div className="h-[150px]">
				<img src="/logo.png" alt="" className="w-full h-full" />
			</div>
			<div className="text-white text-lg capitalize flex flex-col items-center list-none gap-6">
				{pages.map((page) => (
					<Link
						key={page.name}
						to={page.path}
						className={`py-1 px-6 font-bold ${checkActive(page.path) ? "bg-white text-[#004A99]" : ""}`}
					>
						{page.name}
					</Link>
				))}
			</div>
		</section>
	);
};
