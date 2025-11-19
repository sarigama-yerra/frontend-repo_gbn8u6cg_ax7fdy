import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import ValueProps from './components/ValueProps'
import HowItWorks from './components/HowItWorks'
import EnterpriseFeatures from './components/EnterpriseFeatures'
import Calculator from './components/Calculator'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <ValueProps />
        <HowItWorks />
        <EnterpriseFeatures />
        <Calculator />
        {/* Machines teaser */}
        <section id="machines" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Machines for every office size</h2>
            <p className="mt-3 text-slate-700 text-center max-w-2xl mx-auto">From compact bean-to-cup units to high-output professional brewers. We’ll recommend the perfect fit based on your daily volume and drink preferences.</p>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[{
                name: 'Compact', cups: 'up to 50 cups/day', img: 'https://images.unsplash.com/photo-1502465771179-51f3535da42a?q=80&w=1600&auto=format&fit=crop'
              },{
                name: 'Office Pro', cups: '50–200 cups/day', img: 'https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?q=80&w=1600&auto=format&fit=crop'
              },{
                name: 'Enterprise', cups: '200+ cups/day', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1600&auto=format&fit=crop'
              }].map((m, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={m.img} alt="machine" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg">{m.name}</h3>
                    <p className="text-slate-600 text-sm">{m.cups}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
