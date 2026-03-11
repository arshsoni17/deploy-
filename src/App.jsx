import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Build",
    icon: "⚙️",
    color: "#00FFB2",
    desc: "Compile source code into deployable artifacts.",
    detail: "Run your build scripts (e.g., npm run build) to create optimized production files. Lint, test, and bundle your application before moving forward.",
  },
  {
    id: 2,
    title: "Containerize",
    icon: "📦",
    color: "#00C2FF",
    desc: "Package your app in a Docker container.",
    detail: "Write a Dockerfile, build the image, and push it to a registry like Docker Hub or ECR. Containers ensure consistent environments from dev to prod.",
  },
  {
    id: 3,
    title: "CI/CD Pipeline",
    icon: "🔁",
    color: "#FFB800",
    desc: "Automate testing and delivery workflows.",
    detail: "Use GitHub Actions, GitLab CI, or Jenkins to automate build, test, and deploy steps on every code push. Shift quality left.",
  },
  {
    id: 4,
    title: "Deploy",
    icon: "🚀",
    color: "#FF4F8B",
    desc: "Push your app to production infrastructure.",
    detail: "Deploy to cloud platforms like AWS, GCP, Azure, or services like Vercel, Railway, Render. Use rolling updates or blue/green strategies.",
  },
  {
    id: 5,
    title: "Monitor",
    icon: "📡",
    color: "#A78BFA",
    desc: "Observe logs, metrics, and uptime.",
    detail: "Integrate tools like Datadog, Prometheus, or CloudWatch. Set alerts for errors, latency spikes, and resource usage. Iterate based on real data.",
  },
];

const concepts = [
  { term: "Zero Downtime", def: "Deployment strategy that keeps the app running during updates." },
  { term: "Blue/Green", def: "Run two identical envs; switch traffic to the new version instantly." },
  { term: "Canary Release", def: "Gradually shift traffic to new version to reduce risk." },
  { term: "IaC", def: "Infrastructure as Code — define infra in files (Terraform, Pulumi)." },
  { term: "Rollback", def: "Revert to a previous stable deployment when issues arise." },
  { term: "Health Check", def: "Endpoint or probe that confirms your app is alive and ready." },
];

