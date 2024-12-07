import React from "react";
import Link from "next/link";

interface TwMegaMenuListProps {
  menuItem: any;
}

const TwMegaMenuListItem = ({ menuItem }: TwMegaMenuListProps) => {
  return (
    <div key={menuItem.name}>
      <p
        id={`${menuItem.name}-heading`}
        className="font-semibold text-lg text-gray-900"
      >
        {menuItem.name}
      </p>
      <ul
        role="list"
        aria-labelledby={`${menuItem.name}-heading`}
        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
      >
        {menuItem.items.map((item: any) => (
          <li key={item.name} className="flex">
            <Link href={item.href} className="hover:text-gray-800 text-sm">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TwMegaMenuListItem;
