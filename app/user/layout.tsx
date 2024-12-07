"use client";
import UserSideMenu from "@/lib/components/user-side-menu/UserSideMenu";

interface UserlayoutProps {
  children: React.ReactNode;
}

const Userlayout = ({ children }: UserlayoutProps) => {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-1 lg:flex lg:gap-x-16 lg:px-8">
        <h1 className="sr-only">General Settings</h1>
        <UserSideMenu />
        <div className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20 min-h-screen">
          {children}
        </div>
      </div>
    </>
  );
};

export default Userlayout;
