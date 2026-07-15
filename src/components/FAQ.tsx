import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Depending on the scope, projects usually take between 3 days and 4 weeks."
  },
  {
    q: "Do you travel for shoots?",
    a: "Yes, we provide services across India."
  },
  {
    q: "Can you manage complete branding?",
    a: "Absolutely. We offer end-to-end branding, design, and multimedia solutions."
  },
  {
    q: "Do you provide drone photography?",
    a: "Yes, licensed drone photography and videography are available."
  },
  {
    q: "What industries do you work with?",
    a: "Corporate, education, healthcare, hospitality, fashion, real estate, startups, restaurants, manufacturing, and e-commerce."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-dark border-t border-dark-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-dark-border rounded-xl bg-dark-surface overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                {openIdx === idx ? (
                  <Minus className="w-5 h-5 text-primary shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>
              
              {openIdx === idx && (
                <div className="px-6 pb-6 text-gray-400">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
