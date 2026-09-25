"use client";

import { Collection } from "@/components/shared/Collection";
import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    name: "WORLDWIDE HOOPS GRAPHIC T-SHIRT",
    category: "Performance",
    gender: "Men",
    colors: "1 colour",
    price: "₦60,900",
    oldPrice: "₦87,000",
    discount: "-30%",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 2,
    name: "NEUCLASSICS T-SHIRT",
    category: "Originals",
    gender: "Men",
    colors: "1 colour",
    price: "₦39,000",
    oldPrice: "₦78,000",
    discount: "-50%",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 3,
    name: "ADICOLOR CLASSICS 3-STRIPES T-SHIRT",
    category: "Originals",
    gender: "Men",
    colors: "1 colour",
    price: "₦59,000",
    oldPrice: null,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 4,
    name: "TIRO 23 LEAGUE TRACKSUIT BOTTOMS",
    category: "Performance",
    gender: "Men",
    colors: "1 colour",
    price: "₦107,000",
    oldPrice: null,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
  },
];


// Convert "₦60,900" → 60900
function getPrice(price: string) {
  return Number(
    price.replace("₦", "").replace(/,/g, "")
  );
}


export function ProductCollection() {
  return (
    <Collection<Product>
      title="Products"
      count={products.length}
      backHref="/"
      items={products}
      currentPage={1}
      totalPages={15}
      showFilter

      renderItem={(product) => (
        <ProductCard product={product} />
      )}

      /* =========================
          FILTERS
      ========================= */

      filterGroups={[
        {
          key: "gender",
          label: "Gender",

          options: [
            {
              label: "Men",
              value: "men",

              filter: (product) =>
                product.gender === "Men",
            },

            {
              label: "Women",
              value: "women",

              filter: (product) =>
                product.gender === "Women",
            },

            {
              label: "Kids",
              value: "kids",

              filter: (product) =>
                product.gender === "Kids",
            },
          ],
        },

        {
          key: "category",
          label: "Category",

          options: [
            {
              label: "Originals",
              value: "originals",

              filter: (product) =>
                product.category === "Originals",
            },

            {
              label: "Performance",
              value: "performance",

              filter: (product) =>
                product.category === "Performance",
            },
          ],
        },

        {
          key: "sale",
          label: "Sale",

          options: [
            {
              label: "On Sale",
              value: "sale",

              filter: (product) =>
                Boolean(product.discount),
            },
          ],
        },

        {
          key: "price",
          label: "Price",

          options: [
            {
              label: "Under ₦50,000",
              value: "under-50",

              filter: (product) =>
                getPrice(product.price) < 50000,
            },

            {
              label: "₦50,000 - ₦100,000",
              value: "50-100",

              filter: (product) => {
                const price = getPrice(product.price);

                return (
                  price >= 50000 &&
                  price <= 100000
                );
              },
            },

            {
              label: "Over ₦100,000",
              value: "over-100",

              filter: (product) =>
                getPrice(product.price) > 100000,
            },
          ],
        },
      ]}

      /* =========================
          SORT
      ========================= */
      sortOptions={[
        {
          label: "Recommended",
          value: "recommended",

          sort: () => 0,
        },

        {
          label: "Price: Low to High",
          value: "price-low",

          sort: (a, b) =>
            getPrice(a.price) -
            getPrice(b.price),
        },

        {
          label: "Price: High to Low",
          value: "price-high",

          sort: (a, b) =>
            getPrice(b.price) -
            getPrice(a.price),
        },

        {
          label: "Name: A to Z",
          value: "name-asc",

          sort: (a, b) =>
            a.name.localeCompare(b.name),
        },

        {
          label: "Name: Z to A",
          value: "name-desc",

          sort: (a, b) =>
            b.name.localeCompare(a.name),
        },
      ]}
    />
  );
}