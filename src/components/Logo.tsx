import { useState } from "react";
import { cn } from "../lib/utils";

interface LogoProps {
  variant?: "horizontal" | "stacked" | "icon";
  className?: string;
}

export function Logo({ variant = "horizontal", className }: LogoProps) {
  const [error, setError] = useState(false);

  // Fallback logo if the image is missing
  if (error) {
    return (
      <div className={cn(
        "flex flex-col leading-none font-sans",
        variant === "stacked" ? "items-center text-center" : "items-start",
        className
      )}>
        <span className="text-2xl font-bold tracking-tight text-[#0A0A4A]">
          Alethia
        </span>
        <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#A17339] mt-1">
          Capital
        </span>
      </div>
    );
  }

  return (
    <div className={cn(
      "flex items-center", 
      variant === "stacked" && "flex-col text-center",
      className
    )}>
      <img 
        src="https://github.com/madster25/Alethia-Capital/blob/571bbfb1aea6faeb079268e19b0037ce382732ef/alethia-logo.png?raw=true" 
        alt="Alethia Capital" 
        onError={() => setError(true)}
        className={cn(
          "h-auto transition-all",
          variant === "icon" ? "w-10" : "w-40 lg:w-[160px]"
        )}
        style={{ maxHeight: "60px" }}
      />
    </div>
  );
}
