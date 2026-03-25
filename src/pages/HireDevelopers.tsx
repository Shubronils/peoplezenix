import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";

const categories = ["All", "Frontend", "Backend", "Full Stack", "Mobile", "DevOps"];

const developers = [
  { name: "React Developer", category: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind"], experience: "4+ years", rate: "$40-60/hr" },
  { name: "Angular Developer", category: "Frontend", skills: ["Angular", "RxJS", "TypeScript", "SCSS"], experience: "5+ years", rate: "$45-65/hr" },
  { name: "Node.js Developer", category: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "Redis"], experience: "5+ years", rate: "$45-70/hr" },
  { name: "Python Developer", category: "Backend", skills: ["Python", "Django", "FastAPI", "AWS"], experience: "4+ years", rate: "$45-65/hr" },
  { name: "Full Stack Engineer", category: "Full Stack", skills: ["React", "Node.js", "PostgreSQL", "Docker"], experience: "6+ years", rate: "$55-80/hr" },
  { name: "MERN Stack Developer", category: "Full Stack", skills: ["MongoDB", "Express", "React", "Node.js"], experience: "4+ years", rate: "$40-60/hr" },
  { name: "React Native Developer", category: "Mobile", skills: ["React Native", "TypeScript", "Firebase", "Redux"], experience: "4+ years", rate: "$45-65/hr" },
  { name: "Flutter Developer", category: "Mobile", skills: ["Flutter", "Dart", "Firebase", "REST APIs"], experience: "3+ years", rate: "$40-60/hr" },
  { name: "DevOps Engineer", category: "DevOps", skills: ["AWS", "Terraform", "Docker", "Kubernetes"], experience: "5+ years", rate: "$55-80/hr" },
];

const hiringSteps = [
  { step: "01", title: "Share Your Requirements", desc: "Tell us about your project, tech stack, and team needs." },
  { step: "02", title: "Get Matched", desc: "We match you with pre-vetted developers within 24 hours." },
  { step: "03", title: "Interview & Select", desc: "Conduct interviews and select the best fit for your team." },
  { step: "04", title: "Start Building", desc: "Your developer starts contributing from day one." },
];

const HireDevelopers = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? developers : developers.filter((d) => d.category === activeCategory);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Hire Remote Developers</span>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
              Top <span className="text-gradient">1% Engineers</span>, Ready in 48 Hours
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Access pre-vetted, senior developers across every major technology. Scale your team instantly with zero recruitment overhead.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              Hire Now <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Developer Cards */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground">Browse <span className="text-gradient">Talent</span></h2>
          </AnimatedSection>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dev, i) => (
              <AnimatedSection key={dev.name} delay={i * 0.08} variant="scale">
                <div className="rounded-xl bg-gradient-card border border-border p-6 hover:border-primary/30 transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{dev.category}</span>
                    <span className="text-sm text-muted-foreground">{dev.experience}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{dev.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dev.skills.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 rounded-md bg-muted text-xs text-muted-foreground">{skill}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-primary font-heading font-semibold">{dev.rate}</span>
                    <Link
                      to="/contact"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      Hire <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Simple Process</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3">
              How <span className="text-gradient">Hiring Works</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="rounded-xl bg-gradient-card border border-border p-6 text-center relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground font-heading font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Why Hire Through <span className="text-gradient">NexaBridge</span>?</h2>
            <div className="grid gap-4 text-left">
              {[
                "Rigorously vetted — only top 1% pass our screening",
                "Timezone-aligned developers for seamless collaboration",
                "Flexible contracts — monthly, quarterly, or project-based",
                "Dedicated account manager for every engagement",
                "14-day risk-free trial — replace or refund guaranteed",
                "IP protection and NDA included"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Dream Team?"
        description="Tell us what you need and we'll match you with the perfect developers within 48 hours."
        buttonText="Start Hiring"
        buttonLink="/contact"
      />
    </main>
  );
};

export default HireDevelopers;
