import { Category, Product } from "@/type";
import { useEffect, useState } from "react";

export const useProducts = ({
  categoryId,
  categories,
}: {
  categoryId: number | undefined;
  categories: Category[];
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const productJsonData = await response.json();
        setProducts(productJsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      //   console.log("Cleanup function called");
    };
  }, [categoryId, categories]);
  useEffect(() => {
    const firstProductData = () => {
      const sortedData = [...products].sort((a, b) => {
        return a.category.id === categoryId
          ? -1
          : b.category.id === categoryId
          ? 1
          : 0;
      });

      setFilterProducts(sortedData);
    };
    firstProductData();
  }, [categoryId, products]);

  return { data: filterProducts };
};
