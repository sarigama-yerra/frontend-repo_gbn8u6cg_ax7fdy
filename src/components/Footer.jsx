function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500 text-white font-black flex items-center justify-center">K</div>
          <p className="text-slate-600">© {new Date().getFullYear()} Kaffeland. All rights reserved.</p>
        </div>
        <div className="text-slate-600 text-sm flex items-center gap-6">
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#machines" className="hover:text-slate-900">Machines</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
