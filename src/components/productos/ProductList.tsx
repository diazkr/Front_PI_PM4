import React from "react";
import { ProductInterface } from "../../interfaces/ProductoInterface";
import CardProducto from "./CardProducto";
import { GetServerSideProps } from "next";

interface ProductListProps {
  products: ProductInterface[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">      {products.map((product) => (
        <CardProducto
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          stock={product.stock}
          imgUrl={product.imgUrl}
          rate={product.rate}
          category={product.category}
        ></CardProducto>
      ))}
    </div>
  );
};



export default ProductList;
