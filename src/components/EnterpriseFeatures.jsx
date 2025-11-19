function EnterpriseFeatures() {
  const features = [
    { title: 'SLAs & site compliance', desc: 'Response-time SLAs, RAMS, MSDS and site induction ready.' },
    { title: 'Usage analytics', desc: 'Real-time consumption, cost centers and allocation exports.' },
    { title: 'Security & access', desc: 'SSO for managers, role-based permissions, audit logs.' },
    { title: 'Procurement friendly', desc: 'Purchase orders, consolidated billing, net-30 terms.' },
  ]
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built for modern workplaces</h2>
            <p className="mt-3 text-slate-700">Make finance happy and employees happier. Our platform removes the admin while giving you full control.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900">{f.title}</h3>
                  <p className="text-slate-600 text-sm mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Popular configurations</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• 80–120 cups/day: 2× bean-to-cup + milk fridge</li>
              <li>• 200–300 cups/day: 1× dual-grinder + 1× satellite brewer</li>
              <li>• 500+ cups/day: espresso tower + filter bank + telemetry</li>
              <li>• Integrated water filtration and waste management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnterpriseFeatures
