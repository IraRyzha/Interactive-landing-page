import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

export default function AppContext({ children }) {
  const [view, setView] = useState();

  useEffect(() => {
    const checkView = () => {
      if (window.innerWidth < 768) {
        setView("mobile");
      } else {
        setView("desktop");
      }
    };

    window.addEventListener("resize", checkView);

    checkView();

    return () => {
      window.removeEventListener("resize", checkView);
    };
  }, []);
  return (
    <MainContext.Provider value={{ view }}>{children}</MainContext.Provider>
  );
}
