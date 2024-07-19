import { Fragment, FC } from "react";
import { Category } from "@/type";

const style = {
  container: {
    display: "flex",
    flexDirection: "row" as const,
    justifyContent: "flex-start",
    alignItems: "center",
    height: "15vh",
    //   border: "1px solid #ffffff",
  },
  item: {
    backgroundColor: "rgb(111 114 182)",
    padding: "20px",
    border: "1px solid #ccc",
    margin: "10px",
    cursor: "pointer",
  },
};

const Categores: FC<{
  categories: Category[];
  handleCategoryClick: (id: number) => void;
}> = ({ categories, handleCategoryClick }) => {
  return (
    <Fragment>
      <div>
        <div style={style.container}>
          {categories.map((cats) => {
            return (
              <div
                onClick={() => handleCategoryClick(cats.id)}
                style={style.item}
                key={cats.id}
              >
                {cats.name}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default Categores;
