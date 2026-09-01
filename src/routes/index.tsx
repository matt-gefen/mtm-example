import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <h1 className="font-heading text-5xl font-bold">MTM Recognition</h1>
    </div>
  )
}
