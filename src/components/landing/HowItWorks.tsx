export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="container mx-auto px-4 py-12 md:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 md:mb-16 text-center">
          How It Works
        </h2>

        {/* Process Flow */}
        <div className="glass-effect rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Understand prompt</h3>
              <p className="text-sm text-muted-foreground max-w-32">
                AI analyzes your input and requirements
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:flex items-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Verify with RAG/tools</h3>
              <p className="text-sm text-muted-foreground max-w-32">
                Cross-references knowledge base and tools
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:flex items-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.25 2.1l-.1-.1-.1-.1c-.6-.6-1.5-.6-2.1 0L3.75 10c-.6.6-.6 1.5 0 2.1L12 20.4l8.25-8.3c.6-.6.6-1.5 0-2.1L14.25 2.1zM12 18.6L5.4 12 12 5.4 18.6 12 12 18.6z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Generate Manim scenes</h3>
              <p className="text-sm text-muted-foreground max-w-32">
                Creates animated mathematical visualizations
              </p>
            </div>

            {/* Arrow 3 */}
            <div className="hidden md:flex items-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM10 12l5.5-3L10 6v6z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Render</h3>
              <p className="text-sm text-muted-foreground max-w-32">
                Exports high-quality video animation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
