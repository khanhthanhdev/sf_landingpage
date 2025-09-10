export default function Features() {
  const items = [
    { title: "Precise STEM visuals", desc: "Built with Manim for accuracy" },
    { title: "Step-by-step solving", desc: "Clear, guided explanations" },
    { title: "Coding tutor", desc: "Runtime visualization & tracing" },
    { title: "AI video edit", desc: "Tweak generated scenes in-browser" },
    { title: "RAG accuracy", desc: "Grounded content and checks" },
    { title: "Export HD/4K", desc: "Share anywhere" },
  ];
  return (
    <section id="features" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center">Core Features</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((it) => (
          <div key={it.title} className="rounded-lg border p-6">
            <div className="font-semibold">{it.title}</div>
            <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

