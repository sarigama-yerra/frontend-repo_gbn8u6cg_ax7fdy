function Logos() {
  const logos = [
    { name: 'Acme', src: 'https://dummyimage.com/120x40/edf2f7/94a3b8&text=ACME' },
    { name: 'Globex', src: 'https://dummyimage.com/120x40/edf2f7/94a3b8&text=GLOBEX' },
    { name: 'Umbrella', src: 'https://dummyimage.com/120x40/edf2f7/94a3b8&text=UMBRELLA' },
    { name: 'Initech', src: 'https://dummyimage.com/120x40/edf2f7/94a3b8&text=INITECH' },
    { name: 'Hooli', src: 'https://dummyimage.com/120x40/edf2f7/94a3b8&text=HOOLI' },
  ]
  return (
    <section className="py-8 md:py-10 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-70">
          {logos.map((l, i) => (
            <img key={i} src={l.src} alt={`${l.name} logo`} className="h-6 md:h-7 object-contain grayscale" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logos
