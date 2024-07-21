import { CookingPot, CupSoda, UtensilsCrossed } from 'lucide-react'
import Link from 'next/link'

export default function Categories() {
  return (
    <div className="flex gap-7 mt-5">
      <Link href={'/espetos'} className="flex items-center gap-2">
        <UtensilsCrossed size={24} strokeWidth={1.25} />
        <span>Espetos</span>
      </Link>
      <Link href={'/porcoes'} className="flex items-center gap-2">
        <CookingPot size={24} strokeWidth={1.25} />
        <span>Porções</span>
      </Link>
      <Link href={'/bebidas'} className="flex items-center gap-2">
        <CupSoda size={24} strokeWidth={1.25} />
        <span>Bebidas</span>
      </Link>
  </div>
  )
}
