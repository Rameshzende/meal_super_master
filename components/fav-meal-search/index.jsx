'use client'

import { useCallback, useEffect, useState } from 'react'
import { Input } from '../ui/input'
import MealCard from '../search-random-meals/MealCard'

const FavMealSearch = () => {
    const [favMeal, setFavMeal] = useState('')
    const [favMealData, setFavMealData] = useState([])

    const fetFavoriteMeal = useCallback(async () => {
        try {
            let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + favMeal)
            let data = await response.json()
            setFavMealData(Array.isArray(data.meals) ? data.meals : [])
        } catch (error) {
            console.log(error)
        }
    }, [favMeal])

    useEffect(() => {
        if (favMeal !== '') {
            fetFavoriteMeal()
        }
    }, [favMeal, fetFavoriteMeal])

    return (
        <>
            <Input
                placeholder="Search your favorite meal"
                name='favMeal'
                value={favMeal}
                onChange={(event) => setFavMeal(event.target.value)} />
            
            <div className='py-8'>
               <MealCard mealCardData={favMealData} />
            </div>
        </>
    )
}

export default FavMealSearch