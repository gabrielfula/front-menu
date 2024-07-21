import Popular from "@/components/Popular";
import { CookingPot, CupSoda, UtensilsCrossed } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex gap-7 mt-5">
        <div className="flex items-center gap-2">
          <UtensilsCrossed size={24} strokeWidth={1.25} />
          <span>Espetos</span>
        </div>
        <div className="flex items-center gap-2">
          <CookingPot size={24} strokeWidth={1.25} />
          <span>Porções</span>
        </div>
        <div className="flex items-center gap-2">
          <CupSoda size={24} strokeWidth={1.25} />
          <span>Bebidas</span>
        </div>
      </div>
      <Popular />
    </>
  )
}
