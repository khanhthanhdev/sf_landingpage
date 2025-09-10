export default function Hero() {
  return (
    <section id="hero" className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Generative Manim‑powered STEM videos</h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground">Create accurate, interactive STEM animations from text or problems.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#editor" className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-primary-foreground">Try the Interactive Demo</a>
          <a href="#how-it-works" className="inline-flex h-11 items-center rounded-md border px-6">Watch Overview</a>
        </div>
      </div>
    </section>
  );
}

