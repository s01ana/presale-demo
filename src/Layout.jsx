import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { usePresaleData } from "./utils/PresaleContext";

const Layout = ({ pageTitle, children }) => {
  const { makeEmptyInputs } = usePresaleData();
  const location = useLocation();

  useEffect(() => {
    makeEmptyInputs();
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <Helmet>
        {/* title tag */}
        {pageTitle ? <title>{pageTitle}</title> : <title>Presale</title>}

        {/* favicon included here  */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* apple touch icon included here */}
        <link rel="apple-touch-icon" href="/favicon.ico" />

        {/* All font family included here */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* Inter font family */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        {/* Orbitron font family */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap"
          rel="stylesheet"
        />
        {/* Outfit font family */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
        {/* Kufam font family */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        {/* Bebas Neue font family */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* page content */}
      {children}
    </HelmetProvider>
  );
};

export default Layout;
