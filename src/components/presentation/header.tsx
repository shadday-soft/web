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
import  Marquee  from "../Marquee";
import  {TextGenerateEffectDemo}  from "./textEffect";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

export function HeroPresentation() {
 
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white relative px-8 lg:mb-12">
      <BackgroundBeamsWithCollision>
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left pt-3">
            <div className="mb-8 inline-flex items-center">
              <Typography
                variant="small"
                className="mr-3 py-0.5 px-3 font-bold text-dark uppercase border-r border-dark"
              >
                Diseño
              </Typography>
              <Typography
                color="gray"
                variant="small"
                className="flex items-center mr-3 py-0.5 px-3 font-bold text-dark uppercase border-r border-dark"
              >
                Ingeniería
              </Typography>
              <Typography
                color="gray"
                variant="small"
                className="flex items-center font-bold uppercase"
              >
                Software
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 lg:mr-32 leading-tight font-black"
            >
              El aliado perfecto para <span className="text-blue">tu Negocio</span>
            </Typography>
            <TextGenerateEffectDemo></TextGenerateEffectDemo>
          
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#pricing">
                <Button color="gray" className="flex items-center">
                  ELIGE
                </Button>
              </a>
            </div>
          </div>
        </div>
        </BackgroundBeamsWithCollision>
        <div className="hidden lg:flex">
        <Marquee />
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroPresentation;
