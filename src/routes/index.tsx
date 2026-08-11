import { createFileRoute } from '@tanstack/react-router'
import Typewriter from 'typewriter-effect'
import powerBiIcon from '../images/skills/Power-BI.png'
import dockerIcon from '../images/skills/docker.png'
import pythonIcon from '../images/skills/python.png'
import sqlIcon from '../images/skills/sql.png'
import phpIcon from '../images/skills/php.png'
import javascriptBiIcon from '../images/skills/JS.webp'
import githubIcon from '../images/skills/github.webp'
import gitIcon from '../images/skills/Git.png'
import cPlusPlusIcon from '../images/skills/C++.png'
import reactIcon from '../images/skills/react.png'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="max-w-7xl mx-auto page-wrap px-4 pb-8 pt-14">
      <div className="row-container">
        <section className="hero">
          <h1 style={{ fontSize: '4rem', display: 'inline-flex' }}>Shaping&nbsp;{''}
            <Typewriter
              options={{
                strings: ['ideas','concepts','designs','pipelines','code'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h1 style={{ fontSize: '4rem' }}>into Real Projects</h1>
          <h1 style={{ fontSize: '4rem' }}>that Deliver Results</h1>
          <h6 style={{ fontSize: '0.9rem', fontFamily: 'Literata, serif',fontOpticalSizing: 'auto',fontWeight: 400 }}> Hi, I'm Lenyolosa, a developer based in Lesotho with a passion for solving problems through code and data.</h6>
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
            <h2 style={{ fontSize: '1.7rem' }}> Full-stack Web Development</h2>
            <h2 style={{ fontSize: '1.7rem' }}> Data Engineering</h2>
            <h2 style={{ fontSize: '1.7rem' }}> Data Analysis & visualization</h2>
            <h2 style={{ fontSize: '1.7rem' }}> Analytics Engineering</h2>
            <h2 style={{ fontSize: '1.7rem' }}> Database Management</h2>
          </div>
        </article>
      </div>
      <div>
        <article className='skills'>
          <h1 style={{ fontSize: '2rem '}}>My Skills</h1>
          <div className='skills-list-container'>
            <div className='skill-card'>
              <img src={pythonIcon}/>
              <p className='skill-name'>Python</p>
            </div>
            <div className='skill-card'>
              <img src={powerBiIcon}/>
              <p className='skill-name'>Power BI</p>
            </div>
            <div className='skill-card'>
              <img src={phpIcon}/>
              <p className='skill-name'>PHP</p>
            </div>
            <div className='skill-card'>
              <img src={cPlusPlusIcon}/>
              <p className='skill-name'>C++</p>
            </div>
            <div className='skill-card'>
              <img src={sqlIcon}/>
              <p className='skill-name'>SQL</p>
            </div>
            <div className='skill-card'>
              <img src={javascriptBiIcon}/>
              <p className='skill-name'>JS</p>
            </div>
            <div className='skill-card'>
              <img src={reactIcon} className='react'/>
              <p className='skill-name'>React</p>
            </div>
            <div className='skill-card'>
              <img src={gitIcon}/>
              <p className='skill-name'>GIT</p>
            </div>
            <div className='skill-card'>
              <img src={dockerIcon}/>
              <p className='skill-name'>Docker</p>
            </div>
            <div className='skill-card'>
              <img src={githubIcon}/>
              <p className='skill-name'>Github</p>
            </div>
          </div>
        </article>
      </div>
      <div>
        <article className='projects'>
          <h1 style={{ fontSize: '2rem' }}> My Projects</h1>
        </article>
      </div>
    </main>
  )
}
