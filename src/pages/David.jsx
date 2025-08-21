import React from "react";

const David = () => {
  return (
    <div className="bg-radial-[at_75%_10%] from-zinc-400 to-zinc-950 to-75% h-screen flex items-start py-18 px-2 justify-center">
      <div className="flex flex-col items-center justify-center  gap-4">
        <div className="bg-linear-to-r from-zinc-200 to-zinc-400 rounded-2xl w-full border border-zinc-600 max-w-screen-xl shadow-lg">
          <div>
            <div className="flex items-center px-2 py-4 md:p-10 gap-4">
              <div className="w-24 h-24 md:w-54 md:h-54 rounded-2xl overflow-hidden shadow-lg shrink-0 ">
                <img
                  src="https://www.pica-ai.com/_next/image/?url=https%3A%2F%2Fstatic.staticspic.com%2F_next%2Fstatic%2Fmedia%2FRectangle-2.1a85f280.jpg&w=640&q=75"
                  alt="David"
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div
                className="h-18 md:h-30 w-px md:mx-8 bg-zinc-900/40"
                aria-hidden="true"
              />

              <div className="min-w-0 ">
                <h2 className="text-zinc-900 font-extrabold text-xs md:text-3xl truncate">
                  David Flor Batista
                </h2>

                <p className="text-sky-700 text-shadow-2xs font-semibold text-xs md:text-2xl">
                  Front End Developer
                </p>

                <p className="text-zinc-800 font-medium text-xs md:text-lg">
                  Campina Grande, PB
                </p>

                <p className="text-zinc-800 font-medium text-xs md:text-lg">
                  32 anos
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start py-5 px-5 lg:px-10 ">
            <h1 className="text-2xl md:text-4xl text-zinc-800 font-bold mt-4">
              Sobre mim
            </h1>
            <p className="text-sm max-w-2xl  text-zinc-800 mt-4">
              Olá, meu nome é David Flor Batista, tenho 32 anos e sou um
              desenvolvedor Front End. Atualmente, estou cursando o curso de
              Linguagem Interpretada na AI, onde estou aprendendo a criar
              aplicações web dinâmicas e interativas.
            </p>
            <p className="text-sm max-w-2xl text-zinc-800 mt-4">
              Estou animado para aplicar meus conhecimentos em projetos futuros
              e contribuir para o desenvolvimento de soluções inovadoras.
            </p>
          </div>

          <div className="flex flex-col justify-center items-start py-5 px-5 lg:px-10">
            <h2>
              <span className="text-2xl md:text-4xl text-zinc-800 font-bold">
                Contato
              </span>
            </h2>
            <p className="text-sm max-w-2xl text-center text-zinc-800 mt-4">
              Email:{" "}
              <a href="mailto:davidbatistacg@gmail.com">
                davidbatistacg@gmail.com
              </a>
            </p>
            <p className="text-sm max-w-2xl text-center text-zinc-800 mt-4">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/david-flor-batista/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default David;
