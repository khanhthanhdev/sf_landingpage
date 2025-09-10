export default function UseCases() {
  const items = ["K-12 Math", "University Physics", "Chemistry", "Algorithms", "Data Viz", "Research Talks"]; 
  return (
    <section id="use-cases" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center">Use Cases</h2>
      <div className="mt-8 overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          {items.map((x) => (
            <div key={x} className="shrink-0 rounded-lg border px-5 py-10 w-64 text-center">{x}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

