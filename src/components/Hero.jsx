function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Barista-grade office coffee. Zero CAPEX.
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Kaffeland installs, maintains and supplies premium bean-to-cup machines. You pay by the cup with enterprise-grade controls.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#calculator" className="inline-flex items-center justify-center rounded-lg bg-amber-500 text-slate-900 px-5 py-3 font-medium shadow hover:bg-amber-400 transition">Estimate your spend</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-slate-300 text-slate-800 px-5 py-3 font-medium hover:bg-slate-50 transition">Talk to sales</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <p>Trusted by 500+ teams</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-white rounded-2xl ring-1 ring-slate-200 shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop" alt="Kaffeland machine" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg ring-1 ring-slate-200 p-4">
              <p className="text-sm font-medium">From $0.20 per cup</p>
              <p className="text-xs text-slate-500">SLAs. Maintenance included.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
