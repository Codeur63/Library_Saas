import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="md:text-md text-sm font-bold text-secondary">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={` relative
            flex h-10 w-full rounded-md border border-neutral bg-gray-150 px-3 py-5 
            text-sm ring-offset-white file:border-0 file:bg-transparent 
            file:text-sm file:font-medium placeholder:text-black/40
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary 
            disabled:cursor-not-allowed disabled:opacity-50
            ${error ? "border-red-500 focus-visible:ring-red-500" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-500 mt-1">{error}</p>
        )}
      </div>
    );
  }
);

input.displayName = "input";

export default input;