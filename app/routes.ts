import {
	type RouteConfig,
	index,
	layout,
	prefix,
	route,
} from "@react-router/dev/routes";

const dashboard = [
	route("/dashboard", "./dashboard/index.tsx", [
		index("./dashboard/home.tsx"),
		route("upload-csv", "./dashboard/upload-csv.tsx"),
		route("students-query", "./dashboard/students-query.tsx"),
		route("all-records", "./dashboard/all-records.tsx"),
	]),
];

const settings = prefix("settings", [index("./settings/index.tsx")]);
const help = prefix("help", [index("./help/index.tsx")]);

export default [
	index("routes/home.tsx"),
	...dashboard,
	...settings,
	...help,
] satisfies RouteConfig;
