import { Typography } from "@material-tailwind/react";
import { cn } from "../../lib/utils";
import {
  IconHandMove,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Todo es Tuyo",
      description:
        "Nuestro servicio se ajusta completamente a tu negocio, no nos quedamos con nada.",
      icon: <IconHandMove />,
    },
    {
      title: "Facil Uso",
      description:
        "Nuestros productos son faciles de usar y entender.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Ajustado a tu presupuesto",
      description:
        "Nuestro servicio se ajusta a tu presupuesto, sin importar el tamaño de tu negocio.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Actualizado",
      description: "Estaremos actualizando tu producto todo el tiempo.",
      icon: <IconCloud />,
    },
   
   
 
   
  ];
  return (
    <div>
    <div className="flex justify-center align-center relative z-5">
      <Typography color="gray" className="text-xl mr-2 font-normal">
        ¿Que nos hace especiales?
      </Typography>
      
    </div>

    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  relative  py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>-
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800 cursor-pointer",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative px-4 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative  px-4">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100 text-justify">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative  px-4">
        {description}
      </p>
    </div>
  );
};
