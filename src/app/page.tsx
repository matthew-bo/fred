'use client';

import WaitlistForm from '../../components/WaitlistForm';

export default function Home() {

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

      {/* Why It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Real Accountability. Real Results.
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Unlike other apps that rely on willpower, Coach Fred uses advanced enforcement techniques 
            that make procrastination impossible and success inevitable.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">🚫</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Digital Lockdown</h3>
              <p className="text-gray-600">
                Automatically closes distracting apps and websites on your computer. Opens specialized lockdown browser 
                that only allows work-related sites. Blocks social media apps across all your devices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">🏠</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Smart Home Enforcement</h3>
              <p className="text-gray-600">
                Connects with IoT devices in your home. Locks your fridge when you should be working. 
                Makes lights flash when you&apos;re off-task. Controls entertainment systems to eliminate distractions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">📱</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Aggressive Motivation</h3>
              <p className="text-gray-600">
                Sends spam calls and texts when you&apos;re procrastinating. Donates to charities you oppose. 
                The AI learns and adapts, becoming more creative and persistent with each missed goal.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">📸</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Proof-of-Work Verification</h3>
              <p className="text-gray-600">
                Upload photos or videos to prove task completion. GPS tracking verifies your location. 
                AI analyzes your proof to ensure you&apos;re not cheating the system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">🧠</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Adaptive Intelligence</h3>
              <p className="text-gray-600">
                Machine learning algorithms study your behavior patterns. Predicts when you&apos;ll procrastinate 
                and intervenes before it happens. Gets smarter and more effective over time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">No Escape Protocol</h3>
              <p className="text-gray-600">
                Try to quit? The AI posts embarrassing content to your social media and makes charitable donations 
                in your name. The only way out is through completion of your goals.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">⚠️ This Isn&apos;t Your Average Productivity App</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Coach Fred uses cutting-edge technology and psychological pressure to create genuine accountability. 
              It&apos;s designed for people who are serious about change and tired of making excuses. 
              <span className="font-semibold">Are you ready to commit?</span>
            </p>
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
          <p className="text-xl">
            Be part of the first wave. Limited early access cohorts of 50–200 users.
          </p>
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
