import { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contattaci" className="scroll-mt-24 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contattaci</h2>
            <p className="mt-3 text-gray-600">Richiedi un sopralluogo o un preventivo senza impegno.</p>

            <div className="mt-6 space-y-4 text-gray-700">
              <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-amber-700"/> +39 0123 456 789</p>
              <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-amber-700"/> info@diportainfinestra.it</p>
              <p className="flex items-center gap-2"><MapPin className="h-5 w-5 text-amber-700"/> Via Esempio 10, 00100 Roma</p>
            </div>
          </div>

          <div className="bg-white border border-amber-100 rounded-xl p-6 shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Messaggio inviato!</h3>
                <p className="mt-2 text-gray-600">Ti risponderemo al più presto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome e cognome</label>
                  <input required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-600 focus:ring-amber-600"/>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input required type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-600 focus:ring-amber-600"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Telefono</label>
                    <input type="tel" className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-600 focus:ring-amber-600"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Messaggio</label>
                  <textarea required rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-600 focus:ring-amber-600"/>
                </div>
                <button type="submit" className="w-full inline-flex justify-center rounded-md bg-amber-700 px-4 py-2.5 text-white font-semibold hover:bg-amber-800">Invia</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
