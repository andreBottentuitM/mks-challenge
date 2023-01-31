import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { ProductItemCart } from "../ProductItemCart/index";
import { Product } from "../../type";
import * as C from "./styles";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { setOpenCart } from "../../redux/reducers/cartReducer";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const openCart = useAppSelector((state) => state.openCart.open);
  const productsCart = useAppSelector((state) => state.openCart.products);
  const theme = useAppSelector((state) => state.theme.status);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let valueTotalBooks = 0;
    productsCart.forEach((product: Product) => {
      valueTotalBooks += product.quantityAtCart * parseInt(product.price);
    });
    setTotal(valueTotalBooks);
  }, [productsCart]);

  const handleClosed = () => {
    dispatch(setOpenCart(false));
  };

  const sideBar = (
    <Box
      role="presentation"
      sx={{
        width: { sm: "450px" },
        backgroundColor: `${theme === "light" ? "black" : "#0F52BA"}`,
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <C.ContainerSideBar>
        <C.HeaderSidebar theme={theme}>
          <C.TitleSidebar>Carrinho de compras</C.TitleSidebar>
          <CloseTwoToneIcon onClick={handleClosed} className="closedIcon" />
        </C.HeaderSidebar>
        <C.ContainerProducts>
          {productsCart.map((item: Product, key: number) => {
            return <ProductItemCart key={key} product={item} />;
          })}
        </C.ContainerProducts>
        <C.ContainerBottom>
          <C.ContainerPrice>
            <C.Total>Total:</C.Total>
            <span>{`R$${total}`}</span>
          </C.ContainerPrice>
          <C.ButtonPurchase theme={theme}>Finalizar Compra</C.ButtonPurchase>
        </C.ContainerBottom>
      </C.ContainerSideBar>
    </Box>
  );

  const sideBarMobile = (
    <Box
      role="presentation"
      sx={{
        width: { xs: "320px" },
        backgroundColor: `${theme === "light" ? "black" : "#0F52BA"}`,
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <C.ContainerSideBarMobile>
        <C.HeaderSidebarMobile theme={theme}>
          <C.TitleSidebarMobile>Carrinho de compras</C.TitleSidebarMobile>
          <CloseTwoToneIcon
            onClick={handleClosed}
            className="closedIconMobile"
          />
        </C.HeaderSidebarMobile>
        <C.ContainerProductsMobile>
          {productsCart.map((item: Product, key: number) => {
            return <ProductItemCart key={key + 1} product={item} />;
          })}
        </C.ContainerProductsMobile>
        <C.ContainerBottomMobile>
          <C.ContainerPriceMobile>
            <C.TotalMobile>Total:</C.TotalMobile>
            <span>{`R$${total}`}</span>
          </C.ContainerPriceMobile>
          <C.ButtonPurchaseMobile theme={theme}>
            Finalizar Compra
          </C.ButtonPurchaseMobile>
        </C.ContainerBottomMobile>
      </C.ContainerSideBarMobile>
    </Box>
  );

  return (
    <div>
      <Drawer
        sx={{ display: { md: "flex", xs: "none" } }}
        anchor={"right"}
        open={openCart}
        onClose={handleClosed}
      >
        {sideBar}
      </Drawer>
      <Drawer
        sx={{ display: { md: "none", xs: "flex" } }}
        anchor={"right"}
        open={openCart}
        onClose={handleClosed}
      >
        {sideBarMobile}
      </Drawer>
    </div>
  );
};
