import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject'),
      message: form.get('message')
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      setStatus({ ok: true, id: data.id })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, error: err.message })
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Contact us</h2>
            <p className="mt-3 text-blue-200/80">Have questions about pricing, features, or migration? Send us a message and we’ll get back within 1 business day.</p>
            <div className="mt-6 rounded-xl border border-blue-400/20 bg-slate-900/50 p-6 text-blue-200/80 text-sm">
              <p><span className="font-semibold text-white">Support:</span> support@coachflow.app</p>
              <p className="mt-2"><span className="font-semibold text-white">Sales:</span> sales@coachflow.app</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-blue-400/20 bg-slate-900/50 p-6">
            <div className="grid grid-cols-1 gap-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-lg bg-slate-800/70 border border-blue-400/20 px-4 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="email" type="email" required placeholder="Your email" className="w-full rounded-lg bg-slate-800/70 border border-blue-400/20 px-4 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="subject" required placeholder="Subject" className="w-full rounded-lg bg-slate-800/70 border border-blue-400/20 px-4 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea name="message" required rows="5" placeholder="Your message" className="w-full rounded-lg bg-slate-800/70 border border-blue-400/20 px-4 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors">Send message</button>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-green-300' : 'text-red-300'}`}>
                {status.ok ? 'Thanks! We\'ll be in touch shortly.' : `Something went wrong: ${status.error}`}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
