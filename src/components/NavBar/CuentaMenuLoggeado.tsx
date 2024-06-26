import { Backdrop, IconButton, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PiUserCircleFill } from "react-icons/pi";

const CuentaMenuLoggeado = ({ onLogout }: { onLogout: () => void }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter()

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path: string) => {
    handleClose();
    router.push(path);
  };

  const handleLogout = () => {
    handleClose();
    onLogout();
    router.push("/");
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <div>
      <IconButton color="primary" size="large" onClick={handleClick}>
        <PiUserCircleFill />
      </IconButton>

      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        keepMounted
        open={isMenuOpen}
        onClose={handleClose}
        
      >
        <div className="px-4 py-2 font-semibold text-[#5C666F]">
            Mi cuenta
        </div>
        <MenuItem className="px-8 mx-4 my-2 bg-gray-300" onClick={() => handleMenuItemClick(`/usuario/${userId}`)}>
          Información
        </MenuItem>
        <MenuItem
          className="px-8 mx-4 my-2 "
          onClick={handleLogout}
          sx={{
            border: '1px solid #9ca3af',
          }}
        >
          Cerrar Sesión
        </MenuItem>
      </Menu>

      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(5px)",
        }}
        open={isMenuOpen}
        onClick={handleClose}
      />
    </div>
  );
};

export default CuentaMenuLoggeado;
