import { Link, Outlet } from "react-router";

export default function Help() {
	const faq = [
		{
			question: "How do I upload student data?",
			answer:
				"Go to the 'Upload CSV' tab, choose your .csv file, and click Preview. Make sure the file follows the correct format: Student ID, Name, CGPA, Courses and Grades.",
		},
		{
			question: "What if my CSV file is not loading?",
			answer:
				"Ensure it is a .csv file and that each line is properly formatted. Avoid special characters or extra commas in data.",
		},
		{
			question: "How do I check a student’s performance?",
			answer:
				"Use the Student Query tab to search by Student ID. You’ll see their CGPA and any failing courses listed.",
		},
		{
			question: "Can I edit student data after uploading?",
			answer:
				"Not currently. Please upload a new corrected file to replace existing data.",
		},
		{
			question: "Who do I contact for support?",
			answer: "Email our support team at support@edutrackr.com",
		},
	];

	return (
		<section className="w-full bg-white m-12 rounded-md shadow-lg p-4 h-max">
			<h1 className="font-bold text-xl mb-4">Help & FAQ</h1>
			<section>
				{faq.map((q, index) => (
					<div key={index} className="mb-4">
						<h3 className="font-bold text-sm mb-1">
							🟠 Question: {q.question}
						</h3>
						<p className="text-sm w-5/6">
							<span className="font-semibold">Answer: </span>
							{q.answer}
						</p>
					</div>
				))}
			</section>
		</section>
	);
}
