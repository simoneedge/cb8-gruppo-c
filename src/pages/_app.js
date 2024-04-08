import "@/styles/globals.css";
import MainLayout from "@/layout/MainLayout";
import { CookiesProvider } from "react-cookie";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <CookiesProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </CookiesProvider>
  );
}
