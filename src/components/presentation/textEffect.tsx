"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
 
const words = `En Shaddai estamos comprometidos en brindarte soluciones tecnológicas de alta calidad y a la medida de tus necesidades. Nuestro equipo de expertos está listo para ayudarte a llevar tu negocio al siguiente nivel
`;
 
export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}