import { Product } from "@/type";
import { FC, Fragment } from "react";

const style = {
  productContainer: {
    display: "flex",
    flexDirection: "row" as const,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  products: {
    height: "10vh",
    width: "435px",
    border: "1px solid #ffffff",
    background: "#8975ae",
    margin: "10px 0px 10px 10px",
  },
  image: {
    height: "95px",
    width: "95px",
    borderRadius: "50px",
  },
  about: {
    margin: "10px 0px 10px 15px",
  },
  title: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "300px",
  },
  description: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "300px",
  },
  priceCategory: {
    display: "flex",
    flexDirection: "row" as const,
  },
  priceCategoryAdjustment: {
    padding: "25px 50px 0px 0px",
  },
};

const Products: FC<{ filterProducts: Product[] }> = ({ filterProducts }) => {
  return (
    <Fragment>
      <div>
        {filterProducts.map((product) => {
          return (
            <div style={style.products} key={product.id}>
              <div style={style.productContainer}>
                <div>
                  <img style={style.image} src={product.images[0]} />
                </div>
                <div style={style.about}>
                  <div style={style.title}>{product.title}</div>
                  <div style={style.description}>{product.description}</div>
                  <div style={style.priceCategory}>
                    <div style={style.priceCategoryAdjustment}>
                      {product.price}
                    </div>
                    <div style={style.priceCategoryAdjustment}>
                      {product.category.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default Products;
