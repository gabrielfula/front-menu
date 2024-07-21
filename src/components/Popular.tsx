export default function Popular() {
  return (
    <div className="w-full mt-14">
      <div className="">
        <h2 className="text-2xl font-semibold">Popular</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="grid gap-4">
                {/* <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Medalhão"
                  className="rounded-lg object-cover aspect-[4/3]"
                /> */}
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Medalhão</h3>
                  <p className="text-muted-foreground">R$8,00</p>
                </div>
              </div>
              <div className="grid gap-4">
                {/* <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Calamari Fritti"
                  className="rounded-lg object-cover aspect-[4/3]"
                /> */}
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Carne</h3>
                  <p className="text-muted-foreground">R$8,00</p>
                </div>
              </div>
              <div className="grid gap-4">
                {/* <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Meatballs"
                  className="rounded-lg object-cover aspect-[4/3]"
                /> */}
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Porpeta</h3>
                  <p className="text-muted-foreground">R$8,00</p>
                </div>
              </div>
          </div>
      </div> 
    </div>
  )
}
