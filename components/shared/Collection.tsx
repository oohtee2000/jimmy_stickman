"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  SlidersHorizontal,
  X,
} from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Checkbox } from "@/components/ui/checkbox";

export interface FilterOption<T> {
  label: string;
  value: string;
  filter: (item: T) => boolean;
}

export interface FilterGroup<T> {
  label: string;
  key: string;
  options: FilterOption<T>[];
}

export interface SortOption<T> {
  label: string;
  value: string;
  sort: (a: T, b: T) => number;
}

interface CollectionProps<T> {
  title: string;
  count: number;

  backHref?: string;
  backLabel?: string;

  items: T[];

  renderItem: (item: T) => React.ReactNode;

  showFilter?: boolean;

  currentPage?: number;
  totalPages?: number;

  filterGroups?: FilterGroup<T>[];
  sortOptions?: SortOption<T>[];
}

export function Collection<T>({
  title,
  count,

  backHref = "/",
  backLabel = "Back",

  items,
  renderItem,

  showFilter = true,

  currentPage = 1,
  totalPages = 1,

  filterGroups = [],
  sortOptions = [],
}: CollectionProps<T>) {
  const [filterOpen, setFilterOpen] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  const [selectedSort, setSelectedSort] = useState(
    sortOptions[0]?.value ?? ""
  );

  /*
   * FILTER PRODUCTS
   */
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return filterGroups.every((group) => {
        const selected = selectedFilters[group.key];

        // No filter selected for this group
        if (!selected || selected.length === 0) {
          return true;
        }

        // Product only needs to match one option
        // inside the same filter group
        return selected.some((value) => {
          const option = group.options.find(
            (option) => option.value === value
          );

          return option ? option.filter(item) : false;
        });
      });
    });
  }, [items, filterGroups, selectedFilters]);

  /*
   * SORT PRODUCTS
   */
  const sortedItems = useMemo(() => {
    const result = [...filteredItems];

    const selectedOption = sortOptions.find(
      (option) => option.value === selectedSort
    );

    if (selectedOption) {
      result.sort(selectedOption.sort);
    }

    return result;
  }, [filteredItems, selectedSort, sortOptions]);

  /*
   * TOGGLE FILTER
   */
  const toggleFilter = (
    groupKey: string,
    value: string
  ) => {
    setSelectedFilters((current) => {
      const currentValues = current[groupKey] ?? [];

      const exists = currentValues.includes(value);

      return {
        ...current,
        [groupKey]: exists
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });
  };

  /*
   * CLEAR FILTERS
   */
  const clearFilters = () => {
    setSelectedFilters({});
  };

  /*
   * COUNT ACTIVE FILTERS
   */
  const activeFilterCount = Object.values(
    selectedFilters
  ).reduce(
    (total, values) => total + values.length,
    0
  );

  return (
    <section
      className="
        mx-auto
        max-w-screen-2xl
        px-4
        py-8
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12
        2xl:px-16
      "
    >
      <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">

            <Button
              variant="ghost"
              size="sm"
              className="px-0 font-bold uppercase"
              
            >
              <Link href={backHref}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {backLabel}
              </Link>
            </Button>

            <div className="text-muted-foreground">
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Home
              </Link>

              <span className="mx-2">/</span>

              <span className="text-foreground">
                {title}
              </span>
            </div>

          </div>
        </div>

        {/* Collection Header */}
        <div className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <div className="flex items-end gap-3">

              <h1 className="text-2xl font-black uppercase italic tracking-tight lg:text-5xl">
                {title}
              </h1>

              <span className="pb-2 text-lg text-muted-foreground">
                [{filteredItems.length}]
              </span>

            </div>
          </div>

          {/* Filter */}
          {showFilter && (
            <Button
              variant="outline"
              size="lg"
              onClick={() => setFilterOpen(true)}
              className="
                h-14
                rounded-none
                border-2
                border-black
                px-8
                uppercase
                tracking-wide
              "
            >
              Filter & Sort

              {activeFilterCount > 0 && (
                <span className="ml-2">
                  ({activeFilterCount})
                </span>
              )}

              <SlidersHorizontal className="ml-4 h-5 w-5" />
            </Button>
          )}

        </div>

        <div className="my-10 border-b" />

        {/* Products */}
        {sortedItems.length > 0 ? (
          <div
            className="
              grid
              grid-cols-2
              gap-4
              sm:gap-6
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {sortedItems.map((item, index) => (
              <div key={index}>
                {renderItem(item)}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-75 items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-bold uppercase">
                No products found
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Try changing your filters.
              </p>

              <Button
                variant="outline"
                className="mt-5 rounded-none"
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-24 border-t pt-10">
            <Pagination>
              <PaginationContent className="gap-2">

                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    className="rounded-none"
                  />
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === 1}
                    className="rounded-none"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>

                {totalPages >= 2 && (
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === 2}
                      className="rounded-none"
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                )}

                {totalPages >= 3 && (
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === 3}
                      className="rounded-none"
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                )}

                {totalPages > 4 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                {totalPages > 3 && (
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === totalPages}
                      className="rounded-none"
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    className="rounded-none"
                  />
                </PaginationItem>

              </PaginationContent>
            </Pagination>
          </div>
        )}

      </div>

      {/* FILTER SHEET */}
      <Sheet
  open={filterOpen}
  onOpenChange={setFilterOpen}
>
  <SheetContent
    side="right"
    className="
      flex
      w-full
      flex-col
      gap-0
      p-0
      sm:max-w-md
    "
  >
    {/* =========================
        HEADER
    ========================= */}
    <SheetHeader
      className="
        shrink-0
        border-b
        px-6
        py-5
        sm:px-7
      "
    >
      <div className="flex items-center justify-between">

        <div>
          <SheetTitle
            className="
              text-base
              font-bold
              uppercase
              tracking-wide
            "
          >
            Filter & Sort
          </SheetTitle>

          <p className="mt-1 text-xs text-muted-foreground">
            Refine your selection
          </p>
        </div>

        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={clearFilters}
            className="
              text-xs
              font-semibold
              uppercase
              tracking-wide
              text-muted-foreground
              underline
              underline-offset-4
              transition-colors
              hover:text-foreground
            "
          >
            Clear all
          </button>
        )}

      </div>
    </SheetHeader>


    {/* =========================
        SCROLLABLE CONTENT
    ========================= */}
    <div className="flex-1 overflow-y-auto">

      <div className="px-6 sm:px-7">

        {/* =========================
            SORT
        ========================= */}
        {sortOptions.length > 0 && (
          <div className="border-b py-7">

            <div className="mb-5">
              <h3
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                "
              >
                Sort By
              </h3>
            </div>

            <div className="space-y-1">

              {sortOptions.map((option) => {
                const selected =
                  selectedSort === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      setSelectedSort(option.value)
                    }
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      py-3
                      text-left
                    "
                  >

                    <span
                      className={`
                        text-sm
                        transition-colors
                        ${
                          selected
                            ? "font-semibold text-foreground"
                            : "text-muted-foreground group-hover:text-foreground"
                        }
                      `}
                    >
                      {option.label}
                    </span>

                    {/* Radio */}
                    <span
                      className={`
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        ${
                          selected
                            ? "border-black"
                            : "border-muted-foreground/40 group-hover:border-black"
                        }
                      `}
                    >
                      {selected && (
                        <span
                          className="
                            h-2.5
                            w-2.5
                            rounded-full
                            bg-black
                          "
                        />
                      )}
                    </span>

                  </button>
                );
              })}

            </div>
          </div>
        )}


        {/* =========================
            FILTER GROUPS
        ========================= */}
        <div>

          {filterGroups.map((group) => (
            <details
              key={group.key}
              open
              className="group border-b"
            >

              {/* Section Header */}
              <summary
                className="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  justify-between
                  py-6
                  [&::-webkit-details-marker]:hidden
                "
              >

                <div className="flex items-center gap-2">

                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.15em]
                    "
                  >
                    {group.label}
                  </span>

                  {selectedFilters[group.key]?.length > 0 && (
                    <span
                      className="
                        flex
                        h-5
                        min-w-5
                        items-center
                        justify-center
                        rounded-full
                        bg-black
                        px-1.5
                        text-[10px]
                        font-bold
                        text-white
                      "
                    >
                      {
                        selectedFilters[group.key]
                          .length
                      }
                    </span>
                  )}

                </div>

                {/* Plus / Minus */}
                <span
                  className="
                    text-xl
                    font-light
                    leading-none
                    transition-transform
                    group-open:rotate-45
                  "
                >
                  +
                </span>

              </summary>


              {/* Options */}
              <div className="pb-6">

                <div className="space-y-1">

                  {group.options.map((option) => {

                    const checked =
                      selectedFilters[group.key]?.includes(
                        option.value
                      ) ?? false;

                    return (
                      <label
                        key={option.value}
                        className="
                          group/item
                          flex
                          cursor-pointer
                          items-center
                          justify-between
                          rounded-sm
                          py-2.5
                          transition-colors
                          hover:bg-muted/50
                          sm:px-2
                        "
                      >

                        <div className="flex items-center gap-3">

                          <Checkbox
                            checked={checked}
                            onCheckedChange={() =>
                              toggleFilter(
                                group.key,
                                option.value
                              )
                            }
                            className="
                              h-5
                              w-5
                              rounded-none
                              data-[state=checked]:border-black
                              data-[state=checked]:bg-black
                              data-[state=checked]:text-white
                            "
                          />

                          <span
                            className={`
                              text-sm
                              transition-colors
                              ${
                                checked
                                  ? "font-medium text-foreground"
                                  : "text-muted-foreground"
                              }
                            `}
                          >
                            {option.label}
                          </span>

                        </div>

                        {checked && (
                          <span
                            className="
                              text-xs
                              font-medium
                              text-muted-foreground
                            "
                          >
                            Selected
                          </span>
                        )}

                      </label>
                    );
                  })}

                </div>

              </div>

            </details>
          ))}

        </div>

      </div>

    </div>


    {/* =========================
        FOOTER
    ========================= */}
    <div
      className="
        shrink-0
        border-t
        bg-background
        px-6
        py-4
        sm:px-7
      "
    >

      <div className="flex items-center justify-between gap-4">

        {/* Clear */}
        <Button
          type="button"
          variant="ghost"
          onClick={clearFilters}
          disabled={activeFilterCount === 0}
          className="
            h-12
            px-2
            text-xs
            font-bold
            uppercase
            tracking-wide
            disabled:opacity-40
          "
        >
          Clear all
        </Button>


        {/* Apply */}
        <Button
          type="button"
          onClick={() => setFilterOpen(false)}
          className="
            h-12
            flex-1
            rounded-none
            bg-black
            px-6
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-white
            hover:bg-black/80
          "
        >
          Show {sortedItems.length} Products
        </Button>

      </div>

    </div>

  </SheetContent>
</Sheet>

    </section>
  );
}