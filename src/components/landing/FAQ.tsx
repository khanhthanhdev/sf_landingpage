export default function FAQ() {
  const faqs = [
    {
      q: "How accurate are the explanations?",
      a: "Our AI-powered explanations are highly accurate, leveraging advanced algorithms to ensure mathematical and scientific precision in every animation generated.",
    },
    {
      q: "Can I edit scenes?",
      a: "Yes! You have full control over your scenes with our built-in editor. You can modify animations, adjust timing, and customize every aspect to match your vision.",
    },
    {
      q: "What formats can I export?",
      a: "Animo supports multiple export formats including MP4 for YouTube, square formats for Instagram, vertical for TikTok, and more to suit all your content needs.",
    },
  ];

  return (
    <section id="faq" className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="glass-effect rounded-xl p-6 hover:border-primary/30 transition-colors group"
            >
              <summary className="font-semibold text-lg cursor-pointer flex items-center justify-between">
                {faq.q}
                <svg
                  className="w-5 h-5 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
