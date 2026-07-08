"use client";

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchTriggerProps {
  query: string;
  setQuery: (value: string) => void;
  clearSearch: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export function SearchTrigger({
  query,
  setQuery,
  clearSearch,
  inputRef,
}: SearchTriggerProps) {
  return (
    <div className="relative w-64">
      <Input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="pr-12"
      />

      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        {query ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              clearSearch();
            }}
            className="rounded-full p-1 hover:bg-zinc-200"
          >
            <X className="h-5 w-5" />
          </button>
        ) : (
          <Search className="h-5 w-5 text-zinc-700" />
        )}
      </div>
    </div>
  );
}