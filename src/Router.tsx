import { useCallback, useEffect, useMemo, useState } from "react";
import RouterContext from "./RouterContext";
import React from "react";

const Router: React.FC<{}> = ({ children }) => {
  const [location, setLocation] = useState(window.location.pathname);

  const handlePush = useCallback((path) => {
    window.history.pushState({}, "", path);
    setLocation(path);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setLocation(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const routerContextValue = useMemo(() => {
    return {
      location,
      push: handlePush,
    };
  }, [location]);

  return (
    <RouterContext.Provider value={routerContextValue}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
