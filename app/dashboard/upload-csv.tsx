import { useRef, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table"

export default function UploadCSV() {
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState("")
  const [csvData, setCsvData] = useState<string[][]>([])

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files?.length) {
      const file = e.target.files[0]
      setFileName(file.name)
    }
  }

  const handlePreview = () => {
    const file = fileInput.current?.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target?.result as string
      const rows = text
        .trim()
        .split("\n")
        .map((row) => row.split(",").map((cell) => cell.trim()))
      setCsvData(rows)
    }
    reader.readAsText(file)
  }

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
      <button
        onClick={handlePreview}
        className="w-full text-center bg-[#004A99] text-white rounded-md py-1"
      >
        Preview
      </button>

      {csvData.length > 0 && (
        <section id="preview" className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                {csvData[0].map((header, idx) => (
                  <TableHead key={idx}>{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {csvData.slice(1).map((row, rowIdx) => (
                <TableRow key={rowIdx}>
                  {row.map((cell, cellIdx) => (
                    <TableCell key={cellIdx}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      )}
    </section>
  )
}
