import { Home, Layers, Shield, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Porte',
    description: 'Soluzioni per interni ed esterni con design moderni e classici.',
    icon: Home,
  },
  {
    title: 'Finestre',
    description: "Efficienza energetica, isolamento acustico e finiture di pregio.",
    icon: Shield,
  },
  {
    title: 'Parquet',
    description: 'Pavimenti in legno massello e prefinito, posa professionale.',
    icon: Layers,
  },
  {
    title: 'Zanzariere',
    description: 'Sistemi scorrevoli e a rullo, su misura per ogni ambiente.',
    icon: Shield,
  },
  {
    title: 'Scale',
    description: 'Scale interne in legno e metallo, progettate per durare.',
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section id="servizi" className="scroll-mt-24 py-20 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">I nostri servizi</h2>
          <p className="mt-3 text-gray-600">Dalla consulenza al montaggio: seguiamo ogni fase con cura artigianale.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-amber-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <s.icon className="h-6 w-6 text-amber-700" />
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
