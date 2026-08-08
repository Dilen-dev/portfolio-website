import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <div className="row-container">
        <section className="hero">
          <h1 style={{ fontSize: '3.5rem' }}>Shaping ideas</h1>
          <h1 style={{ fontSize: '3.5rem' }}>into Real Projects</h1>
          <h1 style={{ fontSize: '3.5rem' }}>that Deliver Results</h1>
          <h6 style={{ fontSize: '0.8rem' }}> Hi, I'm Lenyolosa, a developer based in Lesotho with a passion for solving problems through code and data.</h6>
          <br/>
          <button style={{ backgroundColor: 'var(--sea-ink)', color: 'black', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>View my CV  &darr;</button>
        </section>
        <aside className="sidebar">
          <p>The 3d graphics area</p>
        </aside>
      </div>
      <div>
        <article className="expertise">
          <h1 style={{ fontSize: '2rem' }}> Fields of Expertise</h1>
          <div className="fields">
            <h2 style={{ fontSize: '1.5rem' }}> Full-stack Web Development</h2>
            <h2 style={{ fontSize: '1.5rem' }}> Data Engineering</h2>
            <h2 style={{ fontSize: '1.5rem' }}> Data Analysis</h2>
            <h2 style={{ fontSize: '1.5rem' }}> Analytics Engineering</h2>
            <h2 style={{ fontSize: '1.5rem' }}> Database Management</h2>
          </div>
        </article>
      </div>
    </main>
  )
}
