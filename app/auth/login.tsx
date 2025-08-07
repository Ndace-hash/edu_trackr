import { Link } from "react-router";

export default function Login() {
	return (
		<section className="w-full flex items-center justify-center h-screen">
			<div className="w-[600px] bg-white shadow-lg py-12 px-8 flex items-center flex-col rounded-md">
				<h2 className="font-bold text-[#004AAD]">EduTrackr Admin Login</h2>
				<form className="w-full" onSubmit={() => console.log("submitted")}>
					<div className="flex flex-col mb-4">
						<label htmlFor="email">Email Address</label>
						<input
							type="email"
							placeholder="admin@school.com"
							required
							id="email"
							name="email"
							className="border border-[#D1D5DB] py-2 px-2 rounded-md"
						/>
					</div>
					<div className="flex flex-col mb-4">
						<label htmlFor="email">Password</label>
						<input
							type="password"
							required
							id="password"
							name="password"
							className="border border-[#D1D5DB] py-2 px-2 rounded-md"
						/>
					</div>
					<div className="flex justify-between items-center text-sm mb-2">
						<span className="flex items-center gap-1">
							<input type="checkbox" name="remember" id="remember" />
							<label htmlFor="remember">Remember me</label>
						</span>
						<Link to={"#"} className="hover:underline">
							Forgot pasword?
						</Link>
					</div>
					<button
						className="text-center w-full py-2 bg-[#029EED] text-white font-semibold rounded-md mb-3"
						type="submit"
					>
						Login
					</button>
					<div className="text-sm flex items-center justify-between">
						<span>Don't have an account?</span>
						<Link to={"/auth/register"} className="text-[#029EED]">
							Register
						</Link>
					</div>
				</form>
			</div>
		</section>
	);
}
