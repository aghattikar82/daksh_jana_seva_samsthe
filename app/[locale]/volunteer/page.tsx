import { Users, HandHeart } from 'lucide-react';

export default function VolunteerPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-primary-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Become a Volunteer</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200 px-4">
          Join our mission to uplift the community. Your time and skills can change lives.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-[-40px] max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Info Side */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-center">
            <HandHeart className="w-16 h-16 text-secondary mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Volunteer With Us?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              As a volunteer, you become the backbone of our operations. Whether you are helping distribute food during Annadanam, organizing a health camp, or simply spending time with children, you are making a direct impact in Kalaburagi.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 font-medium"><Users className="w-5 h-5 text-primary mr-3" /> Connect with like-minded individuals</li>
              <li className="flex items-center text-gray-700 font-medium"><Users className="w-5 h-5 text-primary mr-3" /> Gain valuable social work experience</li>
              <li className="flex items-center text-gray-700 font-medium"><Users className="w-5 h-5 text-primary mr-3" /> Certificate of appreciation</li>
            </ul>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Register Now</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary" placeholder="Enter your mobile number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary">
                  <option>Annadanam</option>
                  <option>Education Support</option>
                  <option>Health Camps</option>
                  <option>Tree Plantation</option>
                  <option>Other / General</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <textarea rows={3} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary" placeholder="Tell us a bit about yourself..."></textarea>
              </div>
              <button type="button" className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-full hover:shadow-lg transition-all mt-4">
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
