import { TRY_IT_LINK } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section id="cta" className="container mx-auto px-4 py-8 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="glass-effect rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Ready to create your first interactive STEM video?
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={TRY_IT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-lg bg-primary px-8 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 cursor-pointer"
            >
              Try the Interactive Demo
            </a>
            <button className="inline-flex h-12 items-center rounded-lg border border-border px-8 text-lg font-medium hover:bg-accent transition-colors cursor-pointer">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
