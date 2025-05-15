import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

export function AstroSection() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          color="blue"
          shadow={false}
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8"
        >
          <CardBody className="md:py-20 md:px-14 md:w-7/12">
            <Typography color="white" className="font-bold">
              Nuestra Huella
            </Typography>
            <Typography
              variant="h3"
              color="white"
              className="mb-5 font-normal"
            >
              Porque Elegirnos?
            </Typography>
            <Typography variant="lead" color="white">
              Nuestros proceso de ingeniería y desarrollo de software nos hace diferentes. Nuestra misión es crear soluciones tecnológicas innovadoras que impulsen el éxito de nuestros clientes. Nuestro equipo está dedicado a brindar soluciones personalizadas y de alta calidad.
            </Typography>
          </CardBody>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
            <img
              src="logo.gif"
              alt="logo gif"
              className="h-full w-full object-cover md:absolute"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default AstroSection;
