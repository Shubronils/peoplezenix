import { useState } from "react";
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Github } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
              Let's Build Something <span className="text-gradient">Great Together</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you need developers, consulting, or a complete technology solution — we're here to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection variant="slideLeft" className="lg:col-span-3">
              <div className="rounded-xl bg-gradient-card border border-border p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us a Message</h2>
                {submitted && (
                  <div className="mb-6 px-4 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm">
                    Thanks for reaching out! We'll get back to you within 24 hours.
                  </div>
                )}
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
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection variant="slideRight" className="lg:col-span-2">
              <div className="space-y-6">
                <div className="rounded-xl bg-gradient-card border border-border p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    {[
                      { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@nexabridge.com" },
                      { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 (555) 123-4567" },
                      { icon: <MapPin className="w-5 h-5" />, label: "Office", value: "123 Innovation Drive\nSan Francisco, CA 94105" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="text-foreground whitespace-pre-line">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-gradient-card border border-border p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {[Linkedin, Twitter, Github].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        aria-label="Social media"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-xl border border-border overflow-hidden h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977573978!2d-122.39901492347056!3d37.78779621189999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c23c8a145%3A0xb15a08e199618512!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NexaBridge Office Location"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
