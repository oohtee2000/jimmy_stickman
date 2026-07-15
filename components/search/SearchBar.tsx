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
import { useRouter } from "next/navigation";

import {
  suggestions,
  products,
} from "./search-data";

import { SearchPopover } from "./SearchPopover";

interface SearchBarProps {
  mobile?: boolean;
}

export function SearchBar({
  mobile = true,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

const [query, setQuery] = useState("");


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
    {mobile && (
  <div className="md:hidden">
    <Button
      variant="ghost"
      size="icon"
      onClick={() => router.push("/search")}
    >
      <Search className="h-5 w-5" />
    </Button>
  </div>
)}
  </>
);
}