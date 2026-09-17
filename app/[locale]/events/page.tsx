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
            { title: "Ram Navami Annadanam", date: "April 17, 2024", loc: "Kalaburagi City", desc: "Successfully served over 500+ meals to the community during the auspicious occasion of Sri Rama Navami." },
            { title: "Trust Inauguration Ceremony", date: "March 10, 2024", loc: "Main Office, Kalaburagi", desc: "The official opening of Daksh Janaseva Samsthe with local leaders and community members." },
            { title: "Monsoon Tree Plantation", date: "July 05, 2024", loc: "Rural Outskirts", desc: "Planted 100+ saplings to promote environmental sustainability and greener surroundings." }
          ].map((evt, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-64 h-48 bg-gray-200 rounded-xl shrink-0 flex items-center justify-center text-gray-400">
                Event Photo
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{evt.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4 font-medium">
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {evt.date}</span>
                  <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {evt.loc}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{evt.desc}</p>
                <button className="mt-4 text-primary font-bold hover:text-secondary self-start transition-colors">
                  View Event Gallery &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
