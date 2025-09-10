export default function FinalCTA() {
  return (
    <section id="cta" className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Build your next STEM lesson</h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground">Try the editor and see precise animations in action.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#editor" className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-primary-foreground">Try Demo</a>
          <a href="#pricing" className="inline-flex h-11 items-center rounded-md border px-6">Talk to Sales</a>
        </div>
      </div>
    </section>
  );
}

