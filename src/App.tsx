import { Container } from './components'
import { Contact, Experience, Footer, Hero, Projects } from './sections'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex w-full flex-1 pt-8 pb-12 sm:pt-10 sm:pb-14">
        <Container>
          <Hero />
          <Experience />
          <Projects />
          <Contact />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
