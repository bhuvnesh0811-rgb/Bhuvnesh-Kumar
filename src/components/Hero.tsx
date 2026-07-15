import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark z-10" />
        <img 
          src="https://images.unsplash.com/photo-1605370216482-1dfdfdf4b87c?q=80&w=2940&auto=format&fit=crop" 
          alt="Studio Setup" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-7xl">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-surface border border-dark-border mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium tracking-wide uppercase text-gray-300">Rounak Broadcasting Studio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 flex flex-col items-start gap-4">
              <span>Creative Multimedia</span>
              <span className="bg-primary text-dark px-4 py-2 inline-block rounded-sm">Solutions for Modern Brands</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              From Broadcasting to Live streaming for event coverage, we help businesses, creators, and organizations tell their stories through high-quality visual content.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-dark px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#portfolio" 
                className="inline-flex items-center gap-2 bg-dark-surface hover:bg-dark-border border border-dark-border text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
