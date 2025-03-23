"use client";
import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
} from "react";

import { Search } from "lucide-react";
import { cn } from "@lib/utils";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  className?: string;
  onSearch?: () => void;
}

const SearchInput = forwardRef(function SearchInput(
  { name, placeholder, className, onSearch, ...props }: SearchInputProps,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  const handleSearchClick = () => {
    if (onSearch) onSearch();
  };

  return (
    <div className="relative w-full">
      <input
        type="search"
        name={name}
        placeholder={placeholder}
        className={cn(
          "body-text w-full rounded-lg border border-[var(--text-grey)] bg-[var(--white)] p-3 outline-none",
          className,
        )}
        {...props}
        ref={ref}
      />
      <button
        type="button"
        onClick={handleSearchClick}
        className="absolute inset-y-0 right-2 flex items-center"
      >
        <Search size={24} className="stroke-[var(--text-grey)]" />
      </button>
    </div>
  );
});

SearchInput.displayName = "SearchInput";

export { SearchInput };
