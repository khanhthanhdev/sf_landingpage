export default function Gallery() {
  return (
    <section id="gallery" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center">Gallery</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-lg border aspect-video" />
        ))}
      </div>
    </section>
  );
}

