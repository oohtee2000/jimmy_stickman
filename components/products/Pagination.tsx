import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";


export function Page() {
    return(

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
          isActive
          className="rounded-none"
        >
          1
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink
          href="#"
          className="rounded-none"
        >
          2
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink
          href="#"
          className="rounded-none"
        >
          3
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>

      <PaginationItem>
        <PaginationLink
          href="#"
          className="rounded-none"
        >
          15
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationNext
          href="#"
          className="rounded-none"
        />
      </PaginationItem>

    </PaginationContent>
  </Pagination>
    );
}