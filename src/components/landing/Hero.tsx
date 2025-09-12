import { TRY_IT_LINK } from "@/lib/constants";
import AnimatedCanvas from "../animation/AnimatedCanvas";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="container mx-auto px-4 md:py-0 py-20 relative z-10">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto">
          {/* Main heading and subhead */}
          <div className="relative text-center mb-12 md:mb-0 md:h-[calc(100vh-4rem)] md:flex md:flex-col md:justify-center">
            {/* Animated Canvas Background */}
            <div className="absolute inset-0 -z-20">
              <AnimatedCanvas />
            </div>
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                <div>Generative Manim-powered</div>
                <div>STEM videos</div>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Create accurate, interactive STEM animations from text or
                problems.
              </p>

              {/* Buttons and Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 md:mb-0">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={TRY_IT_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center rounded-lg bg-primary px-8 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 cursor-pointer"
                  >
                    Try the Interactive Demo
                  </a>
                  <button className="inline-flex h-12 items-center rounded-lg border border-border px-8 text-lg font-medium hover:bg-accent transition-colors cursor-pointer">
                    Watch 60s Overview
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Demo Player - 3/4 width */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-lg p-6 h-96">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">▶</span>
                  </div>
                  <h3 className="text-lg font-semibold">
                    Sample: &quot;Derivative as Instant Rate of Change&quot;
                  </h3>
                </div>

                {/* Timeline */}
                <div className="mb-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-1/3"></div>
                  </div>
                </div>

                {/* Animation area */}
                <div className="bg-muted/50 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">📊</div>
                    <p className="text-sm">Graph Animation Area</p>
                    <p className="text-xs mt-1">
                      Formula Morphing • Arrows • Vectors
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Code-to-Animation Panel - 1/4 width */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-4 h-96">
                <h3 className="text-lg font-semibold mb-4">Code-to-Anim</h3>

                {/* Input section */}
                <div className="mb-4">
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Input (Markdown / pseudo-code)
                  </label>
                  <div className="bg-muted/50 rounded border p-3 h-32 text-xs font-mono">
                    <div className="text-muted-foreground">
                      # Derivative Example
                      <br />
                      f(x) = x²
                      <br />
                      show limit as h→0
                      <br />
                      animate slope calculation
                    </div>
                  </div>
                </div>

                {/* Render button */}
                <button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                  <span>▸</span>
                  Render
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
