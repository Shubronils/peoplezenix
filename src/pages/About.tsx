import { Target, Eye, Heart, Award, Users, Globe, Rocket, Shield } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import StatsCounter from "../components/StatsCounter";
import CTASection from "../components/CTASection";

const timeline = [
  { year: "2010", title: "Founded", desc: "Started with 5 engineers and a vision to bridge talent gaps globally." },
  { year: "2014", title: "Global Expansion", desc: "Opened offices in Europe and Asia, growing our talent network to 2,000+." },
  { year: "2018", title: "Cloud Division", desc: "Launched dedicated cloud consulting practice with AWS & Azure partnerships." },
  { year: "2021", title: "500+ Projects", desc: "Reached the milestone of 500 successfully delivered projects." },
  { year: "2024", title: "AI & Innovation", desc: "Expanded into AI/ML consulting and smart automation solutions." },
];

const values = [
  { icon: <Target className="w-6 h-6" />, title: "Excellence", desc: "We set the bar high and deliver beyond expectations." },
  { icon: <Eye className="w-6 h-6" />, title: "Transparency", desc: "Open communication and honest reporting at every stage." },
  { icon: <Heart className="w-6 h-6" />, title: "People First", desc: "Our team and clients are at the center of everything we do." },
  { icon: <Rocket className="w-6 h-6" />, title: "Innovation", desc: "We embrace cutting-edge technologies and methodologies." },
];

const team = [
  { name: "Alex Morgan", role: "CEO & Founder", initials: "AM" },
  { name: "Priya Patel", role: "CTO", initials: "PP" },
  { name: "David Kim", role: "VP of Engineering", initials: "DK" },
  { name: "Sofia Garcia", role: "Head of Talent", initials: "SG" },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Peoplezenix</span>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
              Bridging the Gap Between <span className="text-gradient">Talent & Innovation</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 2010, we've been connecting exceptional engineering talent with forward-thinking companies, delivering transformative technology solutions across the globe.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3">
              Company <span className="text-gradient">Timeline</span>
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border" />
            {timeline.map((item, i) => (
              <AnimatedSection key={i} variant={i % 2 === 0 ? "slideLeft" : "slideRight"} delay={i * 0.1}>
                <div className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className="flex-1 hidden lg:block" />
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow z-10" />
                  <div className="flex-1 ml-16 lg:ml-0">
                    <div className="rounded-xl bg-gradient-card border border-border p-6">
                      <span className="text-primary font-heading font-bold text-lg">{item.year}</span>
                      <h3 className="font-heading font-semibold text-foreground mt-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <AnimatedSection variant="slideLeft">
              <div className="rounded-xl bg-gradient-card border border-border p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize access to world-class technology talent and empower businesses of all sizes to build exceptional digital products.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="slideRight">
              <div className="rounded-xl bg-gradient-card border border-border p-8">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted bridge between global tech talent and innovation-driven companies, setting the standard for quality and speed.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground">Our <span className="text-gradient">Core Values</span></h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-xl bg-gradient-card border border-border p-6 text-center hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    {v.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3">
              Meet the <span className="text-gradient">Team</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1} variant="scale">
                <div className="rounded-xl bg-gradient-card border border-border p-6 text-center group hover:border-primary/30 transition-all">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="font-heading font-bold text-primary text-xl">{member.initials}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <StatsCounter stats={[
            { value: 500, suffix: "+", label: "Projects Delivered" },
            { value: 200, suffix: "+", label: "Engineers" },
            { value: 50, suffix: "+", label: "Countries" },
            { value: 15, suffix: "+", label: "Years" },
          ]} />
        </div>
      </section>

      <CTASection
        title="Want to Join Our Team?"
        description="We're always looking for talented individuals who share our passion for technology and innovation."
        buttonText="View Open Positions"
        buttonLink="/careers"
      />
    </main>
  );
};

export default About;
