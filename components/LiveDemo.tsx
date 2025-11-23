import React from 'react';
import { Smartphone, ArrowRight } from 'lucide-react';

const LiveDemo: React.FC = () => {
  return (
    <section id="demo" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass-panel rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-white/10 shadow-2xl">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-neon text-sm font-bold mb-6 border border-white/5">
              <Smartphone className="w-4 h-4" />
              <span>Live Demo Available</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Try EventPulse now.
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Experience the future of event booking. Scan the QR code to start a conversation with our AI agent on WhatsApp. No app download required.
            </p>
            <ul className="space-y-4 mb-8 text-left inline-block">
              {['Real-time availability checks', 'Instant Stripe checkout', 'Personalized recommendations'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-neon/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* QR Code Container */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative bg-white p-6 rounded-3xl rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
               {/* Generic QR Code pointing to WhatsApp URL scheme (example) */}
               <img 
                 src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://wa.me/15550123456&color=000000&bgcolor=FFFFFF" 
                 alt="Scan to chat on WhatsApp" 
                 className="w-64 h-64 md:w-72 md:h-72 object-contain"
               />
               <div className="mt-4 flex items-center justify-center gap-2 text-gray-900 font-bold">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6" alt="WhatsApp Logo"/>
                  <span>Scan to Chat</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;