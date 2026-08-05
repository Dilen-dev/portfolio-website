import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="hero">
        <h1 style={{ fontSize: '3.5rem' }}>Shaping ideas</h1>
        <h1 style={{ fontSize: '3.5rem' }}>into Real Projects</h1>
        <h1 style={{ fontSize: '3.5rem' }}>that Deliver Results</h1>
        <h6 style={{ fontSize: '0.8rem' }}> Hi, I'm Lenyolosa, a developer based in Lesotho with a passion for solving problems through code and data.</h6>
      </section>
      <aside className="sidebar">
        <p>The 3d graphics area</p>
      </aside>
    </main>
  )
}
