import { motion } from 'motion/react';

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your vision and business goals." },
  { num: "02", title: "Planning", desc: "Developing creative concepts and production strategy." },
  { num: "03", title: "Production", desc: "Professional photography, videography, and content creation." },
  { num: "04", title: "Editing", desc: "Refining visuals with advanced editing and motion graphics." },
  { num: "05", title: "Delivery", desc: "Providing optimized files ready for print, web, and social media." }
];

export function Process() {
  return (
    <section className="py-24 bg-dark-surface border-y border-dark-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A streamlined approach to ensure every project is executed flawlessly from concept to final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-display font-bold text-dark-border mb-4">{step.num}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              
              {/* Connector Line (visible on large screens) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-[1px] bg-dark-border -z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
