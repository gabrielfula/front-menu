'use client'

import { BRL_currency_formatter } from "@/helper/utils";
import mocks, { Category, Item } from "@/mocks/mocks";
import { useState } from "react";

export default function Skewer() {

  const [skewers, setSkewers] = useState<Category>(mocks);

  return (
    <div className="w-full mt-14">
      <div className="">
        <h2 className="text-2xl font-semibold mb-4">Espetinhos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skewers.skewer.map((item: Item) => (
              <>
                <div className="grid gap-4">
                  <img
                    src={item.picture}
                    width={400}
                    height={300}
                    alt={item.description}
                    className="rounded-lg object-cover aspect-[4/3]"
                  />
                  <div className="grid gap-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-accent-foreground">{item.description}</p>
                    <p className="text-muted-foreground">{BRL_currency_formatter.format(item.price)}</p>
                  </div>
                </div>
              </> 
            ))} 
          </div>
      </div> 
    </div>
  )
}
