import RouterContext from "./RouterContext";
import React, { Fragment, useCallback, useContext } from "react";

interface LinkProps {
  to: string;
}

const Link: React.FC<LinkProps> = ({ to, children }) => {
  const { push } = useContext(RouterContext);

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = useCallback(
    (evt) => {
      evt.preventDefault();
      push(to);
    },
    [to]
  );

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
