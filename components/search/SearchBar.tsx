"use client";
import { useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SearchTrigger } from "./SearchTrigger";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  suggestions,
  products,
} from "./search-data";

import { SearchPopover } from "./SearchPopover";

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

const [query, setQuery] = useState("");
const [mobileOpen, setMobileOpen] = useState(false);

const clearSearch = () => {
  setQuery("");
  inputRef.current?.focus();
};

  const filteredSuggestions = useMemo(() => {
  return suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
}, [query]);

const filteredProducts = useMemo(() => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
}, [query]);
  return (
  <>
    {/* Desktop */}
    <div className="relative hidden w-64 md:block">
      <Input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="pr-12"
      />

      {query && (
        <div className="absolute right-0 top-full mt-2 w-[720px] rounded-xl border bg-background shadow-xl">
          <SearchPopover
            suggestions={filteredSuggestions}
            products={filteredProducts}
          />
        </div>
      )}

      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        {query ? (
          <button onClick={clearSearch}>
            <X className="h-5 w-5" />
          </button>
        ) : (
          <Search className="h-5 w-5" />
        )}
      </div>
    </div>

    {/* Mobile */}
    <div className="md:hidden">
      {!mobileOpen ? (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(true)}
          className={"border-0"}
        >
          <Search className="h-5 w-5" />
        </Button>
      ) : (
        <div className="fixed inset-x-0 top-0 z-50 border-b bg-background p-4 shadow-lg">
          <div className="relative">
            <Input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="pr-12"
            />

            <button
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => {
                setQuery("");
                setMobileOpen(false);
              }}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {query && (
            <div className="mt-2 rounded-xl border bg-background shadow-xl">
              <SearchPopover
                suggestions={filteredSuggestions}
                products={filteredProducts}
              />
            </div>
          )}
        </div>
      )}
    </div>
  </>
);
}