export default function Gallery() {
  return (
    <section id="gallery" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-center">
        Gallery
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-lg border aspect-video">
            <img
              src={`https://picsum.photos/seed/${i * 1000}/536/354`}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}
