export default function SocialProof() {
  const logos = ["MIT", "OCW", "NASA", "Coursera", "Khan"];
  return (
    <section id="social-proof" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center">Trusted By</h2>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {logos.map((l) => (
          <div key={l} className="rounded-lg border h-16 flex items-center justify-center text-sm text-muted-foreground">{l}</div>
        ))}
      </div>
    </section>
  );
}

