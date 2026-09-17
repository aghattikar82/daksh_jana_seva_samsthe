import { Calendar, MapPin } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-primary-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Events & Gatherings</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200 px-4">
          Join us in our upcoming social programs and reflect on our past gatherings.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-5xl">
        <h2 className="text-3xl font-bold text-primary mb-8">Past Events</h2>
        
        <div className="space-y-6">
          {[
            { title: "Ram Navami Annadanam", date: "April 17, 2024", loc: "Kalaburagi City", desc: "Successfully served over 500+ meals to the community during the auspicious occasion of Sri Rama Navami.", img: "https://images.unsplash.com/photo-1593113514676-5fa0f455c1b5?q=80&w=800&auto=format&fit=crop" },
            { title: "Trust Inauguration Ceremony", date: "March 10, 2024", loc: "Main Office, Kalaburagi", desc: "The official opening of Daksh Janaseva Samsthe with local leaders and community members.", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop" },
            { title: "Monsoon Tree Plantation", date: "July 05, 2024", loc: "Rural Outskirts", desc: "Planted 100+ saplings to promote environmental sustainability and greener surroundings.", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop" }
          ].map((evt, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
              <div className="w-full md:w-64 h-48 bg-gray-200 rounded-xl shrink-0 overflow-hidden relative">
                <img src={evt.img} alt={evt.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{evt.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4 font-medium">
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {evt.date}</span>
                  <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {evt.loc}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{evt.desc}</p>
                <a href="/gallery" className="mt-4 text-primary font-bold hover:text-secondary self-start transition-colors">
                  View Event Gallery &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
