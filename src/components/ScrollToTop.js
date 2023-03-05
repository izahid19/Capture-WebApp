import { useEffect } from "react";

const { useLocation } = require("react-router-dom");

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollToTop;