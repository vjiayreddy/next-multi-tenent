"use client";

import ServerErrorSvg from "@/lib/components/svg/ServerError";
import TailwindErrorCard from "@/lib/components/tailwind/error-card/ErrorCard";
import { useRouter } from "next/navigation";

export const ErrorBoundary = ({ error }: { error: Error }) => {
  const router = useRouter();
  return (
    <TailwindErrorCard
      title="Server Error"
      description={error.message}
      icon={<ServerErrorSvg />}
      btnProps={{
        label: "Try Again",
        onClick: () => {
          router.refresh();
        },
      }}
    />
  );
};
export default ErrorBoundary;
