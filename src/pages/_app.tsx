import GlobalStyles from "../styles/global";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { AlertToast } from "../components/Alert";

export default function App({ Component, pageProps }: AppProps) {

  
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <AlertToast />
      </Provider>
    </>
  );
}
