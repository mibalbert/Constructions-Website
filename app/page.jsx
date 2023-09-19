/**
 * app/page.jsx
 */

import CardCategories from "@/components/home/card-categories";
import ExamplePrice from "@/components/home/example-price";
import ExampleProject from "@/components/home/example-project";
import Hero from "@/components/home/hero/hero";
import Partners from "@/components/home/partners";

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />
      <Partners />
      <CardCategories />
      <ExamplePrice />
      <ExampleProject />
    </main>
  );
}
