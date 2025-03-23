"use client";
import { Button, SearchInput } from "@components/ui";

import { ShoppingCart, User } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-[var(--button-primary-default)]">
      <div className="xl2:max-w-[90rem] xl2:px-18 xl2:py-3.5 mx-auto flex w-full items-center justify-between gap-6 px-4 py-2">
        <h2 className="h2-text leading-[1.2] text-[var(--text-white)]">
          Nuviora
        </h2>
        <SearchInput
          name="headerSearch"
          placeholder="Search..."
          className="leading-[1.2]"
        />
        <Button className="p-3 leading-[1.2]">
          <div className="flex items-center justify-between gap-3">
            <User size={24} />
            <p className="body-text">Account</p>
          </div>
        </Button>
        <Button className="p-1">
          <ShoppingCart size={36} />
        </Button>
      </div>
    </header>
  );
}

export default Header;
