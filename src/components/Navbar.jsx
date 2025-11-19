import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-black flex items-center justify-center shadow">K</div>
          <span className="font-semibold text-slate-900 text-lg">Kaffeland for Business</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#calculator" className="hover:text-slate-900">Pricing</a>
          <a href="#enterprise" className="hover:text-slate-900">Enterprise</a>
          <a href="#contact" className="hover:text-slate-900">Contact sales</a>
          <a href="#contact" className="inline-flex items-center rounded-lg bg-amber-500 text-slate-900 px-4 py-2 font-medium hover:bg-amber-400 transition">Request tasting</a>
        </nav>
        <button className="md:hidden inline-flex items-center p-2" onClick={() => setOpen(v=>!v)}>
          <span className="sr-only">Menu</span>
          <div className="w-6 h-0.5 bg-slate-900 mb-1.5" />
          <div className="w-6 h-0.5 bg-slate-900 mb-1.5" />
          <div className="w-6 h-0.5 bg-slate-900" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a href="#how" onClick={()=>setOpen(false)} className="py-2">How it works</a>
            <a href="#calculator" onClick={()=>setOpen(false)} className="py-2">Pricing</a>
            <a href="#enterprise" onClick={()=>setOpen(false)} className="py-2">Enterprise</a>
            <a href="#contact" onClick={()=>setOpen(false)} className="py-2">Contact sales</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
