import React from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { Compare } from "../ui/compare";

export function DevPresentation() {
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-10 py-12">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="mb-8">
            <Typography
              color="blue"
              className="flex items-center font-bold text-lg mb-5"
            >
              Un Antes y un Después de Nosotros
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 leading-tight"
            >
              Deja de usar Excel en exceso, y empieza a usar tus propias soluciones
            </Typography>
            <Typography color="blue-gray" className="lg:pr-32">
              Nosotros nos encargamos de que tu empresa tenga la mejor herramienta
              para gestionar tus procesos, lo hacemos a tu medida, a tu ritmo y que te facilite
              la vida.
            </Typography>
          </div>
          <div className="h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
            <div
              style={{
                transform: "rotateX(10deg) translateZ(100px)",
              }}
              className="p-1 rounded-xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 mt-10 md:mt-0  w-full h-full"
            >
              <Compare
                firstImage="captura-excel.PNG"
                secondImage="captura-app.PNG"
                firstImageClassName="object-cover object-left-top w-full"
                secondImageClassname="object-cover object-right-top w-full"
                className="w-full h-full rounded-[22px] md:rounded-sm"
                slideMode="hover"
                autoplay={true}
                autoplayDuration={10000}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;
