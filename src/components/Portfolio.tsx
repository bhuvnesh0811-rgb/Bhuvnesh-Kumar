import { motion } from 'motion/react';

const portfolioSections = [
  {
    category: "Sports",
    items: [
      { img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop", title: "RPL - Jodhpur & Jaipur 23'" },
      { img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop", title: "CCL 22' - Celebrity Cricket league" },
      { img: "https://images.unsplash.com/photo-1587280501635-a19207e78ee2?q=80&w=800&auto=format&fit=crop", title: "NPL - Nepal T20 league 22'-23'" },
      { img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=800&auto=format&fit=crop", title: "MPL 23' - Maharastra" },
      { img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop", title: "Hero super cup by JIO in Kozhikode and Manjeri 23'" },
      { img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop", title: "Yonex badminton Sunrise india open 23'" },
      { img: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=800&auto=format&fit=crop", title: "Hockey World Cup opening ceremony" },
      { img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop", title: "FIFA U17 womens world cup 22'" },
      { img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop", title: "Karate tournament in Lucknow" },
    ]
  },
  {
    category: "Events",
    items: [
      { img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=800&auto=format&fit=crop", title: "5G network launch for JIO, delhi 22'" },
      { img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop", title: "Infosys 40 year's celebration in Bangalore 23'" },
      { img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop", title: "International film festival of india 21' and 22'" },
      { img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop", title: "Defense Expo 22'" },
      { img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop", title: "Mission Pani & Sanjeevani - CNBC" },
      { img: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=800&auto=format&fit=crop", title: "Nothing 2 Phone Launch" },
    ]
  },
  {
    category: "Spiritual Events",
    items: [
      { img: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=800&auto=format&fit=crop", title: "Spiritual Gathering Broadcast" },
      { img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop", title: "Grand Temple Event Coverage" },
      { img: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800&auto=format&fit=crop", title: "Live Aarti Telecast" },
    ]
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Our Project Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our Signature Aesthetic
          </p>
        </div>

        <div className="space-y-24">
          {portfolioSections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="text-5xl md:text-6xl font-bold text-center mb-12 font-display">{section.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group flex flex-col"
                  >
                    <div className="relative overflow-hidden aspect-video bg-dark-surface mb-4">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h4 className="text-gray-300 text-sm font-medium text-center">
                      {item.title}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
