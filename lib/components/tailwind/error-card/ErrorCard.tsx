import React from "react";
import TailWindButton, { TailWindButtonProps } from "../Button";

interface TailwindErrorCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  btnProps?: TailWindButtonProps;
}

const TailwindErrorCard = ({
  title,
  icon,
  description,
  btnProps,
}: TailwindErrorCardProps) => {
  return (
    <div className="mx-auto  max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none min-h-96 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6 space-y-6">
        {icon && <div className="flex justify-center">{icon}</div>}

        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
        <div className="space-y-3">
          <TailWindButton label="Try Again" {...btnProps} />
        </div>
      </div>
    </div>
  );
};

export default TailwindErrorCard;
