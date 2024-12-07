import React from "react";

interface ProfileCoverViewProps {
  image: string;
}

const ProfileCoverView = ({ image }: ProfileCoverViewProps) => {
  return (
    <div>
      <img alt="" src={image} className="h-32 w-full object-cover lg:h-48" />
    </div>
  );
};

export default ProfileCoverView;
