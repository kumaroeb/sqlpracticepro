import { Loader2, AlertCircle } from 'lucide-react'

type ResultsPanelProps = {
  columns: string[]
  rows: unknown[][]
  rowCount: number
  executionTimeMs?: number
  hasRun: boolean
  isLoading: boolean
  error: string | null
}

export default function ResultsPanel({
  columns,
  rows,
  rowCount,
  executionTimeMs,
  hasRun,
  isLoading,
  error,
}: ResultsPanelProps) {
  const showMeta = hasRun && !isLoading && !error

  return (
    <div className="rounded-lg border border-border bg-bg-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <h2 className="text-xs font-medium uppercase tracking-wider text-text-faint">Results</h2>
        {showMeta && (
          <span className="text-xs text-text-faint">
            {rowCount} {rowCount === 1 ? 'row' : 'rows'}
            {typeof executionTimeMs === 'number' ? ` · ${executionTimeMs}ms` : ''}
          </span>
        )}
      </div>

      {isLoading ? (
        <div className="flex items-center gap-2 px-4 py-6 text-sm text-text-faint">
          <Loader2 size={14} className="animate-spin" />
          Running your query…
        </div>
      ) : error ? (
        <div className="flex items-start gap-2 px-4 py-4">
          <AlertCircle size={16} className="mt-0.5 flex-none text-rose" />
          <div>
            <p className="text-sm font-medium text-rose">Query failed</p>
            <p className="mt-1 text-sm text-text-muted">{error}</p>
          </div>
        </div>
      ) : !hasRun ? (
        <p className="px-4 py-6 text-sm text-text-faint">Run your query to see results here.</p>
      ) : rows.length === 0 ? (
        <p className="px-4 py-6 text-sm text-text-faint">No rows returned.</p>
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
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-border last:border-0">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-2">
                      {cell === null || cell === undefined ? (
                        <span className="italic text-text-faint">null</span>
                      ) : (
                        String(cell)
                      )}
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
