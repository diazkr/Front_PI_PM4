import Detail from "@/components/productos/Detail";
import { fetchProductDetail } from "@/fetch/Productos/fetchProductDetail";
import React from "react";

interface DetailPageProps {
  params: {
    id: string;
  };
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  rate: number;
  stock: number;
  category: any;
}

const DetailPage: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="mt-12">
      <Detail
        id={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        imgUrl={product.imgUrl}
        rate={product.rate}
        stock={product.stock}
        category={product.category}
      />
    </div>
  );
};

const Page = async ({ params }: DetailPageProps) => {
  const product = await fetchProductDetail(params.id);

  return <DetailPage product={product} />;
};

export default Page;
