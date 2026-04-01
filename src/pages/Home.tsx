import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Monitor, Users, Cloud, Smartphone, Brain,
  Shield, Zap, Globe, CheckCircle, Code
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import ServiceCard from "../components/ServiceCard";
import StatsCounter from "../components/StatsCounter";
import TestimonialSlider from "../components/TestimonialSlider";
import CTASection from "../components/CTASection";

const services = [
  { icon: <Brain className="w-7 h-7" />, title: "IT Consulting", description: "Strategic technology guidance to drive digital transformation.", backContent: "We analyze your tech stack, identify gaps, and create roadmaps that align technology with business goals." },
  { icon: <Users className="w-7 h-7" />, title: "Staff Augmentation", description: "Scale your team with vetted, world-class engineers.", backContent: "Access 10,000+ pre-vetted developers ready to join your team within 48 hours." },
  { icon: <Code className="w-7 h-7" />, title: "Dedicated Teams", description: "Full project teams managed and optimized for delivery.", backContent: "End-to-end project ownership with dedicated PMs, architects, and developers." },
  { icon: <Cloud className="w-7 h-7" />, title: "Cloud Services", description: "AWS, Azure, GCP — migration, optimization, and management.", backContent: "Reduce cloud costs by 40% while improving reliability and scalability." },
  { icon: <Smartphone className="w-7 h-7" />, title: "Web & Mobile Dev", description: "Custom applications built with cutting-edge technologies.", backContent: "React, React Native, Node.js, Python — full-stack development expertise." },
  { icon: <Shield className="w-7 h-7" />, title: "Cybersecurity", description: "Protect your business with enterprise-grade security solutions.", backContent: "Penetration testing, compliance audits, and 24/7 security monitoring." },
];

const whyChooseUs = [
  { icon: <Zap className="w-6 h-6" />, title: "48-Hour Onboarding", desc: "Get matched with talent and start within 2 days." },
  { icon: <Globe className="w-6 h-6" />, title: "Global Talent Pool", desc: "Access developers across 50+ countries." },
  { icon: <Shield className="w-6 h-6" />, title: "Quality Guaranteed", desc: "Rigorous vetting with a 98% client satisfaction rate." },
  { icon: <CheckCircle className="w-6 h-6" />, title: "Flexible Engagement", desc: "Scale up or down based on your project needs." },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 200, suffix: "+", label: "Engineers on Staff" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Years Experience" },
];

const clientLogos = ["TechCorp", "InnovateCo", "DataFlow", "CloudBase", "ScaleUp", "DevStream"];

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-glow" />
        {/* Decorative orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
                <Zap className="w-3.5 h-3.5" /> Smart Talent Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6"
            >
              Strategic Hiring Partner for {" "}
              <span className="text-gradient">Modern Businesses Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Scale your team with pre-vetted developers, get expert IT consulting, and accelerate your digital transformation — all under one roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/hire"
                className="px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow flex items-center gap-2"
              >
                Hire Developers <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-muted/50 transition-colors"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">Trusted by innovative companies</p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
              {clientLogos.map((name) => (
                <span key={name} className="text-lg font-heading font-semibold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors">
                  {name}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="slideLeft">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
                Expertise in  <span className="text-gradient">Niche Technologies</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We specialize in sourcing professionals in niche and emerging technologies that are often difficult to find in the market. Our strong talent network and targeted sourcing strategies allow us to identify highly specialized candidates who can contribute immediately to your projects.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Faster Talent Delivery Across India & Overseas Market<br/>
                Time is crucial when it comes to hiring. Our streamlined recruitment process enables us to provide qualified candidates in a very short time frame, ensuring your projects move forward without delays.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "10,000+ Vetted Engineers",
                  "50+ Countries",
                  "48-Hour Matching",
                  "98% Retention Rate",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection variant="slideRight">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-card border border-border p-8 lg:p-12">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative z-10 space-y-6">
                  {stats.slice(0, 3).map((stat) => (
                    <div key={stat.label} className="flex items-center gap-4">
                      <div className="text-3xl font-heading font-bold text-gradient">{stat.value}{stat.suffix}</div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3">
              End-to-End <span className="text-gradient">IT Solutions</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <ServiceCard {...s} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Peoplezenix</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3">
              Built for <span className="text-gradient">Speed & Quality</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-xl bg-gradient-card border border-border p-6 hover:border-primary/30 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
          </AnimatedSection>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Scale Your Team?"
        description="Get started with a free consultation. Tell us about your project and we'll match you with the right talent within 48 hours."
        buttonText="Schedule a Call"
        buttonLink="/contact"
      />
    </main>
  );
};

export default Home;
