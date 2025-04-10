"use client";
import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
} from "react";
import { Search } from "lucide-react";
import { cn } from "@lib/utils";
import { useDeviceType } from "@/hooks";

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
  const deviceType = useDeviceType();
  const size: number = deviceType === "mobile" ? 16 : 24;

  return (
    <div className="relative flex-1">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className={cn(
          "body-text w-full rounded-lg border border-[var(--stroke-normal)] bg-[var(--white)] p-3 pr-14 leading-1 outline-none md:pr-20",
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
        <Search size={size} className="stroke-[var(--text-grey)]" />
      </button>
    </div>
  );
});

SearchInput.displayName = "SearchInput";

export { SearchInput };
