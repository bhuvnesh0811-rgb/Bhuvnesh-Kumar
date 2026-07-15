import { Facebook, Instagram, Linkedin, Youtube, Radio } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-dark-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Radio className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-xl tracking-wide">ROUNAK</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting Stories Through Creativity & Technology. A full-service multimedia production company.
            </p>
            <div className="text-gray-400 text-sm mt-4">
              <p>Mon - Sat: 9:30 AM - 7:00 PM</p>
              <p>Sun: By Appointment Only</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Blog', 'Careers', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {['Photography', 'Videography', 'Graphic Design', 'Video Editing', 'Branding', 'Digital Marketing', 'Website Design'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-dark-surface rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-dark transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-surface rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-surface rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-dark transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-surface rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-dark transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-8">
              <p className="text-xs text-gray-500 mb-2">Website</p>
              <a href="http://www.r.bstudio.in" className="text-primary hover:underline font-medium">www.r.bstudio.in</a>
            </div>
          </div>

        </div>

        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rounak Broadcasting Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
