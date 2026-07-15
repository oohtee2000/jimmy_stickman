import Image from "next/image";
import { HeroSection } from "@/components/home/hero/HeroSection";
import { Products } from "@/components/home/products/Products";
import { Categories } from "@/components/home/categories/Categories";
import { Styles } from "@/components/home/styles/Styles";
import { Popular } from "@/components/home/popular/Popular";
import { BrandStory } from "@/components/home/BrandStory";


export default function Home() {
  return (
    <div> 
      
      <HeroSection/>

      <Products/>

      <Categories/>
      
      <Styles/>

      <Popular/>
      <BrandStory/>


      
      
      </div>


  );
}
