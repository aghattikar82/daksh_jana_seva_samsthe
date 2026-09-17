import { Heart, QrCode, Building2 } from 'lucide-react';

export default function DonatePage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-primary-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Make a Donation</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200 px-4">
          Every contribution makes a meaningful difference in someone&apos;s life.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-[-40px] max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Support Our Cause</h2>
            <p className="text-gray-600 mt-2">100% of your donation goes directly towards our social initiatives like Annadanam and Education Support.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* UPI Section */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center flex flex-col items-center justify-center">
              <QrCode className="w-8 h-8 text-gray-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-6">Scan to Pay (UPI)</h3>
              <div className="w-48 h-48 bg-white border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 mb-4">
                [ UPI QR CODE ]
              </div>
              <p className="font-bold text-primary">dakshjanaseva@upi</p>
            </div>

            {/* Bank Details */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="flex justify-center mb-4">
                <Building2 className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Bank Transfer</h3>
              
              <div className="space-y-4 text-left">
                <div>
                  <p className="text-sm text-gray-500 font-medium">Account Name</p>
                  <p className="font-bold text-gray-800">Daksh Janaseva Samsthe (R)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Account Number</p>
                  <p className="font-bold text-gray-800">XXXXXXXXXXXX1234</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">IFSC Code</p>
                  <p className="font-bold text-gray-800">BANK0001234</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Bank & Branch</p>
                  <p className="font-bold text-gray-800">State Bank of India, Kalaburagi</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
