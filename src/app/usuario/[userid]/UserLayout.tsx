"use client";
import FAQContent from "@/components/usuario/FAQContent";
import OrdersDetails from "@/components/usuario/OrdersDetails";
import PrivacyContent from "@/components/usuario/PrivacyContent";
import ReturnsContent from "@/components/usuario/ReturnsContent";
import UserDetail from "@/components/usuario/UserDetail";
import { UserInterface } from "@/interfaces/UserInterface";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FaUserCog } from "react-icons/fa";

const UserLayout: React.FC<UserInterface> = ({ id, name, email, address,phone, country, city, orders }) => {
  const menuItems = [
    {
      text: "Pedidos",
      content: (
        <OrdersDetails
          date={"orders[0]?.date"}
          id={"orders[0]?.id"}
        />
      ),
    },
    {
      text: "Información personal",
      content: (
        <UserDetail
          id={id}
          name={name}
          email={email}
          address={address}
          phone={phone}
          country={country}
          city={city}
          orders={orders}
        />
      ),
    },
    { text: "Política de privacidad", content: <PrivacyContent /> },
    { text: "Devoluciones y garantías", content: <ReturnsContent /> },
    { text: "Preguntas frecuentes", content: <FAQContent /> },
  ];

  const [selectedContent, setSelectedContent] = useState<React.ReactNode>(
    menuItems[0].content
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: number, content: React.ReactNode) => {
    setSelectedIndex(index);
    setSelectedContent(content);
  };

  return (
    <Box className="flex justify-center items-center min-h-[80vh]">
      <div className="flex flex-col md:flex-row md:w-3/4 gap-12">
        <Box className="md:w-1/3">
          <div className="flex flex-col justify-between items-center">
            <FaUserCog className="m-2 text-[3em] text-[#282222]" />
            <p className="bg-[#282222] py-3 text-center text-[#F5F5F5] font-semibold w-full drop-shadow-md">
              Información
            </p>
          </div>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleListItemClick(index, item.content)}
                style={{
                  backgroundColor:
                    index === selectedIndex ? "#e5e7eb" : "transparent",
                }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
        <div className="md:w-2/3 mt-[3em] flex align-baseline bg-white md:h-[50vh]">
          <div className="drop-shadow-md overflow-y-auto w-full">
            {selectedContent}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default UserLayout;