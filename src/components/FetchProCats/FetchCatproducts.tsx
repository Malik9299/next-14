"use client";
import { Category } from "@/type";
import { FC, Fragment, useEffect, useState } from "react";

const FetchCatproducts: FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchCats = await fetch(
        "http://localhost:4000/categoriesFull?_start=0&_limit=5"
      );
      if (fetchCats.ok) {
        const categoresJson = await fetchCats.json();
        setCategories(categoresJson);
      } else {
        console.log("Error");
      }
    };
    fetchCategories();
  }, []);
  return (
    <Fragment>
      <div>FetchCatproducts</div>
      <div>Categoress</div>
      {categories.map((category) => (
        <div>{category.name}</div>
      ))}
    </Fragment>
  );
};
export default FetchCatproducts;
