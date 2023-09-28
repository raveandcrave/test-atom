import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import cat from "@/cat.jpg";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center flex-1">
        <Image
          width={200}
          height={200}
          alt={product.title}
          src={product.image || cat}
        />
      </CardContent>
      <CardFooter className="flex justify-between items-center gap-2">
        <span>{product.price}$</span>
        <Button>
          <Link href={`/products/${product.id}`}>View product</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
