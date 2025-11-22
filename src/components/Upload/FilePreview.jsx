import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function FilePreview() {
  const { previewData } = useContext(DataContext);

  if (!previewData || previewData.length === 0)
    return (
      <div className="bg-card/60 backdrop-blur-xl p-10 rounded-xl border border-border text-center shadow-lg animate-fadeIn">
        <h2 className="text-2xl font-semibold text-primary mb-2">No Preview Available</h2>
        <p className="text-muted-foreground">
          Upload an Excel file first to see extracted research data here.
        </p>
      </div>
    );

  const first20 = previewData.slice(0, 20);

  return (
    <div className="bg-card/70 backdrop-blur-xl p-8 rounded-xl border border-border shadow-lg animate-fadeIn">

      <h2 className="text-2xl font-semibold text-primary mb-6">
        Preview (First 20 Rows)
      </h2>

      <div className="overflow-auto max-h-[600px] rounded-lg border border-border relative">

        {/* Scroll fade overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-background to-transparent" />

        <table className="w-full border-collapse text-sm">
          <thead className="sticky top-0 bg-background z-10 shadow-md">
            <tr>
              {Object.keys(first20[0]).map((k) => (
                <th
                  key={k}
                  className="px-4 py-3 text-left text-primary border-b border-border font-semibold uppercase tracking-wide text-xs"
                >
                  {k}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {first20.map((row, i) => (
              <tr
                key={i}
                className="hover:bg-primary/5 transition-colors border-b border-border/40"
              >
                {Object.values(row).map((v, j) => (
                  <td
                    key={j}
                    className="px-4 py-3 whitespace-nowrap text-foreground/90"
                  >
                    {v?.toString?.()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
