import { useState } from "react";
import { Link, Outlet } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

// Mock Records
const records = [
    {
      name: "Heather Fernandez",
      matricNum: "FUT19287",
      course1: "A",
      course2: "B",
      course3: "B",
      course4: "A",
      course5: "C",
      scgpa: "4.2",
    },
    {
      name: "Richard Deleon",
      matricNum: "FUT19287",
      course1: "A",
      course2: "B",
      course3: "B",
      course4: "A",
      course5: "C",
      scgpa: "4.2",
    },
    {
      name: "Angela Hamilton DDS",
      matricNum: "FUT19287",
      course1: "A",
      course2: "B",
      course3: "B",
      course4: "A",
      course5: "C",
      scgpa: "4.2",
    },
    {
      name: "Heather Fernandez",
      matricNum: "FUT19287",
      course1: "A",
      course2: "B",
      course3: "B",
      course4: "A",
      course5: "C",
      scgpa: "4.2",
    },
    {
      name: "Heather Fernandez",
      matricNum: "FUT19287",
      course1: "A",
      course2: "B",
      course3: "B",
      course4: "A",
      course5: "C",
      scgpa: "4.2",
    },
    {
      name: "Heather Fernandez",
      matricNum: "FUT19287",
      course1: "A",
      course2: "B",
      course3: "B",
      course4: "A",
      course5: "C",
      scgpa: "4.2",
    },
    {
      name: "Heather Fernandez",
      matricNum: "FUT19287",
      course1: "A",
      course2: "B",
      course3: "B",
      course4: "A",
      course5: "C",
      scgpa: "4.2",
    },
  ];


export default function allRecords() {
  const [search, setSearch] = useState<string>("");

  const filteredRecords = records.filter((record: any) => {
    const matchedSearch = !search || record.name.includes(search);
    return matchedSearch;
  })

  return (
    <div className="bg-white grid gap-2 p-6 mt-4 px-10 text-lg rounded-2xl">
      <h2 className="font-bold capitalize">All Student Record</h2>
      <input
        className="border-1 h-16 p-4 rounded-sm"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Filter By Matric number or Name"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Matric Number</TableHead>
            <TableHead className="font-bold">CPT101</TableHead>
            <TableHead className="font-bold">CPT111</TableHead>
            <TableHead className="font-bold">CPT123</TableHead>
            <TableHead className="font-bold">CPT124</TableHead>
            <TableHead className="font-bold">CPT125</TableHead>
            <TableHead className="font-bold">SCGPA</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRecords.map((records: any, key: number) => (
            <TableRow key={key}>
              <TableCell>{records.name}</TableCell>
              <TableCell>{records.matricNum}</TableCell>
              <TableCell>{records.course1}</TableCell>
              <TableCell>{records.course2}</TableCell>
              <TableCell>{records.course3}</TableCell>
              <TableCell>{records.course4}</TableCell>
              <TableCell>{records.course5}</TableCell>
              <TableCell>{records.scgpa}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
