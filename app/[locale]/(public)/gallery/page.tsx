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

        {/* Masonry Grid Placeholder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { id: 1, src: "https://images.unsplash.com/photo-1593113514676-5fa0f455c1b5?q=80&w=800&auto=format&fit=crop", alt: "Food Distribution" },
            { id: 2, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", alt: "Education Support" },
            { id: 3, src: "https://images.unsplash.com/photo-1488521281863-3457698cf4b1?q=80&w=800&auto=format&fit=crop", alt: "Happy Children" },
            { id: 4, src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop", alt: "Tree Plantation" },
            { id: 5, src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop", alt: "Health Camp" },
            { id: 6, src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop", alt: "Community Gathering" }
          ].map((img) => (
            <div key={img.id} className="bg-gray-200 rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-lg transition-shadow">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
