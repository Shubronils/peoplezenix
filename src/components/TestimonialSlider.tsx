import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NexaBridge transformed our tech infrastructure. Their team integrated seamlessly and delivered exceptional results within weeks.",
    name: "Sarah Chen",
    role: "CTO, FinFlow",
  },
  {
    quote: "The dedicated developers we hired through NexaBridge have been game-changers. Their expertise in cloud architecture saved us months.",
    name: "Marcus Rodriguez",
    role: "VP Engineering, DataScale",
  },
  {
    quote: "Outstanding IT consulting. They identified critical bottlenecks and implemented solutions that improved our system performance by 300%.",
    name: "Priya Sharma",
    role: "Director of IT, MedConnect",
  },
  {
    quote: "Their staff augmentation model is the best we've experienced. Quality talent, fast onboarding, and zero hassle.",
    name: "James O'Brien",
    role: "CEO, BuildRight",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto">
      <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
      <div className="relative h-48 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-6 italic">
              "{testimonials[current].quote}"
            </p>
            <p className="font-heading font-semibold text-foreground">{testimonials[current].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
