import { Credit } from "@/data/credits";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CreditsTableProps {
  credits: Credit[];
  className?: string;
}

export function CreditsTable({ credits, className = "" }: CreditsTableProps) {
  return (
    <div className={`rounded-lg border border-border overflow-hidden ${className}`}>
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead className="font-bold text-foreground">Role</TableHead>
            <TableHead className="font-bold text-foreground">
              Production
            </TableHead>
            <TableHead className="font-bold text-foreground">Venue</TableHead>
            <TableHead className="font-bold text-foreground">Year</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {credits.map((credit, index) => (
            <TableRow
              key={index}
              className="transition-colors hover:bg-muted/30"
            >
              <TableCell className="font-medium">{credit.role}</TableCell>
              <TableCell className="font-semibold">
                {credit.production}
              </TableCell>
              <TableCell>{credit.venue}</TableCell>
              <TableCell>{credit.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
