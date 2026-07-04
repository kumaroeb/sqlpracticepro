import { UserRound } from 'lucide-react'

type ManagerInfoProps = {
  manager: string
  department: string
}

export default function ManagerInfo({ manager, department }: ManagerInfoProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-bg-card px-4 py-3">
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-violet/10 text-violet">
        <UserRound size={17} strokeWidth={2} />
      </span>
      <div>
        <p className="text-sm font-medium text-text">{manager}</p>
        <p className="text-xs text-text-muted">Manager, {department}</p>
      </div>
    </div>
  )
}