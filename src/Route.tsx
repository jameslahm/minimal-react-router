import React, { Fragment } from "react";

interface RouteProps {
  path: string;
}

const Route: React.FC<RouteProps> = ({ path, children }) => {
  return <Fragment>{children}</Fragment>;
};

export default Route;
