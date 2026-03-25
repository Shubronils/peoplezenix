import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection = ({ title, description, buttonText, buttonLink }: CTASectionProps) => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">{description}</p>
          <Link
            to={buttonLink}
            className="inline-flex px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow"
          >
            {buttonText}
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
