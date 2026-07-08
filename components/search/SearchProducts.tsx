import { SearchProductCard } from "./SearchProductCard";

interface Props {
  products: any[];
}

export function SearchProducts({ products }: Props) {
  return (
    <div>
      <h3 className="mb-6 text-sm font-bold uppercase">
        Products
      </h3>

      <div className="space-y-4">
        {products.map((product) => (
          <SearchProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}