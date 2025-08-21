import CardStudent from "@/components/CardStudent";



const students = [
  {
    id:1,
    link: "/david",
    name: "David Flor Batista",
    description: "Front End Developer",
    local: "Campina Grande, PB",
    age: 32,
    image:
      "https://www.pica-ai.com/_next/image/?url=https%3A%2F%2Fstatic.staticspic.com%2F_next%2Fstatic%2Fmedia%2FRectangle-2.1a85f280.jpg&w=640&q=75",
  },
  {
    id:2,
    link: "/",
    name: "Carlos Eduardo",
    description: "Full Stack Developer",
    local: "Rio de Janeiro, RJ",
    age: 29,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3N1LZjAz7Izqm842f-0MBm9lsOsbnLwq73gktCBv8h4lAqrG53TKegYdn1wERpVADF0&usqp=CAU",
  },
  {
    id:3,
    link: "/",
    name: "Maria Clara",
    description: "Full Stack Developer",
    local: "Brasília, DF",
    age: 22,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfdN7rgXQL5pWHLBxDSr5Uc-s-xu9mnJz1A&s",
  },
];

export default function Home() {
  return (
    <div
      className="
        bg-radial-[at_50%_25%] from-zinc-400 to-zinc-950 to-75% h-screen flex items-center justify-center
      "
    >
      <div className="flex flex-col items-center justify-center px-4 w-full max-w-screen-xl">
        <h1 className="text-4xl text-center text-white font-bold">
          Linguagem Interpretada
        </h1>

        <p className="text-sm max-w-2xl text-center text-white mt-4">
          Projeto primeira entrega do curso de Linguagem Interpretada de David,
          Isthanlley e João.
        </p>

        <div className="flex items-center w-[60%] justify-center my-4 border-t border-zinc-300/40 pt-4" />

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 w-full pb-12">

          {students.map((s) => (
            <CardStudent
              key={s.id}
              link={s.link}              image={s.image}
              altImage={s.name}
              name={s.name}
              description={s.description}
              local={s.local}
              age={s.age}
            />
          ))}

        </div>
      </div>
    </div>
  );
}
