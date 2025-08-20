import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-radial-[at_50%_25%] from-zinc-400 to-zinc-950 to-75% h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl text-center text-white font-bold">
          Linguagem Interpretada
        </h1>
        <p className="text-sm max-w-2xl text-center text-white mt-4">
          Projeto primeira entrega do curso de Linguagem Interpretada de David,
          Isthanlley e João.
        </p>
        <div>
          <Button className="mt-6">
            Ver Alunos <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
