import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ],
  Services: [
    { label: "IT Consulting", path: "/services" },
    { label: "Staff Augmentation", path: "/services" },
    { label: "Cloud Services", path: "/services" },
    { label: "Web & Mobile Dev", path: "/services" },
  ],
  Resources: [
    { label: "Hire Developers", path: "/hire" },
    { label: "Case Studies", path: "#" },
    { label: "Blog", path: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground text-sm">N</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                Nexa<span className="text-gradient">Bridge</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Empowering businesses with world-class IT consulting, staff augmentation, and custom development solutions.
            </p>
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Row */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> hello@nexabridge.com</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +1 (555) 123-4567</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> San Francisco, CA</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 NexaBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
