import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
interface IButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}
function SubmitButton({ isLoading, className, children }: IButtonProps) {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loading"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
}

export default SubmitButton;
