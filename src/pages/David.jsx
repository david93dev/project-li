import css from "../assets/css.png";
import html from "../assets/html.png";
import python from "../assets/python.png";
import sql from "../assets/sql.png";
import react from "../assets/react.png";
import js from "../assets/js.png";
import java from "../assets/java.png";
import git from "../assets/github.png";
import pixalegria from "../assets/pix-alegria.png";
import lmr from "../assets/lmr.png";
import david from "../assets/david.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";

const David = () => {
  return (
    <div className="bg-radial-[at_75%_10%] from-zinc-400 to-zinc-950 to-75% h-full flex items-start py-18 px-2 justify-center">
      <div className="flex flex-col items-center justify-center  gap-4">
        <div className="bg-linear-to-r from-zinc-200 to-zinc-400 rounded-2xl w-full border border-zinc-600 max-w-screen-xl shadow-lg">
          <div>
            <div className="flex items-center px-2 py-4 md:p-10 gap-4">
              <div className="w-24 h-24 md:w-54 md:h-54 rounded-2xl overflow-hidden shadow-lg shrink-0 ">
                <img
                  src={david}
                  alt="David"
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div
                className="h-18 md:h-30 w-px md:mx-8 bg-zinc-900/40"
                aria-hidden="true"
              />

              <div className="min-w-0 bg-zinc-400 p-4 rounded-2xl">
                <h2 className="text-zinc-900 font-extrabold text-xs md:text-3xl truncate">
                  David Flor Batista
                </h2>

                <p className="text-cyan-300 text-shadow-2xs font-semibold text-xs md:text-2xl">
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

          <div className="py-5 px-5 lg:px-10 flex flex-col gap-6">
            {/* sobre mim */}
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-2xl md:text-4xl text-zinc-800 font-bold mb-4">
                Sobre mim
              </h1>
              <p className="text-sm max-w-2xl  text-zinc-800 ">
                Olá, meu nome é David Flor Batista, tenho 32 anos e sou um
                desenvolvedor Front End. Atualmente, estou cursando o curso de
                Linguagem Interpretada na AI, onde estou aprendendo a criar
                aplicações web dinâmicas e interativas.
              </p>
              <p className="text-sm max-w-2xl text-zinc-800 mt-4">
                Estou animado para aplicar meus conhecimentos em projetos
                futuros e contribuir para o desenvolvimento de soluções
                inovadoras.
              </p>
            </div>

            <div>
              <hr className="border-t border-zinc-400 my-4 w-full" />
            </div>

            {/* habilidades */}
            <div>
              <h2>
                <span className="text-2xl md:text-4xl text-zinc-800 font-bold">
                  Habilidades
                </span>
              </h2>
              <ul className="list-disc list-inside text-sm max-w-2xl text-zinc-800 mt-4">
                <li>Trabalho em Equipe</li>
                <li>Liderança</li>
                <li>Resolução de Problemas</li>
                <li>Adaptabilidade</li>
                <li>Empatia</li>
              </ul>
            </div>

            <div>
              <hr className="border-t border-zinc-400 my-4 w-full" />
            </div>

            {/* tecnologias */}
            <div className="flex flex-col justify-center items-start ">
              <h2>
                <span className="text-2xl md:text-4xl text-zinc-800 font-bold">
                  Tecnologias
                </span>
              </h2>
              <ul className="flex justify-center items-center gap-5 flex-wrap list-inside text-sm max-w-2xl text-zinc-800 mt-4">
                <li>
                  <div className="bg-zinc-100 rounded-2xl p-3 shadow-md">
                    <img src={css} alt="CSS" className="w-5 h-5 md:w-8 md:h-8 " />
                  </div>
                </li>
                <li>
                  <div className="bg-zinc-100 rounded-2xl p-3 shadow-md">
                    <img src={html} alt="HTML" className="w-5 h-5 md:w-8 md:h-8 " />
                  </div>
                </li>
                <li>
                  <div className="bg-zinc-100 rounded-2xl p-3 shadow-md">
                    <img src={js} alt="JS" className="w-5 h-5 md:w-8 md:h-8" />
                  </div>
                </li>
                <li>
                  <div className="bg-zinc-100 rounded-2xl p-3 shadow-md">
                    <img src={react} alt="React" className="w-5 h-5 md:w-8 md:h-8" />
                  </div>
                </li>
                <li>
                  <div className="bg-zinc-100 rounded-2xl p-3 shadow-md">
                    <img src={java} alt="JAVA" className="w-5 h-5 md:w-8 md:h-8" />
                  </div>
                </li>
                <li>
                  <div className="bg-zinc-100 rounded-2xl p-3 shadow-md">
                    <img src={python} alt="python" className="w-5 h-5 md:w-8 md:h-8" />
                  </div>
                </li>
                <li>
                  <div className="bg-zinc-100 rounded-2xl p-3 shadow-md">
                    <img src={sql} alt="sql" className="w-5 h-5 md:w-8 md:h-8" />
                  </div>
                </li>
                <li>
                  <div className="bg-zinc-100 rounded-2xl p-3 shadow-md">
                    <img src={git} alt="sql" className="w-5 h-5 md:w-8 md:h-8 " />
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <hr className="border-t border-zinc-400 my-4 w-full" />
            </div>

            {/* projetos */}
            <div className="flex flex-col justify-center items-start ">
              <h2 className="text-2xl md:text-4xl text-zinc-800 font-bold">
                Projetos
              </h2>
             <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 flex-wrap">
               <a href="https://pixdaalegria.com.br/">
                <div className="flex flex-col justify-center items-center mt-4 w-60 bg-zinc-200 border border-zinc-300 rounded-2xl shadow-md hover:shadow-lg transition-shadow hover:scale-105">
                  <div className="shadow-sm">
                  <img src={pixalegria} alt="site imagem" className="object-cover rounded-t-2xl" />
                </div>
                 <div className="p-4 text-center h-24 overflow-y-hidden">
                   <p className="text-sm max-w-2xl text-zinc-700 font-semibold">
                    Pix Alegria - Desenvolvido com HTML, CSS e JavaScript com React.
                  </p>
                 </div>
                </div>
              </a>
              <a href="https://page-project-delta.vercel.app/">
                <div className="flex flex-col justify-center items-center mt-4 w-60 bg-zinc-200 border border-zinc-300 rounded-2xl shadow-md hover:shadow-lg transition-shadow hover:scale-105">
                  <div className="shadow-sm">
                  <img src={lmr} alt="site imagem" className="object-cover rounded-t-2xl" />
                </div>
                 <div className="p-4 text-center h-24 overflow-y-hidden">
                   <p className="text-sm max-w-2xl text-zinc-700 font-semibold">
                    LMR - Desenvolvido com HTML, CSS e JavaScript com React.
                  </p>
                 </div>
                </div>
              </a>
             </div>
            </div>

            <div>
              <hr className="border-t border-zinc-400 my-4 w-full" />
            </div>

            {/* contato */}
            <div className="flex flex-col justify-center items-start ">
              <h2>
                <span className="text-2xl md:text-4xl text-zinc-800 font-bold">
                  Contato
                </span>
              </h2>
             <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
               <div className="text-sm max-w-2xl text-center text-zinc-800 mt-4">
                <a href="mailto:davidbatistacg@gmail.com">
                  <img src={gmail} alt="" className="w-8"/>
                </a>
              </div>
              <div className="text-sm max-w-2xl text-center text-zinc-800 mt-4">
                <a
                  href="https://www.linkedin.com/in/david-flor-batista/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="" className="w-8" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src={instagram} alt="" className="w-8 mt-4" />
                </a>
              </div>
                <div>
                <a href="">
                  <img src={git} alt="" className="w-8 mt-4" />
                </a>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default David;
