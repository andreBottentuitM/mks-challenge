import * as C from "./styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { useEffect} from 'react'
import { setOpenCart } from "../../redux/reducers/cartReducer";
import { setThemeStatus } from "../../redux/reducers/themeReducer";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { setProductsCart } from "../../redux/reducers/cartReducer";
import {Product} from "../../type"

export const Layout = ({ children }: any) => {
 
  
  const dispatch = useDispatch(); 

  const productsCart = useAppSelector((state) => state.openCart.products);
  const modalStatus = useAppSelector((state) => state.modal.status);
  const themeStatus = useAppSelector((state) => state.theme.status);

  const length = productsCart?.length
  

  const handleOpenCart = () => {
    dispatch(setOpenCart(true));
  };

  const handleThemeMode = (theme: string) => {
    if (theme === "dark") {
      localStorage.setItem('theme', 'light')
      dispatch(setThemeStatus("light"));
    } else {
      localStorage.setItem('theme', 'dark')
      dispatch(setThemeStatus("dark"));
    }
  };

  return (
    <>
      <C.Header scroll={modalStatus} theme={themeStatus}>
        <C.Logo>
          MKS <span>Sistemas</span>
        </C.Logo>
        <C.ContainerNav>
          <C.ThemeMode theme={themeStatus}>
            <DarkModeIcon
              onClick={() => handleThemeMode("dark")}
              className="darkIcon"
            />
            <LightModeIcon
              onClick={() => handleThemeMode("light")}
              className="lightMode"
            />
          </C.ThemeMode>
          <C.Cart theme={themeStatus} onClick={handleOpenCart}>
            <ShoppingCartIcon className="cart-icon" />
            <div className="badge">{length}</div>
          </C.Cart>
        </C.ContainerNav>
      </C.Header>
      <C.Main modal={modalStatus} theme={themeStatus}>
        {children}
      </C.Main>
      <C.Footer theme={themeStatus}>
        MKS sistemas © Todos os direitos reservados
      </C.Footer>
    </>
  );
};


