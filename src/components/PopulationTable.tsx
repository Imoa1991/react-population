import { formatPopulation } from "@/lib/utils";

interface TableRow {
  id: string;
  flag?: string;
  name: string;
  population: number;
  percentage: number;
}

interface PopulationTableProps {
  data: TableRow[];
  showFlags?: boolean;
}

export function PopulationTable({
  data,
  showFlags = false,
}: PopulationTableProps) {
  return (
    <div className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {showFlags && (
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Flag
              </th>
            )}
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {showFlags ? "Country" : "Continent"}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Population
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Percentage
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              {showFlags && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={item.flag}
                    alt={`${item.name} flag`}
                    className="h-4 w-6 object-cover"
                  />
                </td>
              )}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {item.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {formatPopulation(item.population)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.percentage.toFixed(1)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
