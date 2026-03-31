import { useState } from "react";
import { MapPin, Clock, Briefcase, Heart, Coffee, BookOpen, Dumbbell, Globe, Send } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";

const jobs = [
  { title: "Senior React Developer", location: "Remote", type: "Full-time", department: "Engineering" },
  { title: "Backend Engineer (Node.js)", location: "Remote", type: "Full-time", department: "Engineering" },
  { title: "DevOps Engineer", location: "San Francisco", type: "Full-time", department: "Infrastructure" },
  { title: "UI/UX Designer", location: "Remote", type: "Full-time", department: "Design" },
  { title: "Project Manager", location: "New York", type: "Full-time", department: "Operations" },
  { title: "QA Automation Engineer", location: "Remote", type: "Contract", department: "Quality" },
];

const benefits = [
  { icon: <Globe className="w-6 h-6" />, title: "Remote First", desc: "Work from anywhere in the world." },
  { icon: <Heart className="w-6 h-6" />, title: "Health Benefits", desc: "Comprehensive medical, dental, and vision." },
  { icon: <BookOpen className="w-6 h-6" />, title: "Learning Budget", desc: "$2,000/year for courses and conferences." },
  { icon: <Coffee className="w-6 h-6" />, title: "Flexible Hours", desc: "Set your own schedule, focus on output." },
  { icon: <Dumbbell className="w-6 h-6" />, title: "Wellness Stipend", desc: "Monthly allowance for gym and wellness." },
  { icon: <Briefcase className="w-6 h-6" />, title: "Equity Options", desc: "Share in the company's growth and success." },
];

const Careers = () => {
  const [formData, setFormData] = useState({ name: "", email: "", role: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    setFormData({ name: "", email: "", role: "", message: "" });
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Join Our Team</span>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
              Build Your Career at <span className="text-gradient">Peoplezenix</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join a team of passionate engineers and consultants shaping the future of technology. We value growth, innovation, and work-life balance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Culture</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3">
              Why People <span className="text-gradient">Love Working Here</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-xl bg-gradient-card border border-border p-6 hover:border-primary/30 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                    {b.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Open Positions</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3">
              Current <span className="text-gradient">Openings</span>
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-4">
            {jobs.map((job, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="rounded-xl bg-gradient-card border border-border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary/30 transition-colors group">
                  <div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {job.type}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {job.department}</span>
                    </div>
                  </div>
                  <button className="px-5 py-2.5 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors flex-shrink-0">
                    Apply Now
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-heading font-bold text-foreground">Don't See Your Role? <span className="text-gradient">Apply Anyway</span></h2>
              <p className="text-muted-foreground mt-3">We're always looking for exceptional talent.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Desired Role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Why do you want to join Peoplezenix?"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Submit Application <Send className="w-4 h-4" />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Have Questions?"
        description="Reach out to our HR team and we'll get back to you within 24 hours."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </main>
  );
};

export default Careers;
