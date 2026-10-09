"use client";

import { Collection } from "@/components/shared/Collection";
import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/types/product";

import { products, getPrice } from "./data"


export function ProductCollection() {
  return (
    <Collection<Product>
      title="Products"
      count={products.length}
      backHref="/"
      items={products}
      pageSize={8}
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