import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");
  const tabContent = {
    story: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
      </>
    ),
    mission: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our mission is to revolutionize the logistics industry by providing
          seamless, reliable, and customer-centric delivery services. We strive
          to connect people and businesses across the country with speed,
          safety, and transparency.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We believe in building trust through consistent service excellence,
          innovative technology, and a dedicated team that works around the
          clock to ensure every parcel reaches its destination safely and on
          time.
        </p>
      </>
    ),
    success: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Over the years, we have successfully delivered millions of parcels
          across the country, earning the trust of thousands of customers and
          businesses. Our success is measured not just in numbers, but in the
          smiles we bring to our customers' faces.
        </p>
        <p className="text-gray-700 leading-relaxed">
          From small startups to large enterprises, we have been the backbone of
          countless businesses, helping them grow by ensuring their products
          reach customers efficiently and securely.
        </p>
      </>
    ),
    team: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our team is the heart of our operations. From dedicated delivery
          personnel to skilled logistics coordinators and customer support
          representatives, every member plays a crucial role in making our
          service exceptional.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We invest in training, technology, and a positive work culture to
          ensure our team is always ready to serve you better. Together, we work
          towards one common goal — delivering happiness, one parcel at a time.
        </p>
      </>
    ),
  };

  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex gap-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab("story")}
              className={`pb-4 text-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === "story"
                  ? "text-yellow-700 border-b-2 border-yellow-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Story
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`pb-4 text-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === "mission"
                  ? "text-yellow-700 border-b-2 border-yellow-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Mission
            </button>
            <button
              onClick={() => setActiveTab("success")}
              className={`pb-4 text-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === "success"
                  ? "text-yellow-700 border-b-2 border-yellow-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Success
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`pb-4 text-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === "team"
                  ? "text-yellow-700 border-b-2 border-yellow-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Team & Others
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-fadeIn">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};

export default About;
