import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import img1 from '../assets/images/regenerated_image_1784098528755.jpg';
import img2 from '../assets/images/regenerated_image_1784098531327.jpg';
import img3 from '../assets/images/regenerated_image_1784098533576.jpg';
import img4 from '../assets/images/regenerated_image_1784098536128.jpg';

const reasons = [
  "Experienced Creative Professionals",
  "Latest Camera & Editing Equipment",
  "Cinematic Storytelling",
  "Affordable Packages",
  "Fast Project Delivery",
  "Personalized Creative Solutions",
  "Professional Client Support",
  "End-to-End Production"
];

export function About() {
  return (
    <section id="about" className="py-24 bg-dark-surface border-y border-dark-border relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Ideas Into <br className="hidden md:block"/>
              <span className="text-primary">Memorable Visuals</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Rounak Broadcasting Studio is a full-service multimedia production company dedicated to creating with creativity and purpose. Established in 2019, our mission is to transform ideas into memorable visual experiences.
            </p>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Whether it's a corporate film, a live broadcast of a major event, or a commercial advertisement, we bring technical excellence and cinematic storytelling to every project.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-gray-200">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <img 
                src={img1} 
                alt="Camera Operator" 
                className="w-full h-64 object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src={img3} 
                alt="Live Event" 
                className="w-full h-48 object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <img 
                src={img2} 
                alt="Editing Setup" 
                className="w-full h-48 object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src={img4} 
                alt="Studio Gear" 
                className="w-full h-64 object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
