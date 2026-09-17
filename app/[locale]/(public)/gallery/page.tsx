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
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-200 rounded-xl aspect-square flex items-center justify-center overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors"></div>
              <ImageIcon className="w-12 h-12 text-gray-400 opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
