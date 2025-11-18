import { ArrowRight } from "lucide-react"

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-400/20 rounded-full px-3 py-1">Built for professional coaches</span>
            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Streamline your coaching business
            </h1>
            <p className="mt-5 text-lg text-blue-100/90 leading-relaxed">
              Create client profiles, capture session summaries, share resources, manage contracts, and handle billing — all in one simple workspace.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg transition-colors shadow">
                Get started
                <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-lg transition-colors">
                Explore features
              </a>
            </div>
            <p className="mt-4 text-xs text-blue-200/70">No credit card required • Free plan available</p>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-blue-400/20 bg-slate-900/60 backdrop-blur p-4 shadow-2xl">
              <img src="/dashboard-preview.png" alt="Dashboard preview" className="w-full rounded-xl ring-1 ring-white/10" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-xl border border-blue-400/20 bg-slate-900/80 backdrop-blur p-4 shadow-lg">
              <p className="text-sm text-blue-100">"Saved me hours every week and looks great with clients."</p>
              <p className="text-xs text-blue-300/70 mt-1">— Jordan, Executive Coach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
