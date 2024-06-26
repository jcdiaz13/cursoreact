import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/product/1">Producto 1</NavLink>
          </li>
          <li>
            <NavLink to="/starwars">Star Wars</NavLink>
          </li>
          {/* <li>
            <Link to="/ajksdfkjhasdk"> Ejemplo de error en la url</Link>
          </li> */}
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
