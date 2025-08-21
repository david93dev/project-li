import CardStudent from "@/components/CardStudent";
import david from "@/assets/david.png";


const students = [
  {
    id:1,
    link: "/david",
    name: "David Flor Batista",
    description: "Front End Developer",
    local: "Campina Grande, PB",
    age: 32,
    image: david,
      
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
