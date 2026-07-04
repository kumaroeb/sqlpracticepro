import { useState } from 'react'
import Breadcrumb from '../components/ticket/Breadcrumb'
import WelcomeSection from '../components/ticket/WelcomeSection'
import ManagerInfo from '../components/ticket/ManagerInfo'
import TicketCard from '../components/ticket/TicketCard'
import DatabaseExplorer from '../components/ticket/DatabaseExplorer'
import Workspace from '../components/ticket/Workspace'
import RunQueryButton from '../components/ticket/RunQueryButton'
import ResultsPanel from '../components/ticket/ResultsPanel'
import HintSection from '../components/ticket/HintSection'
import SolutionPanel from '../components/ticket/SolutionPanel'
import WhyThisQueryWorks from '../components/ticket/WhyThisQueryWorks'
import ManagerFeedback from '../components/ticket/ManagerFeedback'
import NextTicketButton from '../components/ticket/NextTicketButton'
import { mockTicket, schemaTables } from '../data/mockTicket'
import { executeQuery, type ExecuteQuerySuccess } from '../services/api'

export default function StreamFlixTicketPage() {
  const [query, setQuery] = useState(mockTicket.starterQuery)
  const [hasRun, setHasRun] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [result, setResult] = useState<ExecuteQuerySuccess | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleRunQuery() {
    setIsRunning(true)
    setError(null)

    const response = await executeQuery(query)

    setIsRunning(false)
    setHasRun(true)

    if (response.ok) {
      setResult(response.data)
    } else {
      setResult(null)
      setError(response.error)
    }
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <Breadcrumb items={mockTicket.breadcrumb} />

        <div className="mt-5">
          <WelcomeSection />
        </div>

        <div className="mt-4 max-w-sm">
          <ManagerInfo manager={mockTicket.manager} department={mockTicket.department} />
        </div>

        <div className="mt-6">
          <TicketCard
            ticketNumber={mockTicket.ticketNumber}
            department={mockTicket.department}
            priority={mockTicket.priority}
            estimatedMinutes={mockTicket.estimatedMinutes}
            difficulty={mockTicket.difficulty}
            requiredSkills={mockTicket.requiredSkills}
            businessRequest={mockTicket.businessRequest}
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Database explorer: sidebar on desktop, stacked above the workspace on mobile */}
          <aside className="lg:order-1">
            <div className="lg:sticky lg:top-20">
              <DatabaseExplorer tables={schemaTables} />
            </div>
          </aside>

          {/* Main workspace column */}
          <div className="flex flex-col gap-5 lg:order-2">
            <Workspace value={query} onChange={setQuery} />

            <div>
              <RunQueryButton onRun={handleRunQuery} isLoading={isRunning} />
            </div>

            <ResultsPanel
              columns={result?.columns ?? []}
              rows={result?.rows ?? []}
              rowCount={result?.rowCount ?? 0}
              executionTimeMs={result?.executionTimeMs}
              hasRun={hasRun}
              isLoading={isRunning}
              error={error}
            />

            <HintSection hint={mockTicket.hint} />

            <SolutionPanel solution={mockTicket.solution} />

            <WhyThisQueryWorks explanation={mockTicket.explanation} hasRun={hasRun} />

            <ManagerFeedback manager={mockTicket.manager} feedback={mockTicket.managerFeedback} hasRun={hasRun} />

            <div className="flex justify-end pt-2">
              <NextTicketButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
