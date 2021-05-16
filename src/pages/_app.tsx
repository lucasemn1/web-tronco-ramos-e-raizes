import { useRouter } from "next/router";
import { useEffect } from "react";
import AuthProvider from "../providers/auth-provider";
import "../styles/globals.scss";
import MuseumTemplate from "../templates/museum-template";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    console.log(router);
  }, [router.asPath]);

  function switchTemplateToRender() {
    const { pathname } = router;

    const pathnamesWithOutTemplate = ["/login", "/_error"];

    return pathnamesWithOutTemplate.includes(pathname) ? (
      <Component {...pageProps} />
    ) : (
      <MuseumTemplate>
        <Component {...pageProps} />
      </MuseumTemplate>
    );
  }

  return <AuthProvider>{switchTemplateToRender()}</AuthProvider>;
}

export default MyApp;
