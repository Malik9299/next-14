"use client";
import { FC, Fragment, useState } from "react";
import Categores from "./Categories";

import Products from "./Products";
import { useCategories } from "@/hooks/useCategories";
import { useProducts } from "@/hooks/useProducts";

const FetchApi: FC = () => {
  const [categoryId, setCategoryId] = useState<number | undefined>(1);

  const handleCategoryClick = (id: number) => {
    setCategoryId(id);
  };
  const { data: categories } = useCategories({ setCategoryId });
  const { data: filterProducts } = useProducts({ categoryId, categories });

  return (
    <Fragment>
      <Categores
        categories={categories}
        handleCategoryClick={handleCategoryClick}
      />
      <Products filterProducts={filterProducts} />
    </Fragment>
  );
};

export default FetchApi;
