'use client'

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BRL_currency_formatter } from "@/helper/utils";
import mocks, { Category, Item } from "@/mocks/mocks";
import { FilterIcon } from "lucide-react";
import Image from "next/image";
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
                <div className="grid gap-4">
                  <Image
                    src={`/${item.picture}`}
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
  )
}
