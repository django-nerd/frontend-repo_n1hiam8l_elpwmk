import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-blue-400/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white font-semibold">
            <img src="/flame-icon.svg" alt="logo" className="h-6 w-6" />
            CoachFlow
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-blue-200/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="/test" className="hover:text-white">System Test</a>
          </nav>
          <a href="#pricing" className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors">Start free</a>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-blue-400/10 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 text-sm text-blue-300/70 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} CoachFlow. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#contact" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
