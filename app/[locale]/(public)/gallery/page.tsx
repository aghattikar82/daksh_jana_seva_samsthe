import { Image as ImageIcon, Video } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-primary-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200 px-4">
          Glimpses of our community work, social gatherings, and events.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-8">
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-10">
          <button className="flex items-center space-x-2 bg-primary text-white px-6 py-2 rounded-full font-bold shadow-md">
            <ImageIcon className="w-5 h-5" />
            <span>Photos</span>
          </button>
          <button className="flex items-center space-x-2 bg-white text-gray-600 px-6 py-2 rounded-full font-bold shadow-sm hover:bg-gray-50 transition-colors">
            <Video className="w-5 h-5" />
            <span>Videos</span>
          </button>
        </div>

        {/* Attractive Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {[
            { id: 1, eventSlug: "annadanam", src: "https://images.unsplash.com/photo-1593113514676-5fa0f455c1b5?q=80&w=800&auto=format&fit=crop", alt: "Food Distribution", tag: "Ram Navami Annadanam", height: "h-[300px]" },
            { id: 2, eventSlug: "education", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", alt: "Education Support", tag: "Education Program", height: "h-[450px]" },
            { id: 3, eventSlug: "inauguration", src: "https://images.unsplash.com/photo-1488521281863-3457698cf4b1?q=80&w=800&auto=format&fit=crop", alt: "Happy Children", tag: "Trust Inauguration", height: "h-[250px]" },
            { id: 4, eventSlug: "tree-plantation", src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop", alt: "Tree Plantation", tag: "Monsoon Tree Plantation", height: "h-[400px]" },
            { id: 5, eventSlug: "health", src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop", alt: "Health Camp", tag: "Rural Health Camp", height: "h-[350px]" },
            { id: 6, eventSlug: "inauguration", src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop", alt: "Community Gathering", tag: "Trust Inauguration", height: "h-[280px]" }
          ].map((img) => (
            <a 
              key={img.id} 
              href={`/events/${img.eventSlug}`}
              className={`block relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 mb-6 w-full ${img.height}`}
            >
              <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
              {/* Beautiful Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Event Tag Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-2 shadow-md">
                  {img.tag}
                </span>
                <p className="text-white font-bold text-lg leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  View Full Event &rarr;
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
