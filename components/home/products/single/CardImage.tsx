import { Card } from "@/components/ui/card";

interface CardImageProps {
  image: string;
}

export function CardImage({ image }: CardImageProps) {
  return (
    <Card className="overflow-hidden p-0 rounded-none">
      <div className="relative aspect-video">
        <div className="absolute inset-0 z-10 bg-black/35" />

        <img
          src={image}
          alt="Card"
          className="h-full w-full object-cover brightness-75"
        />
      </div>
    </Card>
  );
}