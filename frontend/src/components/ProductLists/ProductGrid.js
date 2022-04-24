// import { GetAllProducts } from "../../services/Products.service";
import { CardGroup } from "reactstrap";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductGrid = () => {
  const products = useFetchProducts();

  return (
    <div className="container d-flex mt-5">
      <div className="row mt-5">
        {products.map((product) => (
          <CardGroup className="col-4" key={product.id}>
            <ProductCard  {...product} />
          </CardGroup>
        ))}
      </div>
    </div>
  );
};
