
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

const fetchRandomMeals = async () => {
    try {
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        let data = await response.json()
        return data.meals
    } catch (error) {
        console.log(error)
    }
}

export default async function SearchRandomMeals() {
    const randomMeal = await fetchRandomMeals()
    console.log(randomMeal, 'f')

    return (
        <div>
            {
                randomMeal && randomMeal.length > 0 && randomMeal.map((meal, index) => {
                    return (
                        <div key={meal?.idMeal}>
                            <Card className="w-[300px]">
                                <CardContent className='p-0'>
                                    <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={300} height={200} />
                                    <CardHeader>
                                        <h3 className="font-semibold text-sm">{meal?.strMeal}</h3>
                                        <p >{meal?.strInstructions.slice(0, 70)}</p>
                                    </CardHeader>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button>Watch Out on Youtube !!!</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}
