import React from "react";

interface OrderListItemActionsProps {
  product: any;
}

const OrderListItemActions = ({ product }: OrderListItemActionsProps) => {
  return (
    <div className="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:ml-4 sm:mt-0 sm:border-none sm:pt-0">
      <div className="flex flex-1 justify-center">
        <a
          href={product.href}
          className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
        >
          View product
        </a>
      </div>
      <div className="flex flex-1 justify-center pl-4">
        <a
          href="#"
          className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
        >
          Buy again
        </a>
      </div>
    </div>
  );
};

export default OrderListItemActions;
