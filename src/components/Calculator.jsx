import { useMemo, useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Calculator() {
  const [employees, setEmployees] = useState(50)
  const [cupsPerDay, setCupsPerDay] = useState(80)
  const [pricePerCup, setPricePerCup] = useState(0.25)
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(false)

  const monthlyCups = useMemo(() => cupsPerDay * 22, [cupsPerDay])
  const monthlyCost = useMemo(() => (monthlyCups * pricePerCup).toFixed(2), [monthlyCups, pricePerCup])

  const requestQuote = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${backend}/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ employees, cups_per_day: cupsPerDay, price_per_cup: pricePerCup })
      })
      const data = await res.json()
      setQuote(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="calculator" className="py-16 md:py-24 bg-amber-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Estimate your monthly spend</h2>
            <p className="mt-3 text-slate-700">Use the sliders to see your expected invoice when paying per cup.</p>

            <div className="mt-8 space-y-6">
              <div>
                <label className="flex items-center justify-between text-sm font-medium text-slate-700">
                  <span>Employees</span>
                  <span className="text-slate-900">{employees}</span>
                </label>
                <input type="range" min="5" max="500" value={employees} onChange={e=>setEmployees(parseInt(e.target.value))} className="w-full" />
              </div>

              <div>
                <label className="flex items-center justify-between text-sm font-medium text-slate-700">
                  <span>Cups per day</span>
                  <span className="text-slate-900">{cupsPerDay}</span>
                </label>
                <input type="range" min="10" max="800" step="10" value={cupsPerDay} onChange={e=>setCupsPerDay(parseInt(e.target.value))} className="w-full" />
              </div>

              <div>
                <label className="flex items-center justify-between text-sm font-medium text-slate-700">
                  <span>Price per cup ($)</span>
                  <span className="text-slate-900">{pricePerCup.toFixed(2)}</span>
                </label>
                <input type="range" min="0.15" max="0.60" step="0.01" value={pricePerCup} onChange={e=>setPricePerCup(parseFloat(e.target.value))} className="w-full" />
              </div>

              <div className="rounded-xl border border-slate-200 p-5 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-600 text-sm">Estimated cups / month</p>
                    <p className="text-2xl font-bold">{monthlyCups}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-600 text-sm">Estimated monthly cost</p>
                    <p className="text-2xl font-bold">${monthlyCost}</p>
                  </div>
                </div>
                <button onClick={requestQuote} disabled={loading} className="mt-4 inline-flex items-center rounded-lg bg-amber-600 text-white px-4 py-2 font-medium hover:bg-amber-700 disabled:opacity-50">
                  {loading ? 'Calculating...' : 'Get detailed quote'}
                </button>
                {quote && (
                  <p className="mt-3 text-sm text-slate-700">{quote.summary}</p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">What’s included</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• Premium bean-to-cup machines matched to your volume</li>
              <li>• Maintenance, filters and descaling on a set schedule</li>
              <li>• Fresh beans delivered automatically based on usage</li>
              <li>• Real-time usage dashboard and transparent invoicing</li>
              <li>• Barista training and onboarding</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
