import React, { useContext } from "react";
import Link from "./Link";
import Route from "./Route";
import RouteContext from "./RouteContext";
import Router from "./Router";
import Routes from "./Routes";

const Product: React.FC<{}> = () => {
  const { params } = useContext(RouteContext);

  return <div>Here you are Product {params.id}</div>;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"}>
          <div>Hello</div>
        </Route>
        <Route path={"/product/:id"}>
          <Product></Product>
        </Route>
      </Routes>
      <ul>
        <li>
          <Link to="/product/1">Produuct 1</Link>
        </li>
        <li>
          <Link to="/product/2">Produuct 2</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </Router>
  );
}

export default App;
