import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CardStudent = ({ link, image, name, description, local, age }) => {
  return (
    <Link
      to={link}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-2xl"
    >
      <div className="bg-gradient-to-r from-zinc-700 to-zinc-500 border border-zinc-600 rounded-2xl max-w-[380px] p-2  shadow-md transition-transform duration-300 hover:shadow-2xl hover:scale-[1.02]">
        <div className="flex items-center gap-4">
         
          <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg shrink-0">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="object-cover"
            />
          </div>

    
          <div
            className="h-20 w-px bg-zinc-300/40"
            aria-hidden="true"
          />

     
          <div className="min-w-0 px-3">
            <h2 className="text-white font-semibold text-lg truncate">
              {name}
            </h2>

            <p className="text-cyan-300 font-semibold text-sm">
              {description}
            </p>

            <p className="text-zinc-100 font-medium text-xs">
              {local}
            </p>
            
            <p className="text-zinc-100 font-medium text-xs">{`${age} anos`}</p>
            

            <span className="mt-2 inline-flex items-center gap-1 text-sm text-gray-100 font-semibold">
              Ver perfil
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardStudent;
