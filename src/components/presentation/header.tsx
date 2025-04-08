import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import {
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export function HeroPresentation() {
 
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white relative px-8 py-8 lg:mb-36">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left pt-32">
            <div className="mb-8 inline-flex items-center">
              <Typography
                variant="small"
                className="mr-3 py-0.5 px-3 font-bold text-dark uppercase border-r border-dark"
              >
                Diseño
              </Typography>
              <Typography
                color="dark"
                variant="small"
                className="flex items-center font-bold uppercase"
              >
                ingeniería
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 lg:mr-32 leading-tight font-black"
            >
              El aliado perfecto para <span className="text-blue">tu Negocio</span>
            </Typography>
            <Typography variant="lead" color="blue-gray" className="lg:pr-32 text-justify">
             En Shaddai estamos comprometidos a brindarte soluciones tecnológicas de alta calidad y a la medida de tus necesidades. Nuestro equipo de expertos está listo para ayudarte a llevar tu negocio al siguiente nivel.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#pricing">
                <Button color="dark" className="flex items-center">
                  ELIGE
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <img src="header.png" alt="components" className="absolute -top-10 right-0 w-1/2" />
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroPresentation;
