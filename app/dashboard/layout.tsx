import type { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router";
import { Sidebar } from "~/components/Sidebar";

const DashboardLayout = () => {
	return (
		<div className="flex">
			<Sidebar />
			<Outlet />
		</div>
	);
};

export default DashboardLayout;
