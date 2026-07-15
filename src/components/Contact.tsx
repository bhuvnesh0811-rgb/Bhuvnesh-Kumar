import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Something <span className="text-primary">Together</span></h2>
            <p className="text-gray-400 mb-12 text-lg">
              Ready to start your next project? Fill out the form and we'll get back to you with a free quote.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dark-surface rounded-full flex items-center justify-center shrink-0 border border-dark-border">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Visit Studio</h4>
                  <p className="text-gray-400">B-52 Vidya vihar Hastal Road,<br/>Uttam Nagar New Delhi - 110059<br/>Near by Brahma Kumari Assaram</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dark-surface rounded-full flex items-center justify-center shrink-0 border border-dark-border">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call / WhatsApp</h4>
                  <p className="text-gray-400">+91 9818296277</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dark-surface rounded-full flex items-center justify-center shrink-0 border border-dark-border">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-400">rajpalb52@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-surface p-8 rounded-2xl border border-dark-border"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" />
                <input type="text" placeholder="Company Name" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" placeholder="Email Address" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select defaultValue="" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white appearance-none">
                  <option value="" disabled>Service Interested In</option>
                  <option value="live">Live Broadcasting</option>
                  <option value="video">Videography</option>
                  <option value="photo">Photography</option>
                  <option value="other">Other Services</option>
                </select>
                <input type="text" placeholder="Estimated Budget" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" />
              </div>

              <input type="date" placeholder="Preferred Project Date" className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-gray-400" />
              
              <textarea placeholder="Message / Project Details" rows={4} className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white resize-none"></textarea>
              
              <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-dark font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
