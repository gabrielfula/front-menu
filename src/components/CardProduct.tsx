import Image from 'next/image';
import { Card, CardContent } from './ui/card'
import { BRL_currency_formatter } from '@/helper/utils';

export interface CardProductProps {
  name: string;
  image: string;
  price: number;
  desc: string
}

export default function CardProduct( { name, desc, image, price }: CardProductProps) {
  return (
    <Card className="mt-4 flex justify-center">
      <CardContent>
        <Image
          src={`/${image}`}
          width={400}
          height={300}
          alt={desc}
          className="rounded-lg object-cover aspect-[4/3] mt-4"
        />
        <div className="mt-4">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-muted-foreground">{desc}</p>
          <p className="text-sm font-semibold mt-2">{BRL_currency_formatter.format(price)}</p>
        </div>
      </CardContent>
    </Card>
  )
}
