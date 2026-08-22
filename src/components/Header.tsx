import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) px-4 backdrop-blur-lg">
      <main className="header-main">
        <section className="Name">
          <h1>Dilen Dev</h1>
        </section>
        <section className="header-links">
          <Link to='/' hash='expertise' className='nav-link'>
            <h1>Expertise</h1>
          </Link>
          <Link to='/' hash='skills' className='nav-link'>
           <h1>Skills</h1>
          </Link>
          <Link to='/' hash='projects' className='nav-link'>
            <h1>Projects🧑‍💻</h1>
          </Link>
          <Link to='/' hash='expertise' className='nav-link'>
            <h1> Extras✨</h1>
          </Link>
        </section>
        <section className="contact-button">
          <div>
            <button><h1>Contact me</h1></button>
          </div>
        </section>
      </main>
    </header>
  )
}
