"use client";

import { Collection } from "@/components/shared/Collection";
import { CategoryCard } from "@/components/category/CategoryCard";

import type { Category } from "@/types/category";

const categories: Category[] = [
  {
    id: "men-clothing",
    name: "Men Clothing",
    image: "/categories/men-clothing.jpg",
    productCount: 120,
    gender: "Men",
    categoryType: "Clothing",
  },

  {
    id: "men-shoes",
    name: "Men Shoes",
    image: "/categories/men-shoes.jpg",
    productCount: 85,
    gender: "Men",
    categoryType: "Shoes",
  },

  {
    id: "women-clothing",
    name: "Women Clothing",
    image: "/categories/women-clothing.jpg",
    productCount: 160,
    gender: "Women",
    categoryType: "Clothing",
  },

  {
    id: "women-shoes",
    name: "Women Shoes",
    image: "/categories/women-shoes.jpg",
    productCount: 95,
    gender: "Women",
    categoryType: "Shoes",
  },

  {
    id: "kids-clothing",
    name: "Kids Clothing",
    image: "/categories/kids-clothing.jpg",
    productCount: 65,
    gender: "Kids",
    categoryType: "Clothing",
  },

  {
    id: "kids-shoes",
    name: "Kids Shoes",
    image: "/categories/kids-shoes.jpg",
    productCount: 42,
    gender: "Kids",
    categoryType: "Shoes",
  },

  {
    id: "men-accessories",
    name: "Men Accessories",
    image: "/categories/men-accessories.jpg",
    productCount: 35,
    gender: "Men",
    categoryType: "Accessories",
  },
];

export function CategoryCollection() {
  return (
    <Collection<Category>
      title="Categories"
      count={categories.length}
      backHref="/"
      items={categories}
      pageSize={12}
      showFilter

      renderItem={(category) => (
        <CategoryCard
          key={category.id}
          category={category}
        />
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

              filter: (category) =>
                category.gender === "Men",
            },

            {
              label: "Women",
              value: "women",

              filter: (category) =>
                category.gender === "Women",
            },

            {
              label: "Kids",
              value: "kids",

              filter: (category) =>
                category.gender === "Kids",
            },
          ],
        },

        {
          key: "categoryType",
          label: "Category",

          options: [
            {
              label: "Clothing",
              value: "clothing",

              filter: (category) =>
                category.categoryType === "Clothing",
            },

            {
              label: "Shoes",
              value: "shoes",

              filter: (category) =>
                category.categoryType === "Shoes",
            },

            {
              label: "Accessories",
              value: "accessories",

              filter: (category) =>
                category.categoryType === "Accessories",
            },
          ],
        },

        {
          key: "productCount",
          label: "Product Count",

          options: [
            {
              label: "Under 50",
              value: "under-50",

              filter: (category) =>
                category.productCount < 50,
            },

            {
              label: "50 - 100",
              value: "50-100",

              filter: (category) =>
                category.productCount >= 50 &&
                category.productCount <= 100,
            },

            {
              label: "Over 100",
              value: "over-100",

              filter: (category) =>
                category.productCount > 100,
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

        {
          label: "Most Products",
          value: "products-high",

          sort: (a, b) =>
            b.productCount - a.productCount,
        },

        {
          label: "Fewest Products",
          value: "products-low",

          sort: (a, b) =>
            a.productCount - b.productCount,
        },
      ]}
    />
  );
}