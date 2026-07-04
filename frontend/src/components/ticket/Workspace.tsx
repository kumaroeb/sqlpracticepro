type WorkspaceProps = {
  value: string
  onChange: (value: string) => void
}

// Workspace: SQL editor placeholder. This is a plain textarea styled like a
// code editor window, not Monaco — Monaco integration is planned but out of
// scope for this sprint (UI + mock data only, no SQL execution).
export default function Workspace({ value, onChange }: WorkspaceProps) {
  return (
    <div>
      <h2 className="mb-2 text-xs font-medium uppercase tracking-wider text-text-faint">Workspace</h2>
      <div className="overflow-hidden rounded-lg border border-border-bright bg-[#0d1526]">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
          <span className="ml-2 text-xs text-text-faint">query.sql</span>
        </div>
        <label htmlFor="sql-editor" className="sr-only">
          SQL query editor
        </label>
        <textarea
          id="sql-editor"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          spellCheck={false}
          rows={8}
          className="w-full resize-y bg-transparent px-4 py-4 font-mono text-[13px] leading-relaxed text-text outline-none placeholder:text-text-faint"
        />
      </div>
    </div>
  )
}