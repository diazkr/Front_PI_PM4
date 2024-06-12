import React from "react";
import { ProductInterface } from "../../interfaces/ProductoInterface";
import CarritoCard from "./CarritoCard";
import { Divider } from "@mui/material";

interface ProductListProps {
  products: ProductInterface[];
}

const CarritoList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="mt-12 flex flex-col justify-center items-center gap-2 w-full">
      <div className="flex justify-between items-center p-2 w-7/12">
        <div className="w-1/8 font-semibold text-[#282222]">Producto</div>
        <div className="text-base font-semibold mr-[15%] w-1/8 text-[#282222]">Total $</div>
      </div>
      <Divider className="w-7/12 mx-auto" />
      {products.map((product, index) => (
        <React.Fragment key={product.id}>
          <CarritoCard
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
            imgUrl={product.imgUrl}
            rate={product.rate}
            category={product.category}
          />
          {index < products.length - 1 && <Divider className="w-7/12 mx-auto" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CarritoList;
