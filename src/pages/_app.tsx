// Next
import { useRouter } from "next/router";

// Providers
import AuthProvider from "../providers/auth-provider";

// Template
import MuseumTemplate from "../templates/museum-template";

// Styles
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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
