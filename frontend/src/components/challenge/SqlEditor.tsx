type SqlEditorProps = {
  value: string
  onChange: (value: string) => void
}

export default function SqlEditor({ value, onChange }: SqlEditorProps) {
  return (
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
  )
}
