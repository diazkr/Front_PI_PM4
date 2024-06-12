// interfaces/ProductoInterface.ts
interface CategoryInterface {
    id: string;
    name: string;
  }
  
  export interface ProductInterface {
    id: string;
    name: string;
    description: string;
    price: number; // Si el precio es una cadena en el backend, mantenlo así
    stock: number;
    imgUrl: string;
    category: CategoryInterface;
    rate: number
  }
  