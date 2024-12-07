import React from "react";

interface DataItemEntityProps {
  title: string;
  data: string;
}

const ProfileDataEntity = ({ title, data }: DataItemEntityProps) => {
  return (
    <div className="sm:col-span-1">
      <dt className="text-sm font-medium text-gray-500">{title}</dt>
      <dd className="mt-1 text-sm text-gray-900">{data}</dd>
    </div>
  );
};

export default ProfileDataEntity;
