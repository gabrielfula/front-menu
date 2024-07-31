'use client'

import CardProduct from "@/components/CardProduct";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BRL_currency_formatter } from "@/helper/utils";
import mocks, { Category, Item } from "@/mocks/mocks";
import Image from "next/image";
import { useState } from "react";

export default function Skewer() {

  const [search, setSearch] = useState('');

  const filteredList = search !== "" 
    ? mocks.skewer.filter((item) => item.description.toLowerCase().includes(search.toLowerCase()))
    : mocks.skewer;

  return (
    <div className="w-full mt-14">
      <div className="">
      <div className="mb-10">
        <Select onValueChange={((value: string) => setSearch(value))} defaultValue="">
          <SelectTrigger id="filter">
            <SelectValue placeholder="Tipos de espeto" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="frango">Frango</SelectItem>
            <SelectItem value="carne">Carne</SelectItem>
            <SelectItem value="linguiça">Linguiça</SelectItem>
          </SelectContent>
        </Select>
      </div>
        <h2 className="text-2xl font-semibold mb-4">Espetinhos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredList.map((item: Item) => (
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
