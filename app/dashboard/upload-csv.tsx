import { useRef, useState } from "react";

export default function uploadCSV() {
	const fileInput = useRef<HTMLInputElement>(null);
	const [fileName, setFileName] = useState("");

	const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		if (e.target.files?.length) {
			const file = e.target.files[0];
			setFileName(file.name);
		}
	};

	return (
		<section className="w-full bg-white p-6 rounded-lg shadow-lg">
			<h1 className="capitalize font-bold mb-4">Upload Student CSV file</h1>
			<div className="w-full border border-[#E5E7EB] p-[1px] rounded-md mb-2">
				<label htmlFor="upload-csv" className="flex gap-2 items-center">
					<div className="bg-[#808080CC] capitalize py-2 px-4 hover:cursor-pointer">
						Choose File
					</div>
					<span className="text-[#374151]">
						{fileName ? fileName : "No file chosen"}
					</span>
				</label>
				<input
					type="file"
					accept=".csv"
					id="upload-csv"
					className="hidden"
					ref={fileInput}
					onChange={handleFileChange}
				/>
			</div>
			<button className="w-full text-center bg-[#004A99] text-white rounded-md py-1 ">
				Preview
			</button>
			{fileName ? <section id="preview"></section> : null}
		</section>
	);
}
