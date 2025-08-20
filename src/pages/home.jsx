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
        <div className="flex items-center w-[60%] justify-center my-4 border-t border-zinc-300 pt-4"></div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
         <div className="bg-gradient-to-r from-zinc-700 to-zinc-500 rounded-2xl p-2 shadow-md">
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://www.pica-ai.com/_next/image/?url=https%3A%2F%2Fstatic.staticspic.com%2F_next%2Fstatic%2Fmedia%2FRectangle-2.1a85f280.jpg&w=640&q=75"
                alt=""
              />
            </div>
            <div className=" mx-8 border-r border-zinc-300 pt-19"></div>
            <div className="flex flex-col items-start justify-center px-4">
          
              <h2 className="text-white font-semibold text-lg">
                Carlos Santos
              </h2>
              <p className="text-cyan-400 font-semibold">
                Full Stack Developer
              </p>
              <p className="text-gray-900 font-bold text-sm">Rio de Janeiro, RJ</p>
              <p className="text-gray-900 font-bold text-sm">27 anos</p>
              <div className="text-sm gap-2 flex items-center justify-center mt-2 text-gray-100 font-semibold cursor-pointer">
                Ver Perfil <ArrowRight className="size-4" />
              </div>
            </div>
          </div>
        </div>
              <div className="bg-gradient-to-r from-zinc-700 to-zinc-500 rounded-2xl p-2 shadow-md">
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://www.pica-ai.com/_next/image/?url=https%3A%2F%2Fstatic.staticspic.com%2F_next%2Fstatic%2Fmedia%2FRectangle-2.1a85f280.jpg&w=640&q=75"
                alt=""
              />
            </div>
            <div className=" mx-8 border-r border-zinc-300 pt-19"></div>
            <div className="flex flex-col items-start justify-center px-4">
          
              <h2 className="text-white font-semibold text-lg">
                Carlos Santos
              </h2>
              <p className="text-cyan-400 font-semibold">
                Full Stack Developer
              </p>
              <p className="text-gray-900 font-bold text-sm">Rio de Janeiro, RJ</p>
              <p className="text-gray-900 font-bold text-sm">27 anos</p>
              <div className="text-sm gap-2 flex items-center justify-center mt-2 text-gray-100 font-semibold cursor-pointer">
                Ver Perfil <ArrowRight className="size-4" />
              </div>
            </div>
          </div>
        </div>
              <div className="bg-gradient-to-r from-zinc-700 to-zinc-500 rounded-2xl p-2 shadow-md">
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://www.pica-ai.com/_next/image/?url=https%3A%2F%2Fstatic.staticspic.com%2F_next%2Fstatic%2Fmedia%2FRectangle-2.1a85f280.jpg&w=640&q=75"
                alt=""
              />
            </div>
            <div className=" mx-8 border-r border-zinc-300 pt-19"></div>
            <div className="flex flex-col items-start justify-center px-4">
          
              <h2 className="text-white font-semibold text-lg">
                Carlos Santos
              </h2>
              <p className="text-cyan-400 font-semibold">
                Full Stack Developer
              </p>
              <p className="text-gray-900 font-bold text-sm">Rio de Janeiro, RJ</p>
              <p className="text-gray-900 font-bold text-sm">27 anos</p>
              <div className="text-sm gap-2 flex items-center justify-center mt-2 text-gray-100 font-semibold cursor-pointer">
                Ver Perfil <ArrowRight className="size-4" />
              </div>
            </div>
          </div>
        </div>
   </div>
      </div>
    </div>
  );
};

export default Home;
