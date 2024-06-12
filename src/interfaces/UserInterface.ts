export interface OrderInterface {
    id: string;
    date: string;
}

export interface UserInterface {
    id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
    country: string;
    city: string;
    orders: OrderInterface[];
  }
  