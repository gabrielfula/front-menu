import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
  return (
    <div>
      <div>
        <div className="flex justify-center mb-5">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-3xl font-bold">Cantinho do Churrasco</h1>
      </div>
    </div>
  )
}
