'use client'

import CardProduct from "@/components/CardProduct";
import mocks, { Category, Item } from "@/mocks/mocks";
import { useState } from "react";

export default function Drinks() {

  const [drink, setDrink] = useState<Category>(mocks);

  return (
    <div className="w-full mt-14">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">Bebidas</h2>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <FilterIcon className="w-4 h-4" />
              Filtro
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filtro</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>Todos</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Bebidas de Lata</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Litro</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Garrafinha</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div> 
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drink.drinks.bottled.juice.map((item: Item) => (
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
  )
}
