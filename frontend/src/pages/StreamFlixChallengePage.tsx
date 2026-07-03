import { useState } from 'react'
import Breadcrumb from '../components/challenge/Breadcrumb'
import ChallengeHeader from '../components/challenge/ChallengeHeader'
import BusinessRequest from '../components/challenge/BusinessRequest'
import SchemaExplorer from '../components/challenge/SchemaExplorer'
import SqlEditor from '../components/challenge/SqlEditor'
import RunQueryButton from '../components/challenge/RunQueryButton'
import ResultsPanel from '../components/challenge/ResultsPanel'
import HintSection from '../components/challenge/HintSection'
import WhyThisQueryWorks from '../components/challenge/WhyThisQueryWorks'
import NextChallengeButton from '../components/challenge/NextChallengeButton'
import { mockChallenge, schemaTables } from '../data/mockChallenge'

export default function StreamFlixChallengePage() {
  const [query, setQuery] = useState(mockChallenge.starterQuery)
  const [hasRun, setHasRun] = useState(false)

  return (
    <div className="min-h-screen bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <Breadcrumb items={mockChallenge.breadcrumb} />

        <div className="mt-4">
          <ChallengeHeader
            title={mockChallenge.title}
            difficulty={mockChallenge.difficulty}
            estimatedMinutes={mockChallenge.estimatedMinutes}
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Schema explorer: sidebar on desktop, stacked above the workspace on mobile */}
          <aside className="lg:order-1">
            <div className="lg:sticky lg:top-20">
              <SchemaExplorer tables={schemaTables} />
            </div>
          </aside>

          {/* Main workspace column */}
          <div className="flex flex-col gap-5 lg:order-2">
            <BusinessRequest request={mockChallenge.businessRequest} />

            <SqlEditor value={query} onChange={setQuery} />

            <div>
              <RunQueryButton onRun={() => setHasRun(true)} />
            </div>

            <ResultsPanel
              columns={mockChallenge.results.columns}
              rows={mockChallenge.results.rows}
              hasRun={hasRun}
            />

            <HintSection hint={mockChallenge.hint} />

            <WhyThisQueryWorks explanation={mockChallenge.explanation} hasRun={hasRun} />

            <div className="flex justify-end pt-2">
              <NextChallengeButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
