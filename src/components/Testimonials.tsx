import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Rounak Broadcasting studio transformed our brand identity with exceptional creativity and professionalism.",
    rating: 5
  },
  {
    text: "Their live broadcasting setup for our annual corporate event was flawless. Highly recommend their services.",
    rating: 5
  },
  {
    text: "The drone videography and editing quality exceeded our expectations. A truly creative team.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-dark-surface p-8 rounded-2xl border border-dark-border relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-dark-border opacity-50" />
              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed font-light italic">
                "{test.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
