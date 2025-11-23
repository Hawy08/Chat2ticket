import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, CheckCheck, MoreVertical, Phone, Video, Bot } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  const phrases = [
    "Mood & Vibe",
    "Budget & Price",
    "Live Location",
    "Preferred Activities"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-black">
      
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">IBM Orchestrate Hackathon Submission</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Discover events based on your <br className="hidden md:block" />
          <span 
            key={currentPhraseIndex}
            className="text-neon inline-block animate-fade-in-up"
            style={{ animationDuration: '0.6s' }}
          >
             {phrases[currentPhraseIndex]}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          A proactive event-booking AI agent on WhatsApp. 
          From discovery to booking and curated after-parties, 
          we orchestrate your perfect night out.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button 
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-neon text-black rounded-full font-bold text-lg hover:bg-[#2ebf11] transition-all w-full md:w-auto shadow-[0_0_20px_rgba(57,255,20,0.3)]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all w-full md:w-auto"
          >
            Explore Features
          </button>
        </div>

        {/* WhatsApp Mockup */}
        <div className="mt-20 relative mx-auto max-w-md animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="bg-[#0b141a] rounded-[30px] border-[8px] border-[#1f2937] shadow-2xl overflow-hidden relative">
            
            {/* WhatsApp Status Bar (Fake) */}
            <div className="bg-[#202c33] h-6 w-full flex items-center justify-between px-4 pt-1">
                <span className="text-[10px] text-gray-400 font-mono">9:41</span>
                <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-gray-600/50"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-600/50"></div>
                </div>
            </div>

            {/* WhatsApp Header */}
            <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3 border-b border-gray-700/30 cursor-pointer hover:bg-[#2a3942] transition-colors">
              <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-neon flex items-center justify-center">
                    <Bot className="text-black w-6 h-6" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#00a884] border-2 border-[#202c33] rounded-full"></div>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-[#e9edef] font-semibold text-sm">EventPulse AI</h3>
                <p className="text-[#8696a0] text-xs truncate">Business Account</p>
              </div>
               <div className="flex gap-5 text-[#8696a0]">
                  <Video className="w-5 h-5" />
                  <Phone className="w-5 h-5" />
                  <MoreVertical className="w-5 h-5" />
               </div>
            </div>

            {/* Chat Area */}
            <div className="p-4 min-h-[400px] bg-[#0b141a] bg-opacity-95 relative flex flex-col gap-4" style={{ backgroundImage: 'radial-gradient(#2a3942 1px, transparent 0)', backgroundSize: '20px 20px' }}>
              
              {/* Encryption Notice */}
              <div className="flex justify-center mb-2">
                  <div className="bg-[#1f2c34] text-[#ffeba7] text-[10px] px-3 py-1 rounded-lg text-center shadow-sm max-w-[90%]">
                      Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.
                  </div>
              </div>

              {/* User Message (Right) */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-[#e9edef] rounded-lg rounded-tr-none px-3 py-2 max-w-[85%] shadow-sm relative group">
                   <p className="text-sm leading-snug">I'm feeling energetic but I only have $50. Any cool techno gigs in Brooklyn tonight? ⚡️</p>
                   <div className="flex justify-end items-center gap-1 mt-1">
                     <span className="text-[10px] text-[#8696a0]">20:42</span>
                     <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
                   </div>
                </div>
              </div>

              {/* AI Message (Left) */}
              <div className="flex justify-start">
                 <div className="bg-[#202c33] text-[#e9edef] rounded-lg rounded-tl-none px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-sm mb-2 leading-snug">I found a match! 🎧 <strong>Underground Bass</strong> at The Warehouse fits your vibe. It matches your budget ($35) and starts at 10 PM.</p>
                    
                    {/* Rich Media / Interactive Message Mockup */}
                    <div className="bg-[#1d282f] rounded-lg mt-2 overflow-hidden border border-white/5">
                       <div className="h-24 w-full bg-[#2a3942] relative flex items-center justify-center border-b border-white/5">
                           <div className="text-white/20 text-4xl font-bold">EVENT</div>
                           <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">
                             Today, 10:00 PM
                           </div>
                       </div>
                       <div className="p-3">
                          <h4 className="font-bold text-sm text-[#e9edef]">Underground Bass</h4>
                          <p className="text-xs text-[#8696a0]">The Warehouse, Brooklyn</p>
                          <p className="text-xs text-[#25D366] mt-1 font-medium">Price: $35.00</p>
                       </div>
                       
                       {/* Interactive Buttons */}
                       <div className="border-t border-[#2a3942] divide-y divide-[#2a3942]">
                           <button className="w-full py-3 text-[#53bdeb] text-sm font-medium hover:bg-[#2a3942] transition-colors flex items-center justify-center gap-2">
                               <CheckCheck className="w-4 h-4" /> Book with Stripe
                           </button>
                           <button className="w-full py-3 text-[#53bdeb] text-sm font-medium hover:bg-[#2a3942] transition-colors">
                               See More Details
                           </button>
                       </div>
                    </div>

                    <div className="flex justify-end items-center gap-1 mt-1">
                       <span className="text-[10px] text-[#8696a0]">20:42</span>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Input Area Mockup */}
            <div className="bg-[#202c33] px-2 py-2 flex items-center gap-2">
                 <div className="p-2 rounded-full text-[#8696a0] hover:text-gray-300">
                     <span className="text-xl">+</span>
                 </div>
                 <div className="flex-1 bg-[#2a3942] rounded-lg px-4 py-2 text-sm text-[#8696a0] flex justify-between items-center">
                    <span>Type a message</span>
                 </div>
                 <div className="p-2 rounded-full bg-[#00a884] text-white flex items-center justify-center w-10 h-10">
                    <ArrowRight className="w-5 h-5" />
                 </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;