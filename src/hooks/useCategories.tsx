import { Category } from "@/type";
import { useEffect, useState } from "react";

export const useCategories = ({
  setCategoryId,
}: {
  setCategoryId: (value: number | undefined) => void;
}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/categories?_start=0&_limit=5"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setCategories(jsonData);
        if (jsonData.length > 0) {
          setCategoryId(jsonData[0].id);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      //   console.log("Cleanup function called");
    };
  }, [setCategoryId]);

  return { data: categories };
};
