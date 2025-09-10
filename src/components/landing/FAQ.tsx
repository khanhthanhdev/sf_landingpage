export default function FAQ() {
  const faqs = [
    { q: "How accurate are visuals?", a: "Scenes are generated with Manim for precise math/physics." },
    { q: "Can I edit generated videos?", a: "Yes. Adjust scenes and re-render in the editor." },
    { q: "Do you support code tutorials?", a: "Yes, with runtime visualization and tracing." },
  ];
  return (
    <section id="faq" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center">FAQ</h2>
      <div className="mt-8 max-w-3xl mx-auto space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="rounded-lg border p-4">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

