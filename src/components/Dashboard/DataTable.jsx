export default function DataTable({ data }) {
  if (!data || data.length === 0)
    return (
      <div className="text-center text-muted-foreground py-10 bg-card/40 backdrop-blur rounded-xl border border-border">
        No matching records found.
      </div>
    );

  const keys = [
    "facultyName",
    "projectType",
    "title",
    "domain",
    "fundingAgency",
    "from",
    "to",
    "amount",
    "status",
    "coInvestigator",
  ];

  return (
    <div className="overflow-auto border border-border rounded-xl">
      <table className="w-full text-sm">
        <thead className="bg-background sticky top-0 shadow">
          <tr>
            {keys.map((key) => (
              <th
                key={key}
                className="px-4 py-3 text-left text-primary uppercase tracking-wide text-xs border-b border-border"
              >
                {key.replace(/([A-Z])/g, " $1")}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-primary/5 transition">
              {keys.map((key) => (
                <td
                  key={key}
                  className="px-4 py-3 border-b border-border/40 text-foreground/90 whitespace-nowrap"
                >
                  {row[key]?.toString?.()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
