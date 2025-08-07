import { Link, Outlet } from "react-router";

const StudentCard = () => {
	return (
		<div className="student-card bg-[#FFE5E5] py-3 px-4 before:bg-[#FF0000] before:content-[''] before:absolute before:w-1 before:h-full relative before:left-0 before:top-0 rounded-lg ">
			<span className="text-sm">STU002 - Emeka Obi - CGPA: 1.95</span>
		</div>
	);
};

export default function home() {
	return (
		<>
			<h1 className="font-bold my-4 capitalize">Student at Risk</h1>
			<section className="bg-white p-4 flex gap-10 rounded-md">
				<div className="grow w-full">
					<h2 className="mb-4 font-semibold">CGPA below 2.0</h2>
					<div className="flex flex-col gap-4">
						{Array.from({ length: 5 }, (_, index) => (
							<StudentCard key={index} />
						))}
					</div>
				</div>
				<div className="grow w-full">
					<h2 className="mb-4 font-semibold">Students with F grades</h2>
					<div className="flex flex-col gap-4">
						{Array.from({ length: 5 }, (_, index) => (
							<StudentCard key={index} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}
