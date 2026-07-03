import { useState } from 'react'
import { ChevronDown, Table2 } from 'lucide-react'
import type { SchemaTable } from '../../data/mockChallenge'

type SchemaExplorerProps = {
  tables: SchemaTable[]
}

export default function SchemaExplorer({ tables }: SchemaExplorerProps) {
  const [openTable, setOpenTable] = useState<string | null>(tables[0]?.name ?? null)

  return (
    <div className="rounded-lg border border-border bg-bg-card p-4">
      <h2 className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-text-faint">
        <Table2 size={14} />
        Schema
      </h2>
      <ul className="flex flex-col gap-1">
        {tables.map((table) => {
          const isOpen = openTable === table.name
          const panelId = `schema-panel-${table.name}`
          return (
            <li key={table.name}>
              <button
                type="button"
                onClick={() => setOpenTable(isOpen ? null : table.name)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left font-mono text-sm text-text transition-colors hover:bg-bg-elevated"
              >
                {table.name}
                <ChevronDown
                  size={14}
                  className={`text-text-faint transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen && (
                <ul id={panelId} className="ml-2 mt-1 flex flex-col gap-0.5 border-l border-border pl-3">
                  {table.columns.map((column) => (
                    <li
                      key={column.name}
                      className="flex items-center justify-between py-1 font-mono text-xs text-text-muted"
                    >
                      <span>{column.name}</span>
                      <span className="text-text-faint">{column.type}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
