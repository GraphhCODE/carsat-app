import { useState } from "react";

export default function TableComponent() {
  const [data, setData] = useState([
    { id: 1, secteur: "Risques ergonomiques", subvention: "Risques ergonomiques", objectif: "Réduire l’exposition aux risques...", conditions: "Entreprises de 1 à 49 salariés...", taux: "50%", montantMax: "Plafonné selon budgets", depenses: "Équipements réduisant les risques ergonomiques", montantHT: "-" },
    { id: 2, secteur: "Risques chimiques", subvention: "Captage fumées de diesel", objectif: "Réduire les risques liés aux gaz...", conditions: "Entreprises de 1 à 49 salariés...", taux: "50% du montant HT", montantMax: "25 000 €", depenses: "Systèmes d’extraction des gaz", montantHT: "-" },
  ]);

  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Secteur</th>
          <th className="border border-gray-300 px-4 py-2">Subvention</th>
          <th className="border border-gray-300 px-4 py-2">Objectif</th>
          <th className="border border-gray-300 px-4 py-2">Conditions</th>
          <th className="border border-gray-300 px-4 py-2">Taux</th>
          <th className="border border-gray-300 px-4 py-2">Montant Max</th>
          <th className="border border-gray-300 px-4 py-2">Dépenses éligibles</th>
          <th className="border border-gray-300 px-4 py-2">Montant HT</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="border border-gray-200">
            <td className="border border-gray-300 px-4 py-2">{row.secteur}</td>
            <td className="border border-gray-300 px-4 py-2">{row.subvention}</td>
            <td className="border border-gray-300 px-4 py-2">{row.objectif}</td>
            <td className="border border-gray-300 px-4 py-2">{row.conditions}</td>
            <td className="border border-gray-300 px-4 py-2">{row.taux}</td>
            <td className="border border-gray-300 px-4 py-2">{row.montantMax}</td>
            <td className="border border-gray-300 px-4 py-2">{row.depenses}</td>
            <td className="border border-gray-300 px-4 py-2">{row.montantHT}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
