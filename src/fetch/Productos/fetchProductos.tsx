// lib/fetchProducts.ts
import { ProductInterface } from '../../interfaces/ProductoInterface';

export const fetchProducts = async (): Promise<ProductInterface[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/products`, 
    // {cache: 'no-cache'}
  );
  const products: ProductInterface[] = await res.json();
  return products;
};
