import { useEffect, useMemo, useState } from 'react';

const imagesData = [
  {
    src: 'https://images.unsplash.com/photo-1714460270467-f14364be66fb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQb3J0YSUyMGQlRTIlODAlOTlpbmdyZXNzbyUyMG1vZGVybmElMjBpbnxlbnwwfDB8fHwxNzYyNDE4OTAyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Porta d’ingresso moderna in legno',
    tag: 'Porte',
  },
  {
    src: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop',
    alt: 'Ampie finestre con telaio in alluminio',
    tag: 'Finestre',
  },
  {
    src: 'https://images.unsplash.com/photo-1659569060270-0462f3ee0d31?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbXBpZSUyMGZpbmVzdHJlJTIwY29uJTIwdGVsYWlvfGVufDB8MHx8fDE3NjI0MTg5MDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Pavimento in parquet rovere naturale',
    tag: 'Parquet',
  },
  {
    src: 'https://images.unsplash.com/photo-1540270840670-bcf0ff884f90?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYXZpbWVudG8lMjBpbiUyMHBhcnF1ZXQlMjByb3ZlcmV8ZW58MHwwfHx8MTc2MjQxODkwM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Scala interna in legno e metallo',
    tag: 'Scale',
  },
  {
    src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
    alt: 'Zanzariera su finestra di design',
    tag: 'Zanzariere',
  },
  {
    src: 'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=1600&auto=format&fit=crop',
    alt: 'Dettaglio serramento con finitura scura',
    tag: 'Serramenti',
  },
  {
    src: 'https://images.unsplash.com/photo-1484156818044-c040038b0719?q=80&w=1600&auto=format&fit=crop',
    alt: 'Ambiente living con parquet caldo',
    tag: 'Parquet',
  },
  {
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
    alt: 'Porta scorrevole a vetro minimal',
    tag: 'Porte',
  },
];

function useKey(key, handler) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === key) handler(e);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [key, handler]);
}

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [filter, setFilter] = useState('Tutti');

  const tags = useMemo(() => ['Tutti', ...Array.from(new Set(imagesData.map((i) => i.tag)))], []);
  const images = useMemo(
    () => (filter === 'Tutti' ? imagesData : imagesData.filter((i) => i.tag === filter)),
    [filter]
  );

  useKey('Escape', () => setActiveIndex(-1));
  useKey('ArrowRight', () => setActiveIndex((i) => (i >= 0 ? (i + 1) % images.length : i)));
  useKey('ArrowLeft', () => setActiveIndex((i) => (i >= 0 ? (i - 1 + images.length) % images.length : i)));

  return (
    <section className="scroll-mt-24 py-16 bg-white" aria-label="Galleria fotografica">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Galleria</h2>
            <p className="mt-2 text-gray-700">Progetti e installazioni: porte, finestre, parquet, zanzariere e scale.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  filter === t
                    ? 'bg-amber-500 text-white border-amber-500'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
                aria-pressed={filter === t}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <button
              key={img.src}
              className="group relative overflow-hidden rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              onClick={() => setActiveIndex(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
              <span className="absolute bottom-2 left-2 inline-flex items-center rounded-md bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur">
                {img.tag}
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeIndex >= 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => setActiveIndex(-1)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white font-medium"
              aria-label="Chiudi"
            >
              Chiudi ✕
            </button>

            <div className="relative rounded-xl overflow-hidden bg-black">
              <img
                src={images[activeIndex]?.src}
                alt={images[activeIndex]?.alt || 'Immagine galleria'}
                className="w-full max-h-[80vh] object-contain"
              />

              <button
                onClick={() => setActiveIndex((i) => (i - 1 + images.length) % images.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Immagine precedente"
              >
                ‹
              </button>
              <button
                onClick={() => setActiveIndex((i) => (i + 1) % images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Immagine successiva"
              >
                ›
              </button>
            </div>

            <p className="mt-3 text-center text-sm text-white/80">{images[activeIndex]?.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
