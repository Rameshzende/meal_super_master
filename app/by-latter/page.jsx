'use client'

import Link from "next/link";


const generateUppercaseAlphabet = () => {
  const alphabet = [];
  for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i))
  }
  return alphabet
}

const ByLatter = () => {

  return (
    <div className="flex flex-row gap-4 w-full items-center justify-center mt-8">
      {generateUppercaseAlphabet().map((letter) => (
        <div key={letter}>
          <Link href={`/by-latter/${letter}`}>
            <div className="font-semibold hover:scale-150 hover:text-red-900 transition-all">{letter}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ByLatter
