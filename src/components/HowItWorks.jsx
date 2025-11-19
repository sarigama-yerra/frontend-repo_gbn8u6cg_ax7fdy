function HowItWorks() {
  const steps = [
    { title: 'Tell us about your team', desc: 'How many people, taste preferences and budget.' },
    { title: 'We install your machine', desc: 'Delivery, setup and barista-level calibration included.' },
    { title: 'Pay per cup', desc: 'Only pay for what you actually drink. Transparent monthly invoice.' },
    { title: 'We keep it perfect', desc: 'Maintenance, beans and filters handled by us.' },
  ]
  return (
    <section id="how" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">How it works</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 font-bold flex items-center justify-center">{i+1}</div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
