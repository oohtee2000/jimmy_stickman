import { SearchSuggestions } from "./SearchSuggestions";
import { SearchProducts } from "./SearchProducts";
import { SearchEmpty } from "./SearchEmpty";

interface Props {
  suggestions: string[];
  products: any[];
}

export function SearchPopover({
  suggestions,
  products,
}: Props) {
  if (
    suggestions.length === 0 &&
    products.length === 0
  ) {
    return <SearchEmpty />;
  }

  return (
    <div className="grid grid-cols-[300px_1fr]">
      <div className="border-r p-6">
        <SearchSuggestions items={suggestions} />
      </div>

      <div className="p-6">
        <SearchProducts products={products} />
      </div>
    </div>
  );
}