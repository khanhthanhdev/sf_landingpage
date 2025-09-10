export default function HowItWorks() {
  return (
    <section id="how-it-works" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center">How It Works</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div className="rounded-lg border p-6"><div className="text-sm font-medium">1</div><div className="mt-2 font-semibold">Understand prompt</div><p className="text-sm text-muted-foreground mt-1">Parse text or problems.</p></div>
        <div className="rounded-lg border p-6"><div className="text-sm font-medium">2</div><div className="mt-2 font-semibold">Verify with tools</div><p className="text-sm text-muted-foreground mt-1">RAG and math checks.</p></div>
        <div className="rounded-lg border p-6"><div className="text-sm font-medium">3</div><div className="mt-2 font-semibold">Generate scenes</div><p className="text-sm text-muted-foreground mt-1">Produce Manim scripts.</p></div>
        <div className="rounded-lg border p-6"><div className="text-sm font-medium">4</div><div className="mt-2 font-semibold">Render</div><p className="text-sm text-muted-foreground mt-1">Export HD/4K.</p></div>
      </div>
    </section>
  );
}

