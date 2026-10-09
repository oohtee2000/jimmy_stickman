
"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface CollectionPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function CollectionPagination({
  currentPage,
  totalPages,
  onPageChange,
}: CollectionPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    onPageChange(page);

    // Scroll back to the collection
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-24 border-t pt-10">
      <Pagination>
        <PaginationContent className="gap-2">
          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(event) => {
                event.preventDefault();
                goToPage(currentPage - 1);
              }}
              className={`rounded-none ${
                currentPage === 1
                  ? "pointer-events-none opacity-40"
                  : ""
              }`}
            />
          </PaginationItem>

          {/* Page 1 */}
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={currentPage === 1}
              onClick={(event) => {
                event.preventDefault();
                goToPage(1);
              }}
              className="rounded-none"
            >
              1
            </PaginationLink>
          </PaginationItem>

          {/* Page 2 */}
          {totalPages >= 2 && (
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={currentPage === 2}
                onClick={(event) => {
                  event.preventDefault();
                  goToPage(2);
                }}
                className="rounded-none"
              >
                2
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Page 3 */}
          {totalPages >= 3 && (
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={currentPage === 3}
                onClick={(event) => {
                  event.preventDefault();
                  goToPage(3);
                }}
                className="rounded-none"
              >
                3
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Ellipsis */}
          {totalPages > 4 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {/* Last page */}
          {totalPages > 3 && (
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={currentPage === totalPages}
                onClick={(event) => {
                  event.preventDefault();
                  goToPage(totalPages);
                }}
                className="rounded-none"
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(event) => {
                event.preventDefault();
                goToPage(currentPage + 1);
              }}
              className={`rounded-none ${
                currentPage === totalPages
                  ? "pointer-events-none opacity-40"
                  : ""
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
