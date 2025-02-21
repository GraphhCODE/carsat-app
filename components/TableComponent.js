import { useState } from "react";
import { Button } from "@/components/Button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/Table";

export default function Home() {
  const [data, setData] = useState([
    { id: 1, secteur: "Risques ergonomiques", subvention: "Risques ergonomiques", objectif: "Réduire l’exposition aux risques liés à des contraintes physiques marquées.", conditions: "Entreprises de 1 à 49 salariés, cotisant au régime général, à jour de leurs cotisations AT/MP, engagement dans la prévention des risques ergonomiques.", taux: "50% du montant HT des équipements, 70% des formations", montantMax: "Plafonné selon budgets", depenses: "Achat d’équipements réduisant les risques ergonomiques, formations, aménagements de postes de travail, sensibilisation.", ouiNon: "☐", depenseDetail: "", montantHT: "-" },
    { id: 2, secteur: "Risques chimiques", subvention: "Captage fumées de diesel", objectif: "Réduire les risques liés aux gaz et fumées d’échappement.", conditions: "Entreprises de 1 à 49 salariés, cotisant au régime général, à jour de leurs cotisations AT/MP, financement d’équipements de captage conformes.", taux: "50% du montant HT des équipements", montantMax: "25 000 €", depenses: "Achat et installation de systèmes d’extraction des gaz et fumées d’échappement.", ouiNon: "☐", depenseDetail: "", montantHT: "-" },
    { id: 5, secteur: "Risques chimiques", subvention: "Risque chimique équipements", objectif: "Réduire les risques liés aux agents chimiques dangereux.", conditions: "Entreprises de 1 à 49 salariés du BTP, cotisant au régime général, financement d’équipements de protection collective.", taux: "50% du montant HT des équipements", montantMax: "25 000 €", depenses: "Armoires ventilées de stockage, fontaines de dégraissage biologique, aspirateurs spécifiques.", ouiNon: "☐", depenseDetail: "", montantHT: "-" },
    { id: 6, secteur: "Risques chimiques", subvention: "Captage cabine de peinture", objectif: "Réduire les risques liés à l’inhalation des vapeurs.", conditions: "Entreprises de 1 à 49 salariés, cotisant au régime général, financement d’équipements de captage conformes.", taux: "50% du montant HT des équipements", montantMax: "25 000 €", depenses: "Installation de cabines de peinture ventilées, équipements de nettoyage automatique.", ouiNon: "☐", depenseDetail: "", montantHT: "-" },
    { id: 3, secteur: "Risques amiante", subvention: "Amiante", objectif: "Réduire les expositions aux fibres d’amiante.", conditions: "Entreprises de 1 à 49 salariés, cotisant au régime général, à jour de leurs cotisations AT/MP, équipement spécifique pour l’amiante, formation d’un référent au risque amiante.", taux: "50% du montant HT des équipements", montantMax: "25 000 €", depenses: "Achat d’aspirateurs avec filtres THE, unités mobiles de décontamination, dispositifs de protection respiratoire.", ouiNon: "☐", depenseDetail: "", montantHT: "-" },
    { id: 4, secteur: "BTP", subvention: "TOP BTP", objectif: "Réduire les risques de chutes de plain-pied et de hauteur.", conditions: "Entreprises de 1 à 49 salariés du BTP, cotisant au régime général, financement d’équipements de prévention des chutes et du risque chimique.", taux: "50% du montant HT des équipements", montantMax: "25 000 €", depenses: "Achat d’échafaudages sécurisés, filets anti-chutes, équipements temporaires.", ouiNon: "☐", depenseDetail: "", montantHT: "-" },
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
