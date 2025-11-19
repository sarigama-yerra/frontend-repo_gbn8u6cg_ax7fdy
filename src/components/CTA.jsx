function CTA() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Upgrade your office coffee—without CAPEX</h2>
        <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Request a tasting and a tailored plan. We’ll install, maintain and supply. You only pay per cup.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-amber-500 text-slate-900 px-5 py-3 font-medium hover:bg-amber-400 transition">Request tasting</a>
          <a href="#calculator" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/10 transition">Estimate costs</a>
        </div>
      </div>
    </section>
  )
}

export default CTA
