import Navbar from './components/Navbar.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import CookieConsent from './components/CookieConsent.jsx';
import Spline from '@splinetool/react-spline';
import Gallery from './components/Gallery.jsx';

function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <Navbar />

      {/* Hero con cover Spline a tutta larghezza */}
      <section id="home" className="relative scroll-mt-24 h-[70vh] sm:h-[80vh]">
        {/* Spline cover */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Overlay per leggibilità - non blocca interazioni */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Contenuto hero */}
        <div className="relative z-10 h-full">
          <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Porte, finestre, parquet, zanzariere e scale</h1>
              <p className="mt-4 text-lg text-white/90">
                Soluzioni su misura con materiali di qualità e posa professionale. Comfort, isolamento ed estetica che durano nel tempo.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#servizi" className="inline-flex items-center justify-center rounded-md bg-amber-500 px-5 py-3 text-white font-semibold hover:bg-amber-600">Scopri i servizi</a>
                <a href="#contattaci" className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 font-semibold text-white hover:bg-white/10">Richiedi un preventivo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galleria in home */}
      <Gallery />

      {/* Chi siamo */}
      <section id="chi-siamo" className="scroll-mt-24 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Chi siamo</h2>
            <p className="mt-4 text-gray-700">
              Siamo un team con oltre 20 anni di esperienza nella vendita e posa di serramenti e finiture.
              Collaboriamo con i migliori marchi italiani ed europei, offrendo soluzioni su misura per abitazioni,
              negozi e uffici. Dalla scelta dei materiali all’installazione, seguiamo ogni progetto con cura artigianale.
            </p>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <Services />

      {/* Dove siamo */}
      <section id="dove-siamo" className="scroll-mt-24 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Dove siamo</h2>
              <p className="mt-3 text-gray-700">Ci trovi a Roma, facilmente raggiungibili con parcheggio dedicato.</p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li><span className="font-medium">Indirizzo:</span> Via Esempio 10, 00100 Roma</li>
                <li><span className="font-medium">Orari:</span> Lun–Ven 9:00–13:00 / 15:00–19:00, Sab 9:30–13:00</li>
              </ul>
            </div>
            <div className="w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Mappa negozio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23886.54326610872!2d12.4829329!3d41.8933203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61a8d5a262ab%3A0xdea97f6a1e1b2b7c!2sRoma%20RM!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <Contact />

      {/* Policy (Privacy e Cookie) */}
      <section id="policy" className="scroll-mt-24 py-16 bg-amber-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Privacy e Cookie Policy</h2>
          <div className="mt-4 space-y-4 text-gray-700">
            <p>
              Questo sito rispetta il GDPR: raccogliamo solo i dati necessari a erogare i servizi richiesti.
              Le preferenze cookie possono essere gestite tramite il pulsante in basso a destra.
            </p>
            <p>
              Titolare del trattamento: Di Porta in Finestra – privacy@diportainfinestra.it. I dati non vengono ceduti a terzi
              senza consenso, salvo obblighi di legge. Puoi richiedere accesso, rettifica o cancellazione dei dati scrivendoci.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Di Porta in Finestra. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="text-gray-700 hover:text-amber-700" href="#policy">Privacy</a>
            <a className="text-gray-700 hover:text-amber-700" href="#policy">Cookie</a>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
}

export default App;
