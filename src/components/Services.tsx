import { motion } from 'motion/react';
import { Camera, Radio, Video, MonitorPlay, Zap, Server } from 'lucide-react';
import img1 from '../assets/images/regenerated_image_1784098538699.jpg';
import img2 from '../assets/images/regenerated_image_1784098540610.jpg';

const services = [
  {
    title: "Live Sports & Entertainment",
    description: "Professional multi-camera broadcasting and streaming for major sports and entertainment events.",
    icon: Camera
  },
  {
    title: "Reality Shows / Events",
    description: "Comprehensive coverage of reality TV and special events, ensuring every moment is captured.",
    icon: Video
  },
  {
    title: "Webcasting / Video Conferencing",
    description: "High-quality virtual meetings and webcasting solutions for global audiences.",
    icon: Radio
  },
  {
    title: "LIVE GFX",
    description: "Dynamic on-screen graphics, lower thirds, and live overlays for broadcast production.",
    icon: Zap
  },
  {
    title: "System Integration",
    description: "End-to-end setup and integration of professional broadcast control rooms and studios.",
    icon: Server
  },
  {
    title: "EVS (Live Replay)",
    description: "Instant replay and live highlight editing systems for sports and fast-paced broadcasts.",
    icon: MonitorPlay
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">OUR SERVICES</h2>
            <p className="text-gray-400 text-lg">
              We provide a range of services related to media and broadcasting. While the specific services we offer may vary depending on our clients' needs, here are some of our core capabilities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{service.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <img 
              src={img1} 
              alt="Live Production" 
              className="w-full h-48 object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
            <img 
              src={img2} 
              alt="Broadcast Camera" 
              className="w-full h-48 object-cover rounded-xl sm:translate-y-8"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
