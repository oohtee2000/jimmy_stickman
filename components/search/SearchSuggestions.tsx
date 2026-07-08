import Link from "next/link";

interface Props {
  items: string[];
}

export function SearchSuggestions({ items }: Props) {
  return (
    <div>
      <h3 className="mb-6 text-sm font-bold uppercase">
        Suggestions
      </h3>

      <div className="space-y-4">
        {items.map((item) => (
          <Link
            key={item}
            href="#"
            className="block hover:underline"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}