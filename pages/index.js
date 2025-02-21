import TableComponent from "../components/TableComponent";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tableau des Subventions</h1>
      <TableComponent />
    </div>
  );
}