export default function App() {
  const [activeStep, setActiveStep] = useState(null);
  const [hoveredConcept, setHoveredConcept] = useState(null);

  return (
    <div style={{ fontFamily: "'Courier New', monospace", background: "#080C10", minHeight: "100vh", color: "#C9D1D9" }}>
      {/* Grid overlay */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "linear-gradient(rgba(0,255,178,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,178,0.03) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      {/* Header */}
      <header style={{ position: "relative", zIndex: 1, borderBottom: "1px solid #1E2D3D", padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#00FFB2", boxShadow: "0 0 12px #00FFB2" }} />
          <span style={{ color: "#00FFB2", fontWeight: "bold", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase" }}>DeployLab Testing</span>
        </div>
        <nav style={{ display: "flex", gap: 28 }}>
          {["Pipeline", "Concepts", "Glossary"].map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} style={{ color: "#81a17b", fontSize: 12, letterSpacing: "0.1em", textDecoration: "none", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#00FFB2"} onMouseLeave={e => e.target.style.color = "#81a17b"}>{n}</a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 40px 60px" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.3em", color: "#00FFB2", textTransform: "uppercase", marginBottom: 16 }}>[ Learn Deployment ]</div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 20, color: "#E6EDF3" }}>
          Ship Code.<br />
          <span style={{ color: "#00FFB2", textShadow: "0 0 30px rgba(0,255,178,0.4)" }}>Confidently.</span>
        </h1>
        <p style={{ color: "#7B8FA1", maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.7, fontSize: 15 }}>
          Master the art of deployment — from writing a Dockerfile to running production CI/CD pipelines with zero downtime.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{ background: "#00FFB2", color: "#080C10", border: "none", padding: "12px 28px", fontFamily: "'Courier New', monospace", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", cursor: "pointer", textTransform: "uppercase" }}>
            Start Learning →
          </button>
          <button style={{ background: "transparent", color: "#00FFB2", border: "1px solid #00FFB2", padding: "12px 28px", fontFamily: "'Courier New', monospace", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", cursor: "pointer", textTransform: "uppercase" }}>
            View Docs
          </button>
        </div>
      </section>

      {/* Pipeline Steps */}
      <section id="pipeline" style={{ position: "relative", zIndex: 1, padding: "60px 40px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ fontSize: 11, color: "#7B8FA1", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>// deployment pipeline</div>
        <h2 style={{ color: "#E6EDF3", fontSize: 28, fontWeight: 700, marginBottom: 36 }}>The 5-Stage Pipeline</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {steps.map((step, i) => (
            <div key={step.id} onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              style={{
                border: `1px solid ${activeStep === step.id ? step.color : "#1E2D3D"}`,
                background: activeStep === step.id ? `rgba(${step.color === "#00FFB2" ? "0,255,178" : step.color === "#00C2FF" ? "0,194,255" : step.color === "#FFB800" ? "255,184,0" : step.color === "#FF4F8B" ? "255,79,139" : "167,139,250"},0.05)` : "#0D1117",
                padding: "18px 24px", cursor: "pointer", transition: "all 0.2s",
                boxShadow: activeStep === step.id ? `0 0 20px ${step.color}22` : "none"
              }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontSize: 11, color: step.color, fontWeight: 700, minWidth: 24 }}>0{i + 1}</span>
                <span style={{ fontSize: 20 }}>{step.icon}</span>
                <span style={{ color: "#E6EDF3", fontWeight: 700, fontSize: 15, flex: 1 }}>{step.title}</span>
                <span style={{ color: "#7B8FA1", fontSize: 12, flex: 2 }}>{step.desc}</span>
                <span style={{ color: step.color, fontSize: 14 }}>{activeStep === step.id ? "▲" : "▼"}</span>
              </div>
              {activeStep === step.id && (
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${step.color}33`, color: "#A8B8C8", fontSize: 13, lineHeight: 1.8, paddingLeft: 40 }}>
                  {step.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Terminal Demo */}
      <section id="concepts" style={{ position: "relative", zIndex: 1, padding: "40px 40px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ background: "#0D1117", border: "1px solid #1E2D3D", overflow: "hidden" }}>
          <div style={{ background: "#161B22", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #1E2D3D" }}>
            {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />)}
            <span style={{ color: "#7B8FA1", fontSize: 12, marginLeft: 8 }}>bash — deploy.sh</span>
          </div>
          <div style={{ padding: "20px 24px", fontSize: 13, lineHeight: 2 }}>
            {[
              { prompt: "$", cmd: "docker build -t myapp:latest .", color: "#00FFB2" },
              { prompt: "", cmd: "✓ Successfully built 4a2f9c1d", color: "#7B8FA1" },
              { prompt: "$", cmd: "docker push registry.io/myapp:latest", color: "#00FFB2" },
              { prompt: "", cmd: "✓ Pushed to registry", color: "#7B8FA1" },
              { prompt: "$", cmd: "kubectl rollout restart deployment/myapp", color: "#00FFB2" },
              { prompt: "", cmd: "deployment.apps/myapp restarted", color: "#7B8FA1" },
              { prompt: "$", cmd: "kubectl rollout status deployment/myapp", color: "#00FFB2" },
              { prompt: "", cmd: "✓ Rollout complete. 3/3 pods running.", color: "#00FFB2" },
            ].map((line, i) => (
              <div key={i} style={{ display: "flex", gap: 10 }}>
                {line.prompt && <span style={{ color: "#00FFB2" }}>{line.prompt}</span>}
                <span style={{ color: line.color }}>{line.cmd}</span>
              </div>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              <span style={{ color: "#00FFB2" }}>$</span>
              <span style={{ display: "inline-block", width: 8, height: 16, background: "#00FFB2", animation: "blink 1s step-end infinite" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section id="glossary" style={{ position: "relative", zIndex: 1, padding: "40px 40px 80px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ fontSize: 11, color: "#7B8FA1", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>// key concepts</div>
        <h2 style={{ color: "#E6EDF3", fontSize: 28, fontWeight: 700, marginBottom: 28 }}>Deployment Glossary</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
          {concepts.map(c => (
            <div key={c.term} onMouseEnter={() => setHoveredConcept(c.term)} onMouseLeave={() => setHoveredConcept(null)}
              style={{
                background: hoveredConcept === c.term ? "#161B22" : "#0D1117",
                border: `1px solid ${hoveredConcept === c.term ? "#00FFB2" : "#1E2D3D"}`,
                padding: "16px 18px", transition: "all 0.2s",
                boxShadow: hoveredConcept === c.term ? "0 0 16px rgba(0,255,178,0.1)" : "none"
              }}>
              <div style={{ color: "#00FFB2", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 6 }}>{c.term}</div>
              <div style={{ color: "#7B8FA1", fontSize: 12, lineHeight: 1.6 }}>{c.def}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid #1E2D3D", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "#3D5166", fontSize: 12 }}>© 2026 DeployLab</span>
        <span style={{ color: "#3D5166", fontSize: 12 }}>Built for learners. Ship fearlessly.</span>
      </footer>

      <style>{`@keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }`}</style>
    </div>
  );
}