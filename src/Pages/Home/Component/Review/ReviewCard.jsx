import React from "react";

const ReviewCard = ({ review }) => {
  const {userName,review:rev, user_photoURL} = review;
  return (
    <div className="  flex items-center justify-center p-4">
      <div className=" rounded-3xl p-8 md:p-12 shadow-lg">
        {/* Quote Icon */}
        <div className="text-6xl text-teal-200 mb-6 font-serif ">
          "
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          {rev}
        </p>

        {/* Dashed Divider */}
        <div className="border-t-2 border-dashed border-gray-300 mb-6"></div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-12 h-12  flex-shrink-0">
            <img className="rounded-full" src={user_photoURL} alt="" />
            
          </div>

          {/* Name and Title */}
          <div>
            <h3 className="text-lg font-bold text-gray-900">{userName} </h3>
            <p className="text-sm text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
