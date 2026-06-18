import { useEffect, useState } from "react";
import recipes from "../data/recipes.json";

export function useRecipes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: replace with real fetch
    setData(recipes);
  }, []);

  return data;
}
