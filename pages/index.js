import TableComponent from "../components/TableComponent";
import { useState } from "react";
import { Button } from "@/components/Button.js";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/Table.js";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Aides CARSAT</h1>
      <TableComponent />
    </div>
  );
}
