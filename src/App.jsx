import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Build",
    icon: "⚙️",
    desc: "Compile source code into deployable artifacts.",
    detail:
      "Run npm run build to create optimized production files. Lint, test, and bundle your application.",
  },
  {
    id: 2,
    title: "Containerize",
    icon: "📦",
    desc: "Package your app using Docker.",
    detail:
      "Write a Dockerfile, build an image, and push it to Docker Hub or a container registry.",
  },
  {
    id: 3,
    title: "CI/CD Pipeline",
    icon: "🔁",
    desc: "Automate testing and delivery.",
    detail:
      "Use GitHub Actions or Jenkins to automate builds, tests, and deployments.",
  },
  {
    id: 4,
    title: "Deploy",
    icon: "🚀",
    desc: "Push your app to production.",
    detail:
      "Deploy to platforms like AWS, Vercel, Render, or Railway with rolling updates.",
  },
  {
    id: 5,
    title: "Monitor",
    icon: "📡",
    desc: "Track logs and system health.",
    detail:
      "Use monitoring tools like Prometheus, Grafana, or CloudWatch.",
  },
];

const concepts = [
  { term: "Zero Downtime", def: "Deploy updates without interrupting users." },
  { term: "Blue/Green", def: "Two environments switch traffic instantly." },
  { term: "Canary Release", def: "Gradually route traffic to new version." },
  { term: "IaC", def: "Infrastructure defined using code." },
  { term: "Rollback", def: "Revert to a stable version after failure." },
  { term: "Health Check", def: "Endpoint verifying service readiness." },
];

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-mono">

      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-emerald-400 font-bold tracking-widest text-sm">
            ARSHDEEP SINGH
          </h1>

          <nav className="space-x-6 text-xs text-slate-400">
            <a href="#pipeline" className="hover:text-emerald-400">Pipeline</a>
            <a href="#concepts" className="hover:text-emerald-400">Concepts</a>
            <a href="#glossary" className="hover:text-emerald-400">Glossary</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-6">
        <p className="text-emerald-400 text-xs tracking-widest mb-4">
          LEARN DEPLOYMENT
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          {/* Ship Code <br /> */}
          {/* <span className="text-emerald-400">Confidently</span> */}
        </h1>

        <p className="max-w-xl mx-auto text-slate-400 mb-8">
          Understand modern deployment workflows from building your code to
          running production CI/CD pipelines.
        </p>

        <div className="space-x-4">
          <button className="bg-emerald-400 text-black px-6 py-2 text-sm font-semibold rounded">
            Start Learning
          </button>

          <button className="border border-emerald-400 text-emerald-400 px-6 py-2 text-sm rounded">
            View Docs
          </button>
        </div>
      </section>

      {/* Pipeline */}
      <section
        id="pipeline"
        className="max-w-3xl mx-auto px-6 py-16 space-y-3"
      >
        <h2 className="text-2xl font-semibold mb-8">Deployment Pipeline</h2>

        {steps.map((step) => (
          <div
            key={step.id}
            onClick={() =>
              setActive(active === step.id ? null : step.id)
            }
            className="border border-slate-800 rounded-lg p-4 cursor-pointer hover:border-emerald-400 transition"
          >
            <div className="flex items-center gap-4">
              <span className="text-lg">{step.icon}</span>

              <div className="flex-1">
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>

              <span className="text-slate-500">
                {active === step.id ? "▲" : "▼"}
              </span>
            </div>

            {active === step.id && (
              <p className="text-sm text-slate-400 mt-4">
                {step.detail}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Terminal */}
      <section id="concepts" className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-black border border-slate-800 rounded-lg p-6 text-sm space-y-2">
          <p className="text-emerald-400">$ docker build -t myapp .</p>
          <p className="text-slate-400">✓ Image built successfully</p>

          <p className="text-emerald-400">$ docker push myapp</p>
          <p className="text-slate-400">✓ Pushed to registry</p>

          <p className="text-emerald-400">
            $ kubectl rollout restart deployment/myapp
          </p>
          <p className="text-emerald-400">
            ✓ Deployment updated successfully
          </p>
        </div>
      </section>

      {/* Glossary */}
      <section
        id="glossary"
        className="max-w-5xl mx-auto px-6 py-16"
      >
        <h2 className="text-2xl font-semibold mb-8">
          Deployment Glossary
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {concepts.map((c) => (
            <div
              key={c.term}
              className="border border-slate-800 rounded-lg p-4 hover:border-emerald-400 transition"
            >
              <h3 className="text-emerald-400 text-sm font-semibold mb-1">
                {c.term}
              </h3>
              <p className="text-sm text-slate-400">{c.def}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © 2026 DeployLab — Built by Arshdeep Singh
      </footer>

    </div>
  );
}