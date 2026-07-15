import { motion } from 'motion/react';

const stats = [
  { value: "850+", label: "Projects Completed" },
  { value: "420+", label: "Happy Clients" },
  { value: "6+", label: "Years of Experience" },
  { value: "15", label: "Creative Professionals" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "35+", label: "Brand Collaborations" }
];

export function Stats() {
  return (
    <section className="py-20 bg-primary text-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold font-display mb-2">{stat.value}</div>
              <div className="text-sm font-medium uppercase tracking-wider opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
