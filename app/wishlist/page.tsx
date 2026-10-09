import { Wishlist } from "@/components/wishlist/Wishlist";



const wishlistProducts = [
  {
    id: 1,
    name: "GERMANY ORIGINALS TRACK PANTS",
    category: "Originals",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    oldPrice: "₦190,000",
    price: "₦168,000",
    discount: "-12%",
    gender: "Unisex",
  },
  {
    id: 2,
    name: "ARGENTINA ORIGINALS TRACK PANTS",
    category: "Originals",
    image:
      "https://images.unsplash.com/photo-1506629905607-d9b1c1d6d0a2?auto=format&fit=crop&w=1200&q=80",
    oldPrice: "₦190,000",
    price: "₦168,000",
    discount: "-12%",
    gender: "Unisex",
  },
  {
    id: 3,
    name: "HANDBALL SPEZIAL SHOES",
    category: "Originals",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    oldPrice: "₦220,000",
    price: "₦189,000",
    discount: "-14%",
    gender: "Unisex",
  },
];


export default function WishlistPage() {
  return <Wishlist products={wishlistProducts} />;
}