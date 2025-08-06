import React from 'react';

const ProfileCard = ({ username, profileImage, videoSrc, instagramLink }) => {
  const handleFollowClick = () => {
    window.open(instagramLink, '_blank');
  };

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg group">
      {/* Video */}
      <video
        src={videoSrc}
        loop
        muted
        autoPlay
        playsInline
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Bottom bar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-sm bg-black/50 backdrop-blur-md px-2 py-2 rounded-full flex items-center justify-between">
  {/* Profile Image + Username */}
  <div className="flex items-center gap-1">
    <img
      src={profileImage}
      alt="profile"
      className="w-9 h-9 rounded-full border-2 border-white object-cover"
    />
    <span className="text-white text-sm font-medium">@{username}</span>
  </div>

  {/* Follow Button */}
  <button
    onClick={handleFollowClick}
    className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-full hover:bg-gray-200 transition"
  >
    Follow
  </button>
</div>

    </div>
  );
};

export default ProfileCard;
