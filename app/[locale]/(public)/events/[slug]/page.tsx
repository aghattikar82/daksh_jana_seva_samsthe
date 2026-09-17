import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function generateStaticParams() {
  return [
    { slug: 'annadanam' },
    { slug: 'inauguration' },
    { slug: 'tree-plantation' },
    { slug: 'education' },
    { slug: 'health' }
  ];
}

const eventsData: Record<string, any> = {
  'annadanam': {
    title: "Ram Navami Annadanam",
    date: "April 17, 2024",
    loc: "Kalaburagi City",
    desc: "Successfully served over 500+ meals to the community during the auspicious occasion of Sri Rama Navami. Volunteers gathered early morning to prepare fresh, nutritious food.",
    heroImg: "https://images.unsplash.com/photo-1593113514676-5fa0f455c1b5?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1593113514676-5fa0f455c1b5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop",
    ]
  },
  'inauguration': {
    title: "Trust Inauguration Ceremony",
    date: "March 10, 2024",
    loc: "Main Office, Kalaburagi",
    desc: "The official opening of Daksh Janaseva Samsthe with local leaders and community members. A milestone day for our entire team.",
    heroImg: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop",
    ]
  },
  'tree-plantation': {
    title: "Monsoon Tree Plantation",
    date: "July 05, 2024",
    loc: "Rural Outskirts",
    desc: "Planted 100+ saplings to promote environmental sustainability and greener surroundings. Local school children joined our volunteers.",
    heroImg: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    ]
  },
  'education': {
    title: "Education Support Program",
    date: "Ongoing",
    loc: "Various Schools",
    desc: "Providing textbooks, stationery, and scholarships to underprivileged students.",
    heroImg: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    ]
  },
  'health': {
    title: "Rural Health Camp",
    date: "Ongoing",
    loc: "Rural Villages",
    desc: "Free medical checkups and medicine distribution for elderly and children.",
    heroImg: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop",
    ]
  }
};

import { unstable_setRequestLocale } from 'next-intl/server';

export default function EventDetailPage({ params }: { params: { locale: string, slug: string } }) {
  unstable_setRequestLocale(params.locale);
  const event = eventsData[params.slug] || eventsData['annadanam'];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Hero Header */}
      <div className="relative h-[400px] w-full bg-black">
        <img src={event.heroImg} alt={event.title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 container mx-auto">
          <Link href="/events" className="inline-flex items-center text-white/80 hover:text-white mb-6 font-medium transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to All Events
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">{event.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-white/90 font-medium">
            <span className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-primary" /> {event.date}</span>
            <span className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-primary" /> {event.loc}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-5xl">
        {/* Description Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About this Event</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {event.desc}
          </p>
        </div>

        {/* Dedicated Event Gallery */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          Event Gallery <span className="ml-4 text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">{event.gallery.length} Photos</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {event.gallery.map((img: string, i: number) => (
            <div key={i} className="bg-gray-200 rounded-2xl aspect-square flex items-center justify-center overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-xl transition-all">
              <img src={img} alt={`${event.title} Photo ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
