"use client";

import React, { ChangeEvent, useState } from "react";
import { cn } from "@/lib/utils/cn";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
}

export const Checkbox = ({
  label,
  checked,
  onChange,
  className,
  disabled = false,
}: CheckboxProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange(e.target.checked);
  };

  return (
    <label
      className={cn(
        "flex items-center gap-2 text-base leading-tight",
        disabled
          ? "cursor-not-allowed text-[var(--text-disabled)]"
          : "cursor-pointer",
        className,
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={cn(
          "h-5 w-5 rounded-sm border-2 transition-colors duration-300",
          checked ? "border-blue-600 bg-blue-600" : "border-gray-500 bg-white",
          disabled
            ? "cursor-not-allowed border-gray-300 bg-gray-100"
            : "cursor-pointer hover:border-blue-600 focus:ring focus:ring-blue-300",
        )}
      />
      {label}
    </label>
  );
};
