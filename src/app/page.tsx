'use client';

import WaitlistForm from '../../components/WaitlistForm';

export default function Home() {
  const scrollToForm = () => {
    const formElement = document.getElementById('waitlist-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Coach Fred
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto">
            AI Agent for Accountability Enforcement
          </p>
          
          <div id="waitlist-form" className="flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Plan</h3>
              <p className="text-gray-600">Set your goals and create actionable plans with AI guidance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Enforce</h3>
              <p className="text-gray-600">AI actively blocks distractions and keeps you on track</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Improve</h3>
              <p className="text-gray-600">Get feedback and optimize your approach for better results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                ↺
              </div>
              <h3 className="font-semibold text-lg mb-2">Repeat</h3>
              <p className="text-gray-600">Build sustainable habits through consistent improvement cycles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Info Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Launching in San Francisco
          </h2>
          <p className="text-xl mb-8">
            Be part of the first wave. Limited early access cohorts of 50–200 users.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Join the Waitlist
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold text-xl mb-4">AI Accountability Trainer</h3>
              <p className="text-gray-400">The future of personal accountability</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">info@aiaccountability.com</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Accountability Trainer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
