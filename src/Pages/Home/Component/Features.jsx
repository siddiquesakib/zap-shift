import React from "react";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="60" y="80" width="80" height="60" rx="4" />
          <circle cx="100" cy="110" r="15" />
          <path d="M100 95 L100 110 L110 110" strokeLinecap="round" />
          <circle cx="140" cy="60" r="20" />
          <path d="M140 50 L140 60 M140 60 L150 60" strokeLinecap="round" />
          <path d="M40 100 L50 100 M50 100 L50 120" strokeLinecap="round" />
          <circle cx="50" cy="130" r="8" />
          <rect x="20" y="40" width="40" height="30" rx="2" />
          <path d="M30 50 L35 55 L50 40" strokeLinecap="round" />
          <circle cx="160" cy="120" r="8" />
          <path d="M165 115 L170 120 L165 125" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="70" y="90" width="60" height="50" rx="4" />
          <path
            d="M80 100 L90 90 L110 110 L120 100"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="60" cy="60" r="25" />
          <path d="M60 45 L60 60 M60 60 L70 55" strokeLinecap="round" />
          <ellipse
            cx="100"
            cy="70"
            rx="15"
            ry="10"
            transform="rotate(-20 100 70)"
          />
          <path d="M140 80 Q150 85 145 95" strokeLinecap="round" />
          <circle cx="145" cy="70" r="3" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="70" y="90" width="60" height="50" rx="4" />
          <circle cx="60" cy="60" r="25" />
          <path d="M60 45 L60 60" strokeLinecap="round" />
          <path d="M50 65 Q45 70 50 75" strokeLinecap="round" />
          <path d="M70 65 Q75 70 70 75" strokeLinecap="round" />
          <ellipse
            cx="100"
            cy="70"
            rx="15"
            ry="10"
            transform="rotate(-20 100 70)"
          />
          <path d="M140 80 Q150 85 145 95 T140 110" strokeLinecap="round" />
          <circle cx="145" cy="70" r="3" fill="currentColor" />
          <path d="M135 100 L145 95" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen mt-12  py-16 px-8">
      <div className="max-w-6xl mx-auto  space-y-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-2xl p-8  border border-gray-400 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="w-48 h-48 flex-shrink-0 text-teal-800">
              {feature.icon}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-32 bg-gray-300 border-l-2 border-dashed border-gray-400"></div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-teal-900 mb-4">
                {feature.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
