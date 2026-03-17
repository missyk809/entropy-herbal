import { useState, useEffect, useRef } from "react";

const studies = [
  {
    title: "Cognitive Function & Stress in Young Adults",
    journal: "Nutrients (2023)",
    description: "Double-blind, placebo-controlled RCT in 41 healthy adults (18–45). Participants showed faster reaction times on cognitive tasks after a single dose, and reduced stress after 28 days of supplementation.",
    url: "https://pubmed.ncbi.nlm.nih.gov/38004235/",
    tags: ["Cognition", "Stress", "RCT"],
  },
  {
    title: "Mild Cognitive Impairment: 16-Week Trial",
    journal: "Phytotherapy Research (2009)",
    description: "Landmark double-blind, placebo-controlled trial in adults aged 50–80. Significant improvements in cognitive function at weeks 8, 12, and 16. Benefits declined after supplementation stopped — suggesting sustained use is key.",
    url: "https://pubmed.ncbi.nlm.nih.gov/18844328/",
    tags: ["Cognition", "Aging", "RCT"],
  },
  {
    title: "Depression, Anxiety & Sleep Disorders",
    journal: "Biomedical Research (2019)",
    description: "8-week trial of 77 individuals showing improvements in depression (29%), anxiety (33%), and sleep disorders (39%) compared to baseline after lion's mane extract supplementation.",
    url: "https://pubmed.ncbi.nlm.nih.gov/31413233/",
    tags: ["Mood", "Sleep", "Anxiety"],
  },
  {
    title: "Nerve Growth Factor & Neuroprotection",
    journal: "PMC Narrative Review (2025)",
    description: "Comprehensive review confirming that hericenones and erinacines — lion's mane's key bioactives — cross the blood-brain barrier and promote nerve growth factor (NGF) synthesis, driving neuroprotective and anti-inflammatory effects.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12030463/",
    tags: ["NGF", "Neuroprotection", "Review"],
  },
  {
    title: "Mushrooms, Mood & Neurocognition: Systematic Review",
    journal: "Neuroscience & Biobehavioral Reviews (2024)",
    description: "Systematic review of 34 human studies. Epidemiological data showed significant benefits of dietary mushroom patterns on cognition and mood. Lion's mane showed the most consistent enhancement in middle-aged and older adults.",
    url: "https://www.sciencedirect.com/science/article/pii/S0149763424000162",
    tags: ["Cognition", "Mood", "Meta-analysis"],
  },
];

const tagColors = {
  Cognition: "#a8e6cf",
  Stress: "#ffd3b6",
  RCT: "#d4a5f5",
  Aging: "#ffaaa5",
  Mood: "#ffd3b6",
  Sleep: "#a8d8ea",
  Anxiety: "#a8d8ea",
  NGF: "#a8e6cf",
  Neuroprotection: "#d4a5f5",
  Review: "#c9b89a",
  "Meta-analysis": "#c9b89a",
};

