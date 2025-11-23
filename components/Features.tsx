import React from 'react';

// --- Custom Brand Icons ---

const WatsonIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27Z" stroke="#39FF14" strokeWidth="2" strokeMiterlimit="10"/>
    <path d="M26.5 11.5C24.5 14.5 21 16.5 17 16.5" stroke="#39FF14" strokeWidth="2" strokeMiterlimit="10"/>
    <path d="M5.5 20.5C7.5 17.5 11 15.5 15 15.5" stroke="#39FF14" strokeWidth="2" strokeMiterlimit="10"/>
    <circle cx="16" cy="6.5" r="1.5" fill="#39FF14"/>
    <circle cx="25.5" cy="11.5" r="1.5" fill="#39FF14"/>
    <circle cx="25.5" cy="20.5" r="1.5" fill="#39FF14"/>
    <circle cx="16" cy="25.5" r="1.5" fill="#39FF14"/>
    <circle cx="6.5" cy="20.5" r="1.5" fill="#39FF14"/>
    <circle cx="6.5" cy="11.5" r="1.5" fill="#39FF14"/>
    <path d="M16 16.5V11.5" stroke="#39FF14" strokeWidth="2"/>
  </svg>
);

const StripeIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.55 18.4803C12.55 17.0123 13.832 16.3023 15.66 16.3023C17.204 16.3023 18.91 16.7303 20.128 17.3523L20.13 13.5143C18.976 13.0063 17.56 12.7343 16.076 12.7343C12.014 12.7343 9.20401 14.7683 9.20401 18.3483C9.20401 23.2703 15.92 23.0963 15.92 25.5423C15.92 26.4763 15.042 27.0583 13.86 27.0583C12.086 27.0583 10.316 26.3343 8.80001 25.5443L8.80002 29.4683C10.302 30.1643 12.16 30.5123 13.85 30.5123C18.222 30.5123 20.76 28.4043 20.76 24.9503C20.76 19.7643 12.55 20.2003 12.55 18.4803ZM15.932 5.12427C17.426 5.12427 18.78 5.38427 20.13 5.83427L20.13 1.96827C18.792 1.55827 17.312 1.33427 15.826 1.33427C11.968 1.33427 9.20401 2.98627 9.20401 6.50827L9.20402 10.3343C11.326 10.1303 13.544 10.0283 15.778 10.0283L20.13 10.0283L20.13 6.92227C20.13 5.74227 18.284 5.12427 15.932 5.12427Z" fill="#121212"/>
  </svg>
);

const SpotifyIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#1DB954"/>
    <path d="M23.2 20.4C23 20.7 22.6 20.8 22.3 20.6C19.4 18.9 15.8 18.5 11.5 19.4C11.1 19.5 10.8 19.2 10.7 18.9C10.6 18.5 10.9 18.2 11.2 18.1C15.9 17.1 19.9 17.5 23.1 19.5C23.3 19.6 23.4 20.1 23.2 20.4ZM24.4 16.7C24.1 17.1 23.6 17.2 23.2 17C20.1 15.1 15.4 14.6 11.7 15.7C11.2 15.8 10.7 15.6 10.6 15.1C10.4 14.6 10.7 14.1 11.2 14C15.4 12.7 20.6 13.3 24.2 15.5C24.6 15.7 24.7 16.2 24.4 16.7ZM24.6 12.8C20.7 10.5 13.9 10.3 10.3 11.4C9.7 11.6 9.1 11.2 9 10.7C8.8 10.1 9.2 9.5 9.8 9.3C14 8.1 21.4 8.3 25.8 11C26.3 11.3 26.5 11.9 26.2 12.4C25.9 12.9 25.1 13.1 24.6 12.8Z" fill="black"/>
  </svg>
);

const MapsIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.5 12.5C24.5 17.5 16.5 26.5 16.5 26.5C16.5 26.5 8.5 17.5 8.5 12.5C8.5 8.08172 12.0817 4.5 16.5 4.5C20.9183 4.5 24.5 8.08172 24.5 12.5Z" fill="white"/>
    <path d="M16.5 5.5C20.366 5.5 23.5 8.63401 23.5 12.5C23.5 16.652 17.214 24.041 16.5 24.914C15.786 24.041 9.5 16.652 9.5 12.5C9.5 8.63401 12.634 5.5 16.5 5.5Z" fill="#34A853"/>
    <path d="M16.5 5.5C20.366 5.5 23.5 8.63401 23.5 12.5C23.5 12.78 23.49 13.06 23.46 13.33C23.16 9.7 20.16 6.8 16.5 6.8C13.99 6.8 11.79 8.08 10.53 10.08C10.82 7.53 12.97 5.5 16.5 5.5Z" fill="#EA4335"/>
    <path d="M16.5 5.5V12.5L11.5 16.5C10.28 15.47 9.5 14.08 9.5 12.5C9.5 12.37 9.51 12.24 9.52 12.11C9.8 13.9 11.35 15.25 13.2 15.25L16.5 12.5V5.5Z" fill="#FBBC04"/>
    <path d="M19.8 13.85L16.5 16.5V24.914C17.214 24.041 23.5 16.652 23.5 12.5C23.5 11.21 23.15 10 22.55 8.95C23.15 10.27 23.06 11.83 22.19 13.08C21.58 13.95 20.76 14.62 19.8 15.05V13.85Z" fill="#1A73E8"/>
    <path d="M16.5 16.5L19.8 13.85V15.05C19.8 15.58 19.62 16.07 19.31 16.48L16.5 18.8V16.5Z" fill="#EA4335"/>
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="7" width="24" height="20" rx="3" fill="white"/>
    <path d="M4 10C4 8.34315 5.34315 7 7 7H25C26.6569 7 28 8.34315 28 10V12H4V10Z" fill="#EA4335"/>
    <path d="M21 5V9" stroke="#EA4335" strokeWidth="2" strokeLinecap="round"/>
    <path d="M11 5V9" stroke="#EA4335" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 17H24" stroke="#4285F4" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 21H24" stroke="#FBBC04" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 17H16" stroke="#4285F4" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 21H16" stroke="#34A853" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="22" cy="19" r="0.5" fill="#4285F4"/>
  </svg>
);

const GmailIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M26.5 6.5H5.5C4.4 6.5 3.5 7.4 3.5 8.5V23.5C3.5 24.6 4.4 25.5 5.5 25.5H26.5C27.6 25.5 28.5 24.6 28.5 23.5V8.5C28.5 7.4 27.6 6.5 26.5 6.5Z" fill="white"/>
     <path d="M26.5 6.5L16 14L5.5 6.5" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
     <path d="M25 24V10" stroke="#EA4335" strokeWidth="2" strokeLinecap="round"/>
     <path d="M7 24V10" stroke="#EA4335" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
    <div className={`w-14 h-14 rounded-2xl bg-[#202020] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <WatsonIcon />,
      title: "Mood-Based AI",
      description: "Our intelligent agent uses IBM Watson to analyze your mood, budget, and location to recommend events that truly resonate with how you feel right now."
    },
    {
      icon: <StripeIcon />,
      title: "In-Chat Payments",
      description: "Secure checkout powered by Stripe. Book your tickets directly within the WhatsApp conversation without ever leaving the app."
    },
    {
      icon: <MapsIcon />,
      title: "Hyper-Local Discovery",
      description: "Share your live location to find hidden gems and pop-up events happening around you within minutes using Google Maps data."
    },
    {
      icon: <SpotifyIcon />,
      title: "Spotify Integration",
      description: "After booking a concert, receive a curated Spotify playlist of the artist so you can learn the lyrics before the show."
    },
    {
      icon: <CalendarIcon />,
      title: "Calendar Auto-Sync",
      description: "Authorize the bot once, and every confirmed booking is automatically added to your Google Calendar with reminders."
    },
    {
      icon: <GmailIcon />,
      title: "Instant Confirmation",
      description: "Receive automated Gmail confirmations with QR tickets and event details immediately after successful payment."
    }
  ];

  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Orchestrating your social life.</h2>
          <p className="text-gray-400 text-lg">
            Powered by IBM Orchestrate, we combine natural language processing with powerful integrations to create a seamless booking experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;