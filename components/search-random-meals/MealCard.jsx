
'use client'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import Image from "next/image"


export default  function MealCard({ mealCardData }) {
    return (
        <div className="flex gap-4 flex-wrap">
            {
                mealCardData && mealCardData.length > 0 && mealCardData.map((meal, index) => {
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