export default function EntropyHerbal() {
  const [activeStudy, setActiveStudy] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'EB Garamond', Georgia, serif", background: "#0e0d0b", color: "#e8e0d0", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Cinzel:wght@400;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }

        ::selection { background: #8b6914; color: #fdf4e3; }

        .nav-link {
          color: #b8a882;
          text-decoration: none;
          font-family: 'Cinzel', serif;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          transition: color 0.3s;
        }
        .nav-link:hover { color: #e8d5a0; }

        .hero-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(3.2rem, 8vw, 7rem);
          font-weight: 700;
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: #fdf4e3;
        }

        .hero-subtitle {
          font-family: 'EB Garamond', serif;
          font-style: italic;
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          color: #b8a882;
          letter-spacing: 0.04em;
        }

        .cta-btn {
          display: inline-block;
          padding: 0.85rem 2.4rem;
          background: transparent;
          border: 1px solid #8b6914;
          color: #e8d5a0;
          font-family: 'Cinzel', serif;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #8b6914;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
          z-index: -1;
        }
        .cta-btn:hover::before { transform: scaleX(1); }
        .cta-btn:hover { color: #fdf4e3; }

        .cta-btn-primary {
          background: #8b6914;
          border-color: #8b6914;
          color: #fdf4e3;
        }
        .cta-btn-primary:hover { background: #a07c1a; border-color: #a07c1a; }
        .cta-btn-primary::before { background: #a07c1a; }

        .section-label {
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #8b6914;
        }

        .feature-card {
          border: 1px solid #2a2720;
          padding: 2.2rem 2rem;
          transition: border-color 0.3s, transform 0.3s;
          cursor: default;
        }
        .feature-card:hover {
          border-color: #8b6914;
          transform: translateY(-3px);
        }

        .study-card {
          border: 1px solid #2a2720;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .study-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: #8b6914;
          transition: width 0.3s;
        }
        .study-card:hover { border-color: #4a3f2a; transform: translateY(-2px); }
        .study-card:hover::after { width: 100%; }

        .divider {
          border: none;
          border-top: 1px solid #2a2720;
          margin: 0;
        }

        .tag {
          display: inline-block;
          padding: 0.2rem 0.65rem;
          border-radius: 2px;
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          font-weight: 600;
          margin-right: 0.4rem;
          margin-bottom: 0.3rem;
        }

        .mushroom-icon {
          font-size: 3rem;
          filter: sepia(0.5);
        }

        .stat-num {
          font-family: 'Cinzel', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: #e8d5a0;
          line-height: 1;
        }

        .quote-block {
          border-left: 2px solid #8b6914;
          padding-left: 1.8rem;
          font-style: italic;
          font-size: 1.2rem;
          color: #c8b99a;
          line-height: 1.7;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.8s ease forwards; }
        .delay-1 { animation-delay: 0.15s; opacity: 0; }
        .delay-2 { animation-delay: 0.3s; opacity: 0; }
        .delay-3 { animation-delay: 0.45s; opacity: 0; }
        .delay-4 { animation-delay: 0.6s; opacity: 0; }

        .noise-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10,9,7,0.92);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .modal-box {
          background: #151310;
          border: 1px solid #3a3020;
          max-width: 640px;
          width: 100%;
          padding: 2.8rem;
          position: relative;
          animation: fadeUp 0.3s ease;
        }

        .close-btn {
          position: absolute;
          top: 1.2rem; right: 1.4rem;
          background: none;
          border: none;
          color: #8b7a5a;
          font-size: 1.5rem;
          cursor: pointer;
          line-height: 1;
        }
        .close-btn:hover { color: #e8d5a0; }

        footer a { color: #6b5f47; text-decoration: none; transition: color 0.2s; }
        footer a:hover { color: #b8a882; }

        @media (max-width: 768px) {
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .hero-row { flex-direction: column !important; gap: 2rem !important; }
        }
      `}</style>

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Study Modal */}
      {activeStudy && (
        <div className="modal-overlay" onClick={() => setActiveStudy(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveStudy(null)}>×</button>
            <p className="section-label" style={{ marginBottom: "1rem" }}>Research Study</p>
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.25rem", fontWeight: 600, color: "#fdf4e3", lineHeight: 1.4, marginBottom: "0.6rem" }}>
              {activeStudy.title}
            </h3>
            <p style={{ color: "#8b7a5a", fontStyle: "italic", marginBottom: "1.4rem", fontSize: "0.9rem" }}>{activeStudy.journal}</p>
            <div style={{ marginBottom: "1.2rem" }}>
              {activeStudy.tags.map(t => (
                <span key={t} className="tag" style={{ background: tagColors[t] + "22", color: tagColors[t], border: `1px solid ${tagColors[t]}44` }}>{t}</span>
              ))}
            </div>
            <p style={{ color: "#c8b99a", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1.8rem" }}>{activeStudy.description}</p>
            <a href={activeStudy.url} target="_blank" rel="noopener noreferrer" className="cta-btn">
              Read Full Study →
            </a>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "1.4rem 3rem", display: "flex", alignItems: "center", justifyContent: "space-between", background: `rgba(14,13,11,${Math.min(scrollY / 200, 0.95)})`, backdropFilter: "blur(12px)", borderBottom: scrollY > 50 ? "1px solid #1e1c18" : "1px solid transparent", transition: "all 0.3s" }}>
        <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", color: "#e8d5a0" }}>ENTROPY HERBAL</span>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          <a href="#science" className="nav-link">Science</a>
          <a href="#product" className="nav-link">Product</a>
          <a href="#research" className="nav-link">Research</a>
          <a href="#product" className="cta-btn" style={{ padding: "0.5rem 1.2rem", fontSize: "0.65rem" }}>Shop Now</a>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "8rem 3rem 5rem", position: "relative", overflow: "hidden" }}>
        {/* Background glow */}
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(139,105,20,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          <p className="section-label fade-up" style={{ marginBottom: "2rem" }}>
            ◈ &nbsp; Hericium erinaceus &nbsp; ◈ &nbsp; Fruiting Body Extract
          </p>
          
          <div className="hero-row fade-up delay-1" style={{ display: "flex", alignItems: "flex-end", gap: "4rem", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 400px" }}>
              <h1 className="hero-title">
                ENTROPY<br />
                <span style={{ color: "#8b6914" }}>HERBAL</span>
              </h1>
            </div>
            <div style={{ flex: "1 1 320px", paddingBottom: "0.5rem" }}>
              <p className="hero-subtitle" style={{ marginBottom: "1.8rem" }}>
                The ancient mushroom. Modern extraction.<br />Potency you can trust.
              </p>
              <p style={{ color: "#7a6e5a", lineHeight: 1.8, fontSize: "0.97rem", marginBottom: "2.2rem", maxWidth: "360px" }}>
                We extract lion's mane from the <em>fruiting body</em> — where hericenones and erinacines are most concentrated — using dual hot water and ethanol extraction for maximum bioavailability.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className="cta-btn cta-btn-primary" id="product">Order Extract</button>
                <a href="#research" className="cta-btn">View Research</a>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="fade-up delay-3" style={{ marginTop: "5rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", borderTop: "1px solid #2a2720" }}>
            {[
              { num: "8:1", label: "Extract Ratio" },
              { num: "30%", label: "Beta-Glucans" },
              { num: "5+", label: "Clinical Studies" },
              { num: "100%", label: "Fruiting Body" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "2rem 2.5rem", borderRight: i < 3 ? "1px solid #2a2720" : "none" }}>
                <div className="stat-num">{s.num}</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.62rem", letterSpacing: "0.2em", color: "#5a5040", marginTop: "0.4rem", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Why We're Different */}
      <section id="science" style={{ padding: "6rem 3rem", maxWidth: "1200px", margin: "0 auto" }}>
        <p className="section-label" style={{ marginBottom: "1rem" }}>◈ &nbsp; Why Entropy Herbal</p>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 600, color: "#fdf4e3", marginBottom: "1rem", maxWidth: "600px", lineHeight: 1.2 }}>
          Most lion's mane is filler.<br /><span style={{ color: "#8b6914" }}>Ours is not.</span>
        </h2>
        <p style={{ color: "#7a6e5a", fontSize: "1.05rem", maxWidth: "560px", lineHeight: 1.8, marginBottom: "4rem" }}>
          The supplement industry is flooded with mycelium-on-grain products — largely starch with trace amounts of actual mushroom. We only use the <em>fruiting body</em>, tested and verified.
        </p>

        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#2a2720" }}>
          {[
            {
              icon: "🍄",
              title: "Fruiting Body Only",
              body: "We never use mycelium on grain. Our extract comes solely from mature lion's mane fruiting bodies — where active compounds are richest and starch content is lowest.",
            },
            {
              icon: "⚗️",
              title: "Dual Extraction",
              body: "Water extraction unlocks polysaccharides and beta-glucans. Ethanol extraction captures fat-soluble hericenones. Together, they deliver the full spectrum of bioactives.",
            },
            {
              icon: "📋",
              title: "Third-Party Tested",
              body: "Every batch is independently tested for beta-glucan content, heavy metals, microbials, and pesticides. No exceptions. Certificates of analysis available on request.",
            },
            {
              icon: "🧬",
              title: "Standardized Extracts",
              body: "Our extract is standardized to ≥30% beta-glucans — the key immune and cognitive support compounds. Most brands don't measure or disclose this figure.",
            },
            {
              icon: "🔬",
              title: "Backed by Science",
              body: "Every claim on this page links to a peer-reviewed study. We cite the research, explain its findings honestly, and acknowledge where evidence is still emerging.",
            },
            {
              icon: "🌿",
              title: "Clean Ingredients",
              body: "No fillers, no mycelium, no flow agents. Just lion's mane fruiting body extract and a vegetarian cellulose capsule. Nothing you don't need.",
            },
          ].map((f, i) => (
            <div key={i} className="feature-card" style={{ background: "#0e0d0b" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "1.2rem", filter: "grayscale(0.3)" }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.08em", color: "#e8d5a0", marginBottom: "0.8rem" }}>{f.title}</h3>
              <p style={{ color: "#7a6e5a", lineHeight: 1.8, fontSize: "0.93rem" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* Quote Section */}
      <section style={{ padding: "5rem 3rem", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <blockquote className="quote-block" style={{ borderLeft: "none", paddingLeft: 0, fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}>
          "Hericenones and erinacines can easily cross the blood-brain barrier, promoting nerve growth factor synthesis — driving neuroprotective and neuroregenerative effects."
        </blockquote>
        <p style={{ marginTop: "1.2rem", fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#5a5040" }}>
          PMC NARRATIVE REVIEW — CONTATO & CONTE-JUNIOR, 2025
        </p>
      </section>

      <hr className="divider" />

      {/* Research Section */}
      <section id="research" style={{ padding: "6rem 3rem", maxWidth: "1200px", margin: "0 auto" }}>
        <p className="section-label" style={{ marginBottom: "1rem" }}>◈ &nbsp; Peer-Reviewed Research</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1.5rem" }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 600, color: "#fdf4e3", lineHeight: 1.2 }}>
            The science behind<br />
            <span style={{ color: "#8b6914" }}>every capsule.</span>
          </h2>
          <p style={{ color: "#6b5f47", maxWidth: "380px", lineHeight: 1.8, fontSize: "0.95rem" }}>
            We believe in radical transparency. Click any study below to read a plain-English summary and access the original paper. Research is ongoing — we update this section as new evidence emerges.
          </p>
        </div>

        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "#2a2720" }}>
          {studies.map((study, i) => (
            <div key={i} className="study-card" style={{ background: "#0e0d0b" }} onClick={() => setActiveStudy(study)}>
              <div style={{ marginBottom: "0.8rem" }}>
                {study.tags.map(t => (
                  <span key={t} className="tag" style={{ background: tagColors[t] + "18", color: tagColors[t], border: `1px solid ${tagColors[t]}33` }}>{t}</span>
                ))}
              </div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", fontWeight: 600, color: "#e8d5a0", marginBottom: "0.5rem", lineHeight: 1.5 }}>{study.title}</h3>
              <p style={{ color: "#5a5040", fontStyle: "italic", fontSize: "0.82rem", marginBottom: "0.9rem" }}>{study.journal}</p>
              <p style={{ color: "#7a6e5a", fontSize: "0.9rem", lineHeight: 1.7 }}>{study.description.slice(0, 120)}…</p>
              <p style={{ marginTop: "1.2rem", color: "#8b6914", fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.15em" }}>READ SUMMARY + STUDY →</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: "2.5rem", padding: "1.5rem 2rem", border: "1px solid #1e1c18", background: "#0c0b09" }}>
          <p style={{ color: "#4a4236", fontSize: "0.82rem", lineHeight: 1.7 }}>
            <strong style={{ color: "#6b5f47", fontFamily: "'Cinzel', serif", fontSize: "0.7rem", letterSpacing: "0.1em" }}>RESEARCH TRANSPARENCY NOTE</strong> — These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Clinical study results vary; sample sizes in lion's mane research are still relatively small. We present this research honestly — including limitations — because we believe you deserve accurate information.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* Product CTA */}
      <section style={{ padding: "7rem 3rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "500px", height: "500px", background: "radial-gradient(ellipse, rgba(139,105,20,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
        <p className="section-label" style={{ marginBottom: "1.5rem" }}>◈ &nbsp; Our Extract</p>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, color: "#fdf4e3", marginBottom: "1.2rem", lineHeight: 1.1 }}>
          Ready to experience<br />
          <span style={{ color: "#8b6914" }}>the difference?</span>
        </h2>
        <p style={{ color: "#7a6e5a", fontSize: "1.05rem", maxWidth: "460px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
          60 capsules. 8:1 extract. Fruiting body only. Third-party tested. 30-day supply with 500mg per capsule — a dose backed by published research.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="cta-btn cta-btn-primary" style={{ fontSize: "0.75rem", padding: "1rem 2.8rem" }}>
            Shop Lion's Mane Extract
          </button>
          <a href="#research" className="cta-btn" style={{ fontSize: "0.75rem", padding: "1rem 2.8rem" }}>
            Read the Research
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1e1c18", padding: "3rem", background: "#0a0908" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", color: "#4a4236", marginBottom: "0.4rem" }}>ENTROPY HERBAL</p>
            <p style={{ color: "#3a332a", fontSize: "0.8rem" }}>Potent extracts. Radical transparency.</p>
          </div>
          <div style={{ display: "flex", gap: "2rem" }}>
            <a href="#science" className="nav-link" style={{ fontSize: "0.62rem" }}>Science</a>
            <a href="#research" className="nav-link" style={{ fontSize: "0.62rem" }}>Research</a>
            <a href="mailto:hello@entropyherbal.com" className="nav-link" style={{ fontSize: "0.62rem" }}>Contact</a>
          </div>
          <p style={{ color: "#2a2520", fontSize: "0.75rem" }}>© 2026 Entropy Herbal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
