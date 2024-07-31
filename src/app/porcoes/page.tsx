'use client'

import CardProduct from "@/components/CardProduct";
import { BRL_currency_formatter } from "@/helper/utils";
import mocks, { Category, Item } from "@/mocks/mocks"
import Image from "next/image";
import { useState } from "react"

export default function Portions() {

  const [portions, setPortions] = useState<Category>(mocks);

  return (
    <div className="w-full mt-14">
      <div className="">
        <h2 className="text-2xl font-semibold mb-4">Porções</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portions.portions.map((item: Item) => (
              <>
                 <CardProduct
                    name={item.title}
                    desc={item.description}
                    image={item.picture}
                    price={item.price}
                  />
              </> 
            ))} 
          </div>
      </div> 
    </div>
  )
}
