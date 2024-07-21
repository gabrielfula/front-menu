import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
  return (
    <div>
      <div>
        <div className="flex justify-center mb-5">
          <Link href={'/'}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
        <h1 className="text-3xl font-bold">Cantinho do Churrasco</h1>
      </div>
    </div>
  )
}
