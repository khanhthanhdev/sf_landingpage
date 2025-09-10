export default function Editor() {
  return (
    <section id="editor" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center">Live Editor Preview</h2>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="rounded-lg border aspect-video" />
        <div className="rounded-lg border p-4 h-[360px]" />
      </div>
    </section>
  );
}

