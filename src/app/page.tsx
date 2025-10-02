import getAllProducts from "@/apis/allProducts";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cache } from "react";
import HomeCard from "./_components/HomeCard/HomeCard";
import MainSlider from "./_components/MainSlider/MainSlider";
import CategorySlide from "./_components/CategorySlide/CategorySlide";
import { Product } from "@/types/product.type";

export default async function Home() {


  //ssr => server side rendering
  //csr => client side rendering
  //isr => incremental static regeneration
  //ssg => static site generation


  const data: Product[] = await getAllProducts()


  return (
    <section className="px-5 md:px-0 my-10 w-full md:w-[80%] mx-auto">
      <MainSlider />
      <CategorySlide />
      <div className="flex flex-wrap">
        {data.map((product: Product, idx: number) => <HomeCard key={idx} product={product} />)}
      </div>
    </section>
  );
}
