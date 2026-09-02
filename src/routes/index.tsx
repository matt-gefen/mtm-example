import { NumberTicker } from '#/components/ui/number-ticker'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <h1 className="font-heading text-5xl font-bold">MTM Recognition</h1>
      <div className="mt-4">
        <p>Over</p>
        <NumberTicker value={25000000} className="text-4xl" />
        <p>People Celebrated</p>
      </div>
    </div>
  )
}
