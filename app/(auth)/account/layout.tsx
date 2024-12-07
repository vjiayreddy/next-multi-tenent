import React from "react";

interface AccountlayoutProps {
  children: React.ReactNode;
  root: React.ReactNode;
}

const Accountlayout = ({ children, root }: AccountlayoutProps) => {
  return (
    <div className="flex min-h-full flex-1 bg-slate-50 flex-col justify-center py-12 sm:px-6 lg:px-8">
      {children}
      {root}
    </div>
  );
};

export default Accountlayout;
