"use client";
import React from "react";
import { useParams } from "next/navigation";

const HomePage = () => {
  const params = useParams();
  const tenant = params.subdomain;
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center mb-4 text-black">
        {tenant ? `Welcome to ${tenant}` : "Welcome"}
      </h1>
    </div>
  );
};

export default HomePage;
