import React, { useContext } from "react";
import { Key, pathToRegexp } from "path-to-regexp";
import RouterContext from "./RouterContext";
import RouteContext from "./RouteContext";

const Routes: React.FC<{}> = ({ children }) => {
  const { location, push } = useContext(RouterContext);

  const matches = React.Children.map(children, (child) => {
    const keys: Key[] = [];
    // TODO: check path exist
    const path = (child as { props: { path: string } }).props.path as string;
    const regexpPath = pathToRegexp(path, keys);
    const regexpRes = regexpPath.exec(location);
    if (regexpRes) {
      return {
        params: {
          ...Object.fromEntries(
            keys.map((key, index) => {
              return [key.name, regexpRes[1 + index]];
            })
          ),
        },
        route: child,
      };
    }
  });

  const match = (matches as Exclude<typeof matches, null | undefined>)[0];

  return (
    <RouteContext.Provider value={{ params: match.params }}>
      {match.route}
    </RouteContext.Provider>
  );
};

export default Routes;
