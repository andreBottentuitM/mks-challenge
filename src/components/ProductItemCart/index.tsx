import { Product } from "../../type";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import * as C from "./styles";
import Image from "next/image";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { setProductsCart } from "../../redux/reducers/cartReducer";
import { setProductsTotal } from "../../redux/reducers/productsReducer";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

type Props = {
  product: Product;
};

export const ProductItemCart = ({ product }: Props) => {
  
  const dispatch = useDispatch();
console.log(product)
  const productsCart = useAppSelector((state) => state.openCart.products);
  const theme = useAppSelector((state) => state.theme.status);
  const productsTotalCart = useAppSelector((state) => state.products.productsTotal);

  const handlePlusQuantity = () => {
    if (product.quantityAtCart !== 10) {
      const productsTotalClone: Product[] = [...productsTotalCart];
      let cloneProduct = { ...product };

      let indexTotal = 0;

      productsTotalClone.forEach((item, index) => {
        if (item.id === cloneProduct.id) {
          indexTotal = index;
        }
      });

      cloneProduct.quantityAtCart = cloneProduct.quantityAtCart + 1;

      const productsCartClone: Product[] = [...productsCart];

      const index = productsCartClone.indexOf(product);

      productsTotalClone[indexTotal] = cloneProduct;
      productsCartClone[index] = cloneProduct;
    //  localStorage.setItem('productsCart', JSON.stringify(productsCartClone))
   //   localStorage.setItem('products', JSON.stringify(productsTotalClone))
      dispatch(setProductsCart([...productsCartClone]));
      dispatch(setProductsTotal([...productsTotalClone]));
    }
  };

  const handleDelete = () => {
    const productsCartClone: Product[] = [...productsCart];
    const productsUpdated = productsCartClone.filter((item) => {
      return item.id !== product.id;
    });
   // localStorage.setItem('productsCart', JSON.stringify(productsUpdated))
    dispatch(setProductsCart([...productsUpdated]));
  };

  const handleMinusQuantity = () => {
    if (product.quantityAtCart !== 1) {
      const productsTotalClone: Product[] = [...productsTotalCart];
      let cloneProduct = { ...product };
      let indexTotal = 0;
      productsTotalClone.forEach((item, index) => {
        if (item.id === cloneProduct.id) {
          indexTotal = index;
        }
      });

      const productsCartClone: Product[] = [...productsCart];

      cloneProduct.quantityAtCart = cloneProduct.quantityAtCart - 1;

      const index = productsCartClone.indexOf(product);
      productsTotalClone[indexTotal] = cloneProduct;
      productsCartClone[index] = cloneProduct;
    //  localStorage.setItem('productsCart', JSON.stringify(productsCartClone))
    //  localStorage.setItem('products', JSON.stringify(productsTotalClone))
      dispatch(setProductsCart([...productsCartClone]));
      dispatch(setProductsTotal([...productsTotalClone]));
    }
  };

  return (
    <>
      <Box sx={{ display: { md: "flex", xs: "none" } }}>
        <C.Container theme={theme}>
          <Image
            priority
            src={product.photo}
            alt={product.name}
            width={50}
            height={55}
          />
          <C.NameProduct theme={theme}>{product.name}</C.NameProduct>
          <span className="quantityDescription">Qtd:</span>
          <C.ContainerQuantitaty theme={theme}>
            <C.Minus theme={theme} onClick={handleMinusQuantity}>
              -
            </C.Minus>
            <Divider orientation="vertical" flexItem />
            <div className="align">
              <span className="quantity">{product.quantityAtCart}</span>
            </div>
            <Divider orientation="vertical" flexItem />
            <C.Plus theme={theme} onClick={handlePlusQuantity}>
              +
            </C.Plus>
          </C.ContainerQuantitaty>
          <C.Value theme={theme}>{`R$${parseFloat(product.price).toFixed(
            0
          )}`}</C.Value>
          <CloseTwoToneIcon className="closedButton" onClick={handleDelete} />
        </C.Container>
      </Box>

      {/*========MOBILE========= */}

      <Box sx={{ display: { md: "none", xs: "flex" } }}>
        <C.ContainerMobile theme={theme}>
          <div className="imageContainer">
            <Image
              priority
              src={product?.photo}
              alt={product?.name}
              width={80}
              height={85}
            />
          </div>
          <C.NameProductMobile theme={theme}>
            {product?.name}
          </C.NameProductMobile>
          <C.ContainerValue>
            <C.ContainerQuantitatyMobile theme={theme}>
              <C.MinusMobile theme={theme} onClick={handleMinusQuantity}>
                -
              </C.MinusMobile>
              <Divider orientation="vertical" flexItem />
              <div className="align">
                <span className="quantity">{product?.quantityAtCart}</span>
              </div>
              <Divider orientation="vertical" flexItem />
              <C.PlusMobile theme={theme} onClick={handlePlusQuantity}>
                +
              </C.PlusMobile>
            </C.ContainerQuantitatyMobile>
            <C.ValueMobile theme={theme}>
              {`R$${parseFloat(product?.price).toFixed(0)}`}
            </C.ValueMobile>
          </C.ContainerValue>
          <CloseTwoToneIcon
            className="closedButtonMobile"
            onClick={handleDelete}
          />
        </C.ContainerMobile>
      </Box>
    </>
  );
};
