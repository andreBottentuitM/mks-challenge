import { ProductItem } from "../components/ProductItem";
import { Sidebar } from "../components/Sidebar";
import { Product } from "../type";
import { useEffect } from "react";
import Head from "next/head";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import * as C from "../styles/home";
import { useDispatch } from "react-redux";
import { setLoadingStatus } from "../redux/reducers/loadingReducer";
import { ModalProduct } from "../components/Modal";
import { setAlertStatus, setAlertText } from "../redux/reducers/alertReducer";
import { setProductsTotal } from "../redux/reducers/productsReducer";
import { setProductsCart } from "../redux/reducers/cartReducer";
import { setThemeStatus } from "../redux/reducers/themeReducer";
import { useAppSelector } from "../redux/hooks/useAppSelector";

type Products = Product[];

export default function Home() {
  const dispatch = useDispatch();

  const productsCart = useAppSelector((state) => state.openCart.products);
  const loading = useAppSelector((state) => state.loading.status);
  const themeStatus = useAppSelector((state) => state.theme.status);
  const productsTotal: Products = useAppSelector(
    (state) => state.products.productsTotal
  );

  useEffect(() => {
    const productsAtCartLocal = localStorage.getItem("productsCart")
      ? JSON.parse(localStorage.getItem("productsCart") as string)
      : productsCart;
    dispatch(setProductsCart(productsAtCartLocal));

    const themeAtLocal = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : themeStatus;
    dispatch(setThemeStatus(themeAtLocal));

    const gettingDataApi = async () => {
      const MKS_API =
        "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC";

      try {
        const gettingDatas = await fetch(MKS_API);
        const datas = await gettingDatas.json();

        dispatch(setLoadingStatus(false));

        datas.products.map((item: Product) => {
          item.quantityAtCart = 1;
        });

        dispatch(setProductsTotal([...datas.products]));
      } catch (e) {
        dispatch(setAlertStatus(true));
        dispatch(setAlertText("Error: Conexão não estabelecida!"));
      }
    };

    gettingDataApi();
  }, []);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <Head>
        <title>MKS Sistemas | E-commerce de dispositivos eletrônicos.</title>
        <meta
          name="title"
          content="MKS Sistemas | E-commerce de dispositivos eletrônicos."
        />
        <meta
          name="description"
          content="Aqui você encontra os melhores aparelhos eletrônicos pelo melhor preço!"
        />

        {/*FACEBOOK */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mks-sistemas.netlify.app/" />
        <meta
          property="og:title"
          content="MKS Sistemas | E-commerce de dispositivos eletrônicos."
        />
        <meta
          property="og:description"
          content="Aqui você encontra os melhores aparelhos eletrônicos pelo melhor preço!"
        />

        {/*TWITTER */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://mks-sistemas.netlify.app/"
        />
        <meta
          property="twitter:title"
          content="MKS Sistemas | E-commerce de dispositivos eletrônicos."
        />
        <meta
          property="twitter:description"
          content="Aqui você encontra os melhores aparelhos eletrônicos pelo melhor preço!"
        />
      </Head>
      {loading && (
        <C.ContainerSkeleton>
          {skeletons.map((item, key) => {
            return (
              <>
                <Stack
                  sx={{ display: { md: "flex", xs: "none" } }}
                  key={key}
                  spacing={1}
                >
                  <Skeleton variant="rectangular" width={214} height={170} />
                  <Skeleton variant="rectangular" width={214} height={30} />
                  <Skeleton variant="rectangular" width={214} height={10} />
                  <Skeleton variant="rounded" width={214} height={40} />
                </Stack>

                <Stack
                  sx={{ display: { md: "none", xs: "flex" } }}
                  key={item + 1}
                  spacing={1}
                >
                  <Skeleton variant="rectangular" width={270} height={220} />
                  <Skeleton variant="rectangular" width={270} height={40} />
                  <Skeleton variant="rectangular" width={270} height={10} />
                  <Skeleton variant="rounded" width={270} height={40} />
                </Stack>
              </>
            );
          })}
        </C.ContainerSkeleton>
      )}

      {!loading && (
        <>
          <C.ContainerGrid>
            {productsTotal.map((item: Product, key: number) => {
              return <ProductItem key={key} products={item} />;
            })}
          </C.ContainerGrid>
          <Sidebar />
          <ModalProduct />
        </>
      )}
    </>
  );
}
