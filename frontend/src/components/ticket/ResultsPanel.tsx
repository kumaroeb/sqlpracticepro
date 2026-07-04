type ResultsPanelProps = {
  columns: string[]
  rows: Record<string, string | number>[]
  hasRun: boolean
}

export default function ResultsPanel({ columns, rows, hasRun }: ResultsPanelProps) {
  return (
    <div className="rounded-lg border border-border bg-bg-card">
      <h2 className="border-b border-border px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-text-faint">
        Results
      </h2>

      {!hasRun ? (
        <p className="px-4 py-6 text-sm text-text-faint">
          Run your query to see results here.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-text-faint">
                {columns.map((column) => (
                  <th key={column} className="px-4 py-2 font-mono text-xs font-normal">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="font-mono text-text">
              {rows.map((row, index) => (
                <tr key={index} className="border-b border-border last:border-0">
                  {columns.map((column) => (
                    <td key={column} className="px-4 py-2">
                      {row[column]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}