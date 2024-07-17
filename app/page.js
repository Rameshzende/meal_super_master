import SearchRandomMeals from "@/components/search-random-meals";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-24 pt-16">
      <h2 className="text-2xl text-gray-600 font-bold mb-8">Random Meals</h2>
      <SearchRandomMeals />
    </div>
  );
}
