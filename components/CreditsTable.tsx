import { Credit } from "@/data/credits";

interface CreditsTableProps {
  credits: Credit[];
  className?: string;
}

export function CreditsTable({ credits, className = "" }: CreditsTableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <tbody>
          {credits.map((credit, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <td className="py-3 px-4 text-left">{credit.role}</td>
              <td className="py-3 px-4 text-left font-semibold">
                {credit.production}
              </td>
              <td className="py-3 px-4 text-left">{credit.venue}</td>
              <td className="py-3 px-4 text-left">{credit.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
