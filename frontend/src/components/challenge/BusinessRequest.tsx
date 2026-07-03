type BusinessRequestProps = {
  request: string
}

export default function BusinessRequest({ request }: BusinessRequestProps) {
  return (
    <div className="rounded-lg border border-border bg-bg-card px-4 py-3.5 text-sm leading-relaxed text-text-muted">
      <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-amber">
        Business Request
      </span>
      {request}
    </div>
  )
}
