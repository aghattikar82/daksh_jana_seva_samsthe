import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-primary-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200 px-4">
          We would love to hear from you. Reach out to us for queries, partnerships, or support.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Office Address</h3>
                <p className="text-gray-600 mt-1 leading-relaxed">
                  Daksh Janaseva Samsthe (R)<br />
                  Main Road, Kalaburagi<br />
                  Karnataka, India - 585101
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Phone & WhatsApp</h3>
                <p className="text-gray-600 mt-1">+91 98765 43210</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Email Address</h3>
                <p className="text-gray-600 mt-1">contact@dakshjanaseva.org</p>
              </div>
            </div>
          </div>

          {/* Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="button" className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-secondary transition-colors">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-bold border border-gray-300 overflow-hidden">
              [ Google Maps Placeholder ]
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
