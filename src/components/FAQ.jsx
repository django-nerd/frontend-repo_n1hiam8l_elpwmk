function FAQ() {
  const faqs = [
    {
      q: "Is there a free plan?",
      a: "Yes, you can manage up to 5 clients and use core features at no cost."
    },
    {
      q: "Do you handle contracts and signatures?",
      a: "You can draft, send, and track contracts. E-signature integrations are available on Pro."
    },
    {
      q: "How do I get support?",
      a: "We offer email support on all plans and priority support on Pro and Team."
    },
    {
      q: "Can I import my existing clients?",
      a: "Yes, CSV import is available. Our team can help migrate larger accounts."
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Frequently asked questions</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-blue-400/20 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold text-white">{f.q}</h3>
              <p className="mt-2 text-blue-200/80 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
