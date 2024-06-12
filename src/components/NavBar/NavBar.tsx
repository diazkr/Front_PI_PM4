"use client";
import React, { useEffect, useState } from "react";
import NavListDrawer from "./NavListDrawer";
import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { AppBar, Box, Button, Drawer, IconButton } from "@mui/material";
import CuentaMenu from "./CuentaMenu";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CuentaMenuLoggeado from "./CuentaMenuLoggeado";
import { useAuth } from "../contextos/AuthContext";

function NavBar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { loggedIn, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const navLinks = [
    {
      title: "mujer",
      path: "/mujer",
    },
    {
      title: "hombre",
      path: "/hombre",
    },
    {
      title: "sales",
      path: "/sales",
    },
  ];

  const navLinkSecond = [
    {
      title: "home",
      path: "/",
    },
    {
      title: "ingresar",
      path: "/login",
    },
  ];
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          height: "auto",
          backgroundColor: scrolled
            ? "rgba(245, 245, 245, 0.9)"
            : "transparent",
          boxShadow: "none",
          transition: "background-color 0.3s ease-in-out",
        }}
        className="px-6 transition-all duration-300 hover:bg-[#F5F5F5] items-center"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <IconButton
            color="primary"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <IoMdMenu />
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: { sm: "row" },
              justifyContent: "space-between",
              width: "100%",
            }}
            className=" items-center"
          >
            <div>
              {navLinks.map((item) => (
                <Link href={item.path} passHref key={item.title}>
                  <Button
                    color="primary"
                    key={item.title}
                    className={`text-md hover:bg-transparent hover:text-[#947C65] ${
                      item.title === "sales" ? "text-[#9F5650]" : ""
                    }`}
                  >
                    {item.title}
                  </Button>
                </Link>
              ))}
              <Link href="/" passHref>
                <Button
                  color="primary"
                  className="text-md hover:bg-transparent hover:text-[#947C65] "
                  onClick={() => handleNavigation("/tiendas")}
                >
                  home
                </Button>
              </Link>
            </div>

            <div className="flex">
            {loggedIn ? <CuentaMenuLoggeado onLogout={logout} /> : <CuentaMenu />}
              <IconButton color="primary" size="large">
                <IoSearch />
              </IconButton>
              <IconButton color="primary" size="large" onClick={() => router.push('/carrito')}>
                <RiShoppingBag4Line />
              </IconButton>
            </div>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              flexDirection: "row",
              gap: 1,
            }}
          >
            <IconButton color="primary" size="large">
              {" "}
              <IoSearch />{" "}
            </IconButton>
            <IconButton color="primary" size="large">
              {" "}
              <RiShoppingBag4Line />{" "}
            </IconButton>
          </Box>
        </Box>
      </AppBar>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavListDrawer navLinks={navLinks} navLinkSecond={navLinkSecond} />
      </Drawer>
    </div>
  );
}

export default NavBar;
