import {
	type RouteConfig,
	index,
	layout,
	prefix,
	route,
} from "@react-router/dev/routes";

// dashboard routes
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

// auth routes
const auth = prefix("auth", [
	route("login", "./auth/login.tsx"),
	route("register", "./auth/register.tsx"),
]);

// app routes
export default [
	index("routes/home.tsx"),
	layout("./dashboard/layout.tsx", [...dashboard, ...settings, ...help]),
	layout("./auth/layout.tsx", [...auth]),
] satisfies RouteConfig;
