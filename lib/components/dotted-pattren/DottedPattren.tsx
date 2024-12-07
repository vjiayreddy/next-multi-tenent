import React from "react";
import colors from "tailwindcss/colors";

interface DotttedPattrenProps {
  colorCode?: string;
}

const DottedPattren = ({
  colorCode = colors.yellow[600],
}: DotttedPattrenProps) => {
  return (
    <svg
      width={93}
      height={93}
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2.5" cy="2.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="2.5" cy="24.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="2.5" cy="46.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="2.5" cy="68.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="2.5" cy="90.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="24.5" cy="2.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="24.5" cy="24.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="24.5" cy="46.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="24.5" cy="68.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="24.5" cy="90.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="46.5" cy="2.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="46.5" cy="24.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="46.5" cy="46.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="46.5" cy="68.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="46.5" cy="90.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="68.5" cy="2.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="68.5" cy="24.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="68.5" cy="46.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="68.5" cy="68.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="68.5" cy="90.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="90.5" cy="2.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="90.5" cy="24.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="90.5" cy="46.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="90.5" cy="68.5" r="2.5" fill={`${colorCode}`} />
      <circle cx="90.5" cy="90.5" r="2.5" fill={`${colorCode}`} />
    </svg>
  );
};

export default DottedPattren;
