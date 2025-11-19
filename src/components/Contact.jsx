import { useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Contact() {
  const [form, setForm] = useState({ company: '', name: '', email: '', phone: '', employees: '', cups_per_day: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const payload = {
        company: form.company,
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        employees: form.employees ? Number(form.employees) : undefined,
        cups_per_day: form.cups_per_day ? Number(form.cups_per_day) : undefined,
        message: form.message || undefined,
      }
      const res = await fetch(`${backend}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setStatus('ok')
      else setStatus(data?.detail || 'error')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Book a demo</h2>
            <p className="mt-3 text-slate-700">Tell us a bit about your office and we’ll tailor a package and send a tasting kit.</p>
            <div className="mt-6 flex items-center gap-6 text-slate-600">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">24/7</div>
              <p>Support and predictive maintenance included</p>
            </div>
          </div>

          <form onSubmit={submit} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-700">Company</label>
                <input required value={form.company} onChange={e=>setForm({...form, company: e.target.value})} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-amber-500 focus:border-amber-500" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Contact name</label>
                <input required value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-amber-500 focus:border-amber-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-700">Work email</label>
                <input required type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-amber-500 focus:border-amber-500" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Phone (optional)</label>
                <input value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-amber-500 focus:border-amber-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-700">Employees</label>
                <input type="number" value={form.employees} onChange={e=>setForm({...form, employees: e.target.value})} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-amber-500 focus:border-amber-500" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Cups per day</label>
                <input type="number" value={form.cups_per_day} onChange={e=>setForm({...form, cups_per_day: e.target.value})} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-amber-500 focus:border-amber-500" />
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-700">Message</label>
              <textarea rows="4" value={form.message} onChange={e=>setForm({...form, message: e.target.value})} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-amber-500 focus:border-amber-500" />
            </div>

            <button type="submit" className="inline-flex items-center rounded-lg bg-amber-600 text-white px-4 py-2 font-medium hover:bg-amber-700">
              {status === 'sending' ? 'Sending...' : 'Request demo'}
            </button>

            {status === 'ok' && <p className="text-emerald-700 text-sm">Thanks! We’ll be in touch shortly.</p>}
            {status && status !== 'ok' && status !== 'sending' && <p className="text-red-600 text-sm">{String(status)}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
