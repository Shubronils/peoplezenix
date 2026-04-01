import { useState } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  backContent: string;
}

const ServiceCard = ({ icon, title, description, backContent }: ServiceCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-72 cursor-pointer perspective-1000"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl bg-gradient-card border border-border p-6 flex flex-col items-center justify-center gap-4 shadow-card"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <h3 className="font-heading font-semibold text-lg text-foreground text-center">{title}</h3>
          <p className="text-muted-foreground text-sm text-center leading-relaxed">{description}</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl bg-gradient-primary p-6 flex items-center justify-center shadow-card"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-primary-foreground text-sm text-center leading-relaxed font-medium">{backContent}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
