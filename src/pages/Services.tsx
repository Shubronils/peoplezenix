import { Brain, Users, Code, Cloud, Smartphone, Shield, Database, Settings, Cpu } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";

const services = [
  { icon: <Brain className="w-7 h-7" />, title: "IT Consulting", description: "Strategic advisory to align your technology with business objectives.", backContent: "Technology assessments, digital transformation roadmaps, architecture reviews, and CTO-as-a-service." },
  { icon: <Users className="w-7 h-7" />, title: "Staff Augmentation", description: "Instantly scale your team with top-tier engineers.", backContent: "Pre-vetted developers matched to your tech stack, culture, and timezone. Onboarding in 48 hours." },
  { icon: <Code className="w-7 h-7" />, title: "Dedicated Development Teams", description: "Full project teams under your direction.", backContent: "Project managers, architects, developers, and QA engineers — a complete team dedicated to your project." },
  { icon: <Cloud className="w-7 h-7" />, title: "Cloud Services", description: "Cloud migration, optimization, and managed infrastructure.", backContent: "AWS, Azure, GCP expertise. Reduce costs by 40% and achieve 99.99% uptime." },
  { icon: <Smartphone className="w-7 h-7" />, title: "Web & Mobile Development", description: "Custom applications built with modern tech stacks.", backContent: "React, React Native, Node.js, Python, Go — from MVPs to enterprise platforms." },
  { icon: <Shield className="w-7 h-7" />, title: "Cybersecurity", description: "Comprehensive security assessments and solutions.", backContent: "Penetration testing, SOC 2 compliance, security audits, and 24/7 threat monitoring." },
  { icon: <Database className="w-7 h-7" />, title: "Data Engineering", description: "Build robust data pipelines and analytics platforms.", backContent: "ETL pipelines, data warehousing, real-time analytics, and BI dashboard development." },
  { icon: <Cpu className="w-7 h-7" />, title: "AI & Machine Learning", description: "Intelligent solutions powered by cutting-edge AI.", backContent: "Custom ML models, NLP, computer vision, and AI-driven process automation." },
  { icon: <Settings className="w-7 h-7" />, title: "DevOps & SRE", description: "Streamline your development and operations pipeline.", backContent: "CI/CD pipelines, infrastructure as code, monitoring, and incident management." },
];

const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
              Comprehensive <span className="text-gradient">IT Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From consulting to development, we offer end-to-end technology services designed to accelerate your growth and keep you ahead of the competition.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <ServiceCard {...s} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">How We Work</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3">
              Our <span className="text-gradient">Process</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We understand your goals, challenges, and technical requirements." },
              { step: "02", title: "Strategy", desc: "We design a tailored solution and project roadmap." },
              { step: "03", title: "Execution", desc: "Our team delivers with agile methodology and transparent communication." },
              { step: "04", title: "Support", desc: "Ongoing optimization, maintenance, and scaling support." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="rounded-xl bg-gradient-card border border-border p-6 relative overflow-hidden group hover:border-primary/30 transition-colors">
                  <span className="absolute -top-4 -right-2 text-7xl font-heading font-bold text-primary/5 group-hover:text-primary/10 transition-colors">{item.step}</span>
                  <div className="relative z-10">
                    <span className="text-primary font-heading font-bold text-sm">{item.step}</span>
                    <h3 className="font-heading font-semibold text-foreground text-lg mt-2 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Custom Solution?"
        description="Let's discuss your project requirements and find the perfect technology solution for your business."
        buttonText="Get a Free Quote"
        buttonLink="/contact"
      />
    </main>
  );
};

export default Services;
