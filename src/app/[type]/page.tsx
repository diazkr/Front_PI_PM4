// src/app/[type]/page.tsx
import React from 'react';
import ProductList from '@/components/productos/ProductList';
import { ProductInterface } from '@/interfaces/ProductoInterface';
import { fetchProducts } from '@/fetch/Productos/fetchProductos';

const TypePage = async () => {
  const products: ProductInterface[] = await fetchProducts();

  return (
    <div className='p-5'>
      <ProductList products={products} />
    </div>
  );
};

export default TypePage;
