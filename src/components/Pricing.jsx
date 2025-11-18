function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$0",
      note: "for solo coaches getting started",
      features: [
        "Up to 5 clients",
        "Session summaries",
        "Resource library",
        "Email support"
      ],
      cta: "Start free",
      highlight: false
    },
    {
      name: "Pro",
      price: "$19",
      note: "per month",
      features: [
        "Unlimited clients",
        "Contracts & signatures",
        "Invoices & billing",
        "Priority support"
      ],
      cta: "Try Pro",
      highlight: true
    },
    {
      name: "Team",
      price: "$49",
      note: "per month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Advanced permissions",
        "Custom branding"
      ],
      cta: "Contact sales",
      highlight: false
    }
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Simple pricing</h2>
        <p className="text-blue-200/80 text-center mt-3">Start free and upgrade as you grow.</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, idx) => (
            <div key={idx} className={`rounded-2xl border ${t.highlight ? 'border-blue-400 bg-slate-900/70' : 'border-blue-400/20 bg-slate-900/50'} p-6`}> 
              <div className="flex items-end gap-2">
                <h3 className="text-2xl font-semibold text-white">{t.name}</h3>
                {t.highlight && (
                  <span className="text-xs font-semibold text-blue-200 bg-blue-500/20 border border-blue-400/30 rounded-full px-2 py-0.5">Popular</span>
                )}
              </div>
              <p className="mt-1 text-sm text-blue-300/70">{t.note}</p>
              <p className="mt-4 text-4xl font-extrabold text-white">{t.price}<span className="text-base text-blue-300/70 font-medium">{t.note === 'per month' ? '/mo' : ''}</span></p>
              <ul className="mt-6 space-y-2 text-blue-100/90">
                {t.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-block w-full text-center font-semibold px-4 py-2.5 rounded-lg transition-colors ${t.highlight ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
