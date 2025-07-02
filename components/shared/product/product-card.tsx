import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";
const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm p-3">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images![0]}
            alt={product.name}
            className="aspect-square object-cover rounded"
            width={300}
            height={300}
            priority={true}
          />
        </Link>
      </CardHeader>

      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
      </CardContent>

      <Link href={`/product/${product.slug}`}>
        <h2 className="text-sm font-medium">{product.name}</h2>
      </Link>

      <div className="flex-between gap-4">
        <div>{product.rating} Stars</div>
        {product.stock > 0 ? (
          <ProductPrice value={Number(product.price)} />
        ) : (
          <p className="text-destructive">Out of Stock</p>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
