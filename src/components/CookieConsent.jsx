import { useEffect, useMemo, useState } from 'react';
import { Settings, X } from 'lucide-react';

const STORAGE_KEY = 'cookie-consent-v1';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [consent, setConsent] = useState({ necessary: true, analytics: false, marketing: false });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setConsent(JSON.parse(saved));
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const saveConsent = (values) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    setConsent(values);
  };

  const acceptAll = () => {
    const values = { necessary: true, analytics: true, marketing: true };
    saveConsent(values);
    setVisible(false);
    setPrefsOpen(false);
  };

  const rejectAll = () => {
    const values = { necessary: true, analytics: false, marketing: false };
    saveConsent(values);
    setVisible(false);
    setPrefsOpen(false);
  };

  const PolicyText = useMemo(() => (
    <div className="space-y-4 text-sm text-gray-700">
      <p>
        Rispettiamo il Regolamento (UE) 2016/679 (GDPR). Usiamo cookie necessari per il corretto funzionamento del sito e, previo
        tuo consenso, cookie per analytics e marketing. Puoi modificare le preferenze in qualsiasi momento.
      </p>
      <div>
        <h4 className="font-semibold text-gray-900">Privacy</h4>
        <p>
          I dati inseriti nel form di contatto vengono usati esclusivamente per rispondere alle richieste. Non vendiamo i tuoi dati.
          Per esercitare i tuoi diritti (accesso, rettifica, cancellazione) scrivi a privacy@diportainfinestra.it.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">Cookie</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li><span className="font-medium">Necessari</span>: sempre attivi per garantire sicurezza e funzionalità di base.</li>
          <li><span className="font-medium">Analytics</span>: ci aiutano a migliorare il sito (es. pagine visitate). Disattivabili.</li>
          <li><span className="font-medium">Marketing</span>: personalizzazione offerte e annunci. Disattivabili.</li>
        </ul>
      </div>
    </div>
  ), []);

  return (
    <>
      {/* Floating preferences button */}
      <button
        onClick={() => setPrefsOpen(true)}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur border border-amber-200 shadow-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-white"
        aria-label="Preferenze cookie"
      >
        <Settings className="h-4 w-4" /> Preferenze cookie
      </button>

      {/* Banner */}
      {visible && (
        <div className="fixed inset-x-0 bottom-0 z-40">
          <div className="mx-auto max-w-4xl m-4 rounded-2xl border border-amber-200 bg-white p-4 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-sm text-gray-700">
                Usiamo cookie per migliorare la tua esperienza. <button onClick={() => setPrefsOpen(true)} className="underline font-medium">Gestisci preferenze</button>.
              </div>
              <div className="flex gap-2">
                <button onClick={rejectAll} className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Rifiuta</button>
                <button onClick={() => setPrefsOpen(true)} className="rounded-md bg-amber-100 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-amber-200">Personalizza</button>
                <button onClick={acceptAll} className="rounded-md bg-amber-700 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-800">Accetta tutto</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences modal */}
      {prefsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setPrefsOpen(false)} />
          <div className="relative z-10 w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Preferenze privacy e cookie</h3>
              <button className="p-1 rounded hover:bg-gray-100" onClick={() => setPrefsOpen(false)} aria-label="Chiudi"><X className="h-5 w-5"/></button>
            </div>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg border border-amber-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Necessari</p>
                    <p className="text-sm text-gray-600">Sempre attivi per garantire il corretto funzionamento del sito.</p>
                  </div>
                  <input type="checkbox" checked disabled className="h-5 w-5" />
                </div>
              </div>
              <div className="rounded-lg border border-amber-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Analytics</p>
                    <p className="text-sm text-gray-600">Ci aiutano a capire come viene utilizzato il sito.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) => setConsent((c) => ({ ...c, analytics: e.target.checked }))}
                    className="h-5 w-5"
                  />
                </div>
              </div>
              <div className="rounded-lg border border-amber-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Marketing</p>
                    <p className="text-sm text-gray-600">Utilizzati per offerte personalizzate e annunci.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={(e) => setConsent((c) => ({ ...c, marketing: e.target.checked }))}
                    className="h-5 w-5"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:justify-end">
              <button onClick={rejectAll} className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Rifiuta non necessari</button>
              <button onClick={() => { saveConsent(consent); setPrefsOpen(false); setVisible(false); }} className="rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-800">Salva preferenze</button>
              <button onClick={acceptAll} className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700">Accetta tutto</button>
            </div>
            <div className="mt-6 border-t pt-4">
              {PolicyText}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
