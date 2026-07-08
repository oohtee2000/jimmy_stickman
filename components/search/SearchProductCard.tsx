import Link from "next/link";

interface Props {
  product: {
    name: string;
    category: string;
    price: string;
    image: string;
  };
}

export function SearchProductCard({ product }: Props) {
  return (
    <Link
      href="#"
      className="flex gap-4 rounded-lg p-2 transition hover:bg-muted"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-20 w-20 rounded-md object-cover"
      />

      <div>
        <p className="text-sm text-muted-foreground">
          {product.category}
        </p>

        <h4 className="font-medium">
          {product.name}
        </h4>

        <p className="font-semibold">
          {product.price}
        </p>
      </div>
    </Link>
  );
}