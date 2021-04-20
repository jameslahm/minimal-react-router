import React from "react";

const RouterContext = React.createContext({
  location: "",
  push: (_: string) => {},
});

export default RouterContext;
