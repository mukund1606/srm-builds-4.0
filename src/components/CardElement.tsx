import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export type CardData = {
  title: string;
  description?: string;
  image: string;
};

export function CardElement({ data }: { data: CardData }) {
  return (
    <>
      <Card
        shadow="md"
        isPressable
        isFooterBlurred
        className="group relative w-full bg-opacity-10 hover:scale-105"
        radius="lg"
      >
        <CardBody className="overflow-visible p-8">
          <div className="flex w-full justify-center">
            <Image
              radius="none"
              width="100%"
              alt={data.title}
              src={data.image}
              className="max-h-[14rem] w-auto object-cover"
            />
          </div>
          {data.description && (
            <div className="text-md absolute inset-1 z-20 flex items-center justify-center rounded-xl bg-background bg-opacity-80 px-3 py-6 text-center font-semibold opacity-0 drop-shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 lg:text-lg">
              {data.description}
            </div>
          )}
        </CardBody>
        <CardFooter className="mb-1 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white">
          <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text p-1 text-center text-large font-extrabold text-transparent">
            {data.title}
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
