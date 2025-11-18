import { User, FileText, Library, FileSignature, CreditCard } from "lucide-react"

function Features() {
  const items = [
    {
      icon: <User className="w-5 h-5" />, 
      title: "Client Profiles",
      desc: "Centralize client info, goals, notes, and status for every engagement."
    },
    {
      icon: <FileText className="w-5 h-5" />, 
      title: "Session Summaries",
      desc: "Document outcomes and action items; share follow-ups with a click."
    },
    {
      icon: <Library className="w-5 h-5" />, 
      title: "Resource Library",
      desc: "Organize handouts, templates, and links; share privately or broadly."
    },
    {
      icon: <FileSignature className="w-5 h-5" />, 
      title: "Contracts",
      desc: "Draft, send, and track client agreements from draft to signed."
    },
    {
      icon: <CreditCard className="w-5 h-5" />, 
      title: "Billing",
      desc: "Create invoices, track status, and keep payments organized."
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Everything coaches need</h2>
        <p className="text-blue-200/80 text-center mt-3">Simple workflows that feel natural to use.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, idx) => (
            <div key={idx} className="rounded-xl border border-blue-400/20 bg-slate-900/50 p-6 hover:bg-slate-900/70 transition-colors">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/15 text-blue-300 border border-blue-400/20">
                {f.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
