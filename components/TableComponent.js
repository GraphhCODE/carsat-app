import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function Home() {
  const [data, setData] = useState([
    { id: 1, secteur: "Risques ergonomiques", subvention: "Risques ergonomiques", objectif: "Réduire l’exposition aux risques liés à des contraintes physiques marquées.", conditions: "Entreprises de 1 à 49 salariés, cotisant au régime général, à jour de leurs cotisations AT/MP, engagement dans la prévention des risques ergonomiques.", taux: "50% du montant HT des équipements, 70% des formations", montantMax: "Plafonné selon budgets", depenses: "Achat d’équipements réduisant les risques ergonomiques, formations, aménagements de postes de travail, sensibilisation.", ouiNon: "☐", depenseDetail: "", montantHT: "-" },
    { id: 2, secteur: "Risques chimiques", subvention: "Captage fumées de diesel", objectif: "Réduire les risques liés aux gaz et fumées d’échappement.", conditions: "Entreprises de 1 à 49 salariés, cotisant au régime général, à jour de leurs cotisations AT/MP, financement d’équipements de captage conformes.", taux: "50% du montant HT des équipements", montantMax: "25 000 €", depenses: "Achat et installation de systèmes d’extraction des gaz et fumées d’échappement.", ouiNon: "☐", depenseDetail: "", montantHT: "-" },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tableau des Subventions</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Risque / Secteur concerné</TableHead>
            <TableHead>Subvention Prévention</TableHead>
            <TableHead>Objectif</TableHead>
            <TableHead>Conditions d’attribution</TableHead>
            <TableHead>Taux d’intervention</TableHead>
            <TableHead>Montant maximum</TableHead>
            <TableHead>Dépenses éligibles</TableHead>
            <TableHead>Oui/Non</TableHead>
            <TableHead>Précisez la dépense éligible</TableHead>
            <TableHead>Montant HT</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.secteur}</TableCell>
              <TableCell>{row.subvention}</TableCell>
              <TableCell>{row.objectif}</TableCell>
              <TableCell>{row.conditions}</TableCell>
              <TableCell>{row.taux}</TableCell>
              <TableCell>{row.montantMax}</TableCell>
              <TableCell>{row.depenses}</TableCell>
              <TableCell>{row.ouiNon}</TableCell>
              <TableCell>{row.depenseDetail}</TableCell>
              <TableCell>{row.montantHT}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
