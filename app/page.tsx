import { Navbar }    from '@/components/sections/Navbar'
import { Hero }      from '@/components/sections/Hero'
import { Services }  from '@/components/sections/Services'
import { About }     from '@/components/sections/About'
import { Projects }  from '@/components/sections/Projects'
import { Partners }  from '@/components/sections/Partners'
import { Contact }   from '@/components/sections/Contact'
import { Footer }    from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-light">
      <Navbar />
      <div className='mt-20'>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
