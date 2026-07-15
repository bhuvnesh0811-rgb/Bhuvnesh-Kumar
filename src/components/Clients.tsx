import { motion } from 'motion/react';

const clients = [
  "BrightEdge Technologies",
  "Urban Café",
  "Skyline Builders",
  "Nova Education",
  "GreenLeaf Organics",
  "Elite Fitness",
  "Aura Fashion",
  "Horizon Hotels"
];

export function Clients() {
  return (
    <section className="py-24 bg-dark-surface border-t border-dark-border overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <p className="text-center text-sm font-medium tracking-widest uppercase text-gray-500 mb-10">
          Trusted by Innovative Brands
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="text-xl md:text-2xl font-bold font-display text-gray-400 hover:text-white transition-colors cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
