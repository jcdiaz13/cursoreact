import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Producto{id}</h1>
      <p>Producto{id}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        reiciendis quis molestias, eligendi adipisci quo impedit cupiditate aut
        nesciunt eaque ex quisquam sit ad corrupti officia deserunt corporis
        odit voluptatum!
      </p>
    </div>
  );
};

export default Product;
