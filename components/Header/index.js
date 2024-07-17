import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <header className="flex flex-row justify-between items-center w-full bg-slate-200 h-16 px-8">
                <nav className="container mx-auto flex justify-between">
                    <div>
                        <Link className="hover:font-bold" href="/">Home</Link>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Link href="/by-name">Search Meals</Link>
                        <Link href="/by-latter">Meals By Latter</Link>
                        <Link href="/by-ingredients">Meals By Ingredients</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header