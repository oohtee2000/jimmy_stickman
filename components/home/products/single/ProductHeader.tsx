type ProductHeaderProps = {
  title: string;
  category: string;
  currentPrice: string;
  originalPrice?: string;
  currency?: string;
};

export function ProductHeader({
  title,
  category,
  currentPrice,
  originalPrice,
}: ProductHeaderProps) {
  return (
    <div className="space-y-4">
      {/* Category */}
      <p className="text-sm text-muted-foreground">
        {category}
      </p>

      {/* Name & Price */}
      <div className="space-y-3">
        <h1 className="text-4xl font-black uppercase leading-none tracking-tight">
          {title}
        </h1>

        <div className="flex items-center gap-3">
          <span className="text-md font-bold text-red-600">
            {currentPrice}
          </span>

          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}