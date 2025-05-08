import React from "react";
import {
  Button,
  Card,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

function StatsCard({ count, title, desc }: { count: string, title: string, desc: string}) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h3" className="mb-4 text-5xl text-dark">
        {count}
      </Typography>
      <Typography variant="h5" color="blue-gray">
        {title}
      </Typography>
      <Typography color="gray">
        {desc}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "10+",
    title: "Procesos Optimizados",
    desc: "Hemos optimizado 10+ procesos para mejorar la eficiencia y la productividad de nuestros clientes."
  },
  {
    count: "5",
    title: "Aplicaciones",
    desc: "Las aplicaciones que creamos estan incluidas en en todo los procesos de nuestros clientes."
  },
  {
    count: "3",
    title: "Clientes",
    desc: "Somos pequeños pero ya los grandes confian en nosotros."
  },
 
];

export function FigmaPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-left">
            <Typography
              color="blue"
              className="font-bold text-lg mb-5"
            >
              Esto es lo que somos
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-2 leading-tight"
            >
              Shaddai Soft
            </Typography>
            <Typography color="blue-gray" className="mb-5 lg:w-[30rem] text-justify">
             Somos una empresa de desarrollo de software con un equipo profesional comprometido con la excelencia. Creamos soluciones tecnológicas innovadoras adaptadas a las necesidades de nuestros clientes.
            </Typography>
          </div>
          <div className="lg:flex relative">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div className="grid gap-y-16 gap-x-8 grid-cols-2 md:grid-cols-2 mb-8">
                  {stats.map((props, key) => (
                    <StatsCard key={key} {...props} />
                  ))}
                </div>
               
              </div>
            </div>
            <img src="components.png" alt="iphone" className="lg:w-1/2 rounded-3xl hidden md:flex ml-auto lg:absolute -right-32 -top-24" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FigmaPresentation;
