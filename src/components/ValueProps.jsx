function ValueProps() {
  const items = [
    { title: 'All-inclusive', desc: 'Hardware, beans, maintenance, filters and training. One invoice.' },
    { title: 'Predictable spend', desc: 'Transparent price-per-cup with volume breaks. No surprises.' },
    { title: 'Enterprise-ready', desc: 'SLAs, usage dashboards, SSO access and site approvals.' },
    { title: 'White-glove install', desc: 'Delivery, plumbing, calibration and staff onboarding handled.' },
  ]
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">{it.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProps
