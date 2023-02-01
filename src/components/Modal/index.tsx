import * as React from "react";
import * as C from "./styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import Image from "next/image";
import { Product } from "../../type";
import { setProductsCart } from "../../redux/reducers/cartReducer";
import {
  setModalStatus,
  setProductModal,
} from "../../redux/reducers/modalReducer";
import {
  setAlertStatus,
  setAlertText,
} from "../../redux/reducers/alertReducer";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";

export const ModalProduct = () => {
  const dispatch = useDispatch();

  const theme = useAppSelector((state) => state.theme.status);
  const modalStatus = useAppSelector((state) => state.modal.status);
  const productModal: Product = useAppSelector((state) => state.modal.product);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    borderRadius: "8px",
    transform: "translate(-50%, -50%)",
    display: { md: "block", xs: "none" },
    width: { md: 880 },
    bgcolor: `${theme === "light" ? "#1a1a1a" : "background.paper"}`,
    border: "white",
    boxShadow: 24,
    p: 4,
  };

  const productsCart: Product[] = useAppSelector(
    (state) => state.openCart.products
  );

  const handleClose = () => dispatch(setModalStatus(false));

  const handlePlusQuantity = () => {
    if (productModal.quantityAtCart !== 10) {
      let cloneProduct = { ...productModal };
      cloneProduct.quantityAtCart = cloneProduct.quantityAtCart + 1;
      dispatch(setProductModal(cloneProduct));
    }
  };

  const handleMinusQuantity = () => {
    if (productModal.quantityAtCart !== 1) {
      let cloneProduct = { ...productModal };
      cloneProduct.quantityAtCart = cloneProduct.quantityAtCart - 1;
      dispatch(setProductModal(cloneProduct));
    }
  };

  const handlePurchase = () => {
    let validate = productsCart.some((item) => {
      return productModal.id === item.id;
    });

    const productsCartClone = [...productsCart];

    if (!validate) {
      productsCartClone.push(productModal);

      localStorage.setItem("productsCart", JSON.stringify(productsCartClone));
      dispatch(setProductsCart(productsCartClone));
    } else {
      let cloneCart: Product[] = [];
      productsCartClone.forEach((item, index) => {
        if (item.id === productModal.id) {
          let cloneItem = { ...item };
          cloneItem.quantityAtCart = productModal.quantityAtCart;
          cloneCart.push(cloneItem);
        } else {
          cloneCart.push(item);
        }
      });

      localStorage.setItem("productsCart", JSON.stringify(productsCartClone));
      dispatch(setProductsCart([...cloneCart]));
    }

    dispatch(setAlertStatus(true));
    dispatch(setAlertText("Produto adicionado!"));
    handleClose();
  };

  return (
    <div>
      <Modal
        open={modalStatus}
        onClose={handleClose}
        closeAfterTransition={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <C.Container theme={theme}>
            <C.ContainerImage>
              <Image
                priority
                src={productModal.photo}
                alt={productModal.name}
                width={350}
                height={330}
                draggable={false}
              />
              <CloseTwoToneIcon onClick={handleClose} className="closeIcon" />
            </C.ContainerImage>
            <C.ContainerContent>
              <C.NameProduct theme={theme}>{productModal.name}</C.NameProduct>
              <C.Information theme={theme}>
                <span>Informações:</span>

                {productModal.description}
              </C.Information>
              <C.Brand theme={theme}>
                <span>Marca: </span>
                {productModal.brand}
              </C.Brand>
              <C.PriceContainer theme={theme}>
                <span>Preço:</span>
                <C.Price theme={theme}>{`R$${parseFloat(
                  productModal.price
                ).toFixed()}`}</C.Price>
              </C.PriceContainer>
              <Divider sx={{ marginBottom: "10px" }} />
              <C.ContainerPurchase>
                <C.ContainerQuantity theme={theme}>
                  <C.Minus theme={theme} onClick={handleMinusQuantity}>
                    -
                  </C.Minus>
                  <C.Quantity>{productModal.quantityAtCart}</C.Quantity>
                  <C.Plus theme={theme} onClick={handlePlusQuantity}>
                    +
                  </C.Plus>
                </C.ContainerQuantity>
                <C.Purchase theme={theme} onClick={handlePurchase}>
                  COMPRAR
                </C.Purchase>
              </C.ContainerPurchase>
            </C.ContainerContent>
          </C.Container>
        </Box>
      </Modal>
    </div>
  );
};
