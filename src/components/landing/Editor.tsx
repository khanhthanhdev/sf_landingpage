export default function Editor() {
  return (
    <section
      id="editor"
      className="container mx-auto px-4 py-24 bg-gradient-to-b from-background to-background/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Live Editor Preview
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the power of Animo's animation generation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video preview */}
          <div className="glass-effect rounded-2xl p-6">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Animation Preview</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>00:00</span>
              <div className="flex-1 h-2 bg-muted rounded-full">
                <div className="w-1/3 h-full bg-primary rounded-full"></div>
              </div>
              <span>00:10</span>
            </div>
          </div>

          {/* Code editor */}
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-2 text-sm text-muted-foreground">
                Animation Code
              </span>
            </div>

            <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-primary"># Create a simple animation</div>
              <div className="text-muted-foreground">from manim import *</div>
              <div className="mt-2">
                <span className="text-blue-400">class</span>{" "}
                <span className="text-yellow-400">SimpleAnimation</span>
                <span className="text-muted-foreground">(Scene):</span>
              </div>
              <div className="ml-4">
                <span className="text-blue-400">def</span>{" "}
                <span className="text-yellow-400">construct</span>
                <span className="text-muted-foreground">(self):</span>
              </div>
              <div className="ml-8 text-muted-foreground">
                circle = Circle()
                <br />
                self.play(Create(circle))
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors cursor-pointer">
                Generate
              </button>
              <button className="px-4 py-2 border border-border rounded-lg text-sm hover:bg-accent transition-colors cursor-pointer">
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
