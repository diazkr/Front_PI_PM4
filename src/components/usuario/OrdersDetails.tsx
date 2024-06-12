"use client";
import fetchUserData from "@/fetch/usuario/fetchUserData";
import { OrderInterface, UserInterface } from "@/interfaces/UserInterface";
import { useEffect, useState } from "react";
import CardPedido from "../pedidos/CardPedido";
import { Divider } from "@mui/material";
import CardInfoOrder from "../pedidos/CardInfoOrder";

const getUserIdFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const userId = localStorage.getItem("userId");
    return userId ? userId : null;
  }
  return null;
};

const getTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return token ? token : null;
  }
  return null;
};

const fetchOrderDetails = async (orderId: string) => {
  const token = getTokenFromLocalStorage();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${apiUrl}/orders/${orderId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    });
    return await response.json();
  } catch (error) {
    console.error(`Error fetching order ${orderId}:`, error);
    return null;
  }
};
const OrdersDetails: React.FC<OrderInterface> = ({ date, id }) => {
  const [userData, setUserData] = useState<UserInterface | null>(null);
  const [orderIds, setOrderIds] = useState<string[]>([]);
  const [orderDetails, setOrderDetails] = useState<any[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = getUserIdFromLocalStorage();
      if (userId) {
        const data = await fetchUserData(userId);
        setUserData(data);
        console.log("soy la data", data);
        const ids = data.orders.map((order: { id: string }) => order.id);
        setOrderIds(ids);
        console.log(ids);
      } else {
        console.error("No se encontró userId en el localStorage");
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchAllOrderDetails = async () => {
      const detailsPromises = orderIds.map((id) => fetchOrderDetails(id));
      const details = await Promise.all(detailsPromises);
      setOrderDetails(details.filter((detail) => detail !== null)); // Filtrar respuestas nulas
    };

    if (orderIds.length > 0) {
      fetchAllOrderDetails();
    }
  }, [orderIds]);

  useEffect(() => {
    console.log("Detalles de las órdenes:", orderDetails);
  }, [orderDetails]);

  return (
    <div className="p-4">
      <h1 className=" text-center font-semibold text-lg">
        Detalles de las órdenes
      </h1>
      <ul>
        {orderDetails.map((order, index) => (
          <li key={index}>
            <CardInfoOrder
              id={order.id}
              fecha={order.date}
              total={order.orderDetail.price}
            ></CardInfoOrder>
            <ul>
              {order.orderDetail.products.map((product: any) => (
                <li key={product.id}>
                  <CardPedido
                    name={product.name}
                    imgUrl={product.imgUrl}
                    price={product.price}
                  />
                  <Divider className="w-full" />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersDetails;
