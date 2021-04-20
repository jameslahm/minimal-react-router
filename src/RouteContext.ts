import React from "react";

interface RouteContextValue {
  params: {
    [x: string]: string;
  };
}

const RouteContext = React.createContext<RouteContextValue>({
  params: {},
});

export default RouteContext;
