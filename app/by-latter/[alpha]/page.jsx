'use client'

import MealCard from "@/components/search-random-meals/MealCard";
import { ArrowBigLeft, ArrowBigRightDash } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const generateUppercaseAlphabet = () => {
  const alphabet = [];
  for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i))
  }
  return alphabet
}

const Latter = ({ params }) => {

  const [searchData, setSearchData] = useState([])

  const getMealsBySearch = useCallback(async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${params.alpha}`)
    const data = await response.json()
    setSearchData(Array.isArray(data.meals) ? data.meals : [])
  }, [params])

  useEffect(() => {
    getMealsBySearch()
  }, [params, getMealsBySearch])

  return (
    <div>
      <Link className="mb-8" href="/by-latter"><ArrowBigLeft className="my-4 mb-8" /></Link>
      {
        searchData && searchData.length > 0 ? (
          <MealCard mealCardData={searchData} />
        ) : (
          <div className="flex justify-center items-center">
            <p>No data </p>
          </div>
        )
      }
    </div>
  )
}

export default Latter
