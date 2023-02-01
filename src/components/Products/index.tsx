import { Product } from "../../type";
import { useState } from "react";
import Image from "next/image";
import * as C from "./styles";
import { setProductModal } from "../../redux/reducers/modalReducer";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { useDispatch } from "react-redux";
import { setProductsCart } from "../../redux/reducers/cartReducer";
import {
  setAlertStatus,
  setAlertText,
} from "../../redux/reducers/alertReducer";
import { setModalStatus } from "../../redux/reducers/modalReducer";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import Box from "@mui/material/Box";

interface Props {
  products: Product;
}

export const ProductItem = (item: Props) => {
  const { products } = item;

  const [hoverState, setHoverState] = useState(false);

  const dispatch = useDispatch();

  const productsCart = useAppSelector((state) => state.openCart.products);
  const theme = useAppSelector((state) => state.theme.status);

  const handleAddProduct = () => {
    let productCartClone: Product[] = [...productsCart];

    let productClone = { ...products };

    let validationAddCart = productCartClone.some((item: Product) => {
      return item.id === products.id;
    });

    if (!validationAddCart) {
      productCartClone.push(productClone);
      localStorage.setItem("productsCart", JSON.stringify(productCartClone));
      dispatch(setProductsCart(productCartClone));

      dispatch(setAlertStatus(true));
      dispatch(setAlertText("Produto adicionado!"));
    } else {
      dispatch(setAlertStatus(true));
      dispatch(setAlertText("Produto já adicionado!"));
    }
  };

  const openModal = () => {
    dispatch(setModalStatus(true));
    let cloneProduct = { ...products };
    dispatch(setProductModal(cloneProduct));
  };

  return (
    <>
      <C.Container
        onMouseOver={() => setHoverState(true)}
        onMouseOut={() => setHoverState(false)}
        theme={theme}
      >
        <C.ContainerModal onClick={openModal}>
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              margin: "10px auto 0 20px",
            }}
          >
            <Image
              priority
              src={products?.photo}
              alt={products?.name}
              width={180}
              height={140}
            />
          </Box>
          <Box
            sx={{
              display: { md: "none", xs: "flex" },
              margin: "10px auto 0 auto",
            }}
          >
            <Image
              src={products?.photo}
              alt={products?.name}
              width={190}
              height={170}
              priority
            />
          </Box>
          <C.ContainerName>
            <C.NameProduct theme={theme}>{products?.name}</C.NameProduct>
            <C.PriceProduct theme={theme}>{`R$${parseFloat(
              products?.price
            ).toFixed(0)}`}</C.PriceProduct>
          </C.ContainerName>
          <C.Description theme={theme}>
            Redesigned from scratch and completely revised.
          </C.Description>
          <C.ContainerImage theme={theme} hover={hoverState}>
            <OpenInFullIcon sx={{ fontSize: "25px" }} />
          </C.ContainerImage>
        </C.ContainerModal>

        <C.ContainerButton theme={theme} onClick={handleAddProduct}>
          <ShoppingBagOutlinedIcon className="shoppingIcon" />
          <span>COMPRAR</span>
        </C.ContainerButton>
      </C.Container>
    </>
  );
};
