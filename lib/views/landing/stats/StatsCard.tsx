import React from "react";

interface StatsCardProps {
  title: string;
  count: string;
}

const StatsCard = ({ title, count }: StatsCardProps) => {
  return (
    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
      <dt className="order-2 mt-2 text-lg/6 font-medium text-gray-500">
        {title}
      </dt>
      <dd className="order-1 text-4xl font-bold tracking-tight text-primary-600">
        {count}
      </dd>
    </div>
  );
};

export default StatsCard;
