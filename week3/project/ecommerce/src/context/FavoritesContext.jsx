import { createContext, useState, useEffect, useContext } from "react";

export const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favs, setFavs] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favs") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  const add = (id) => setFavs((s) => (s.includes(id) ? s : [...s, id]));
  const remove = (id) => setFavs((s) => s.filter((i) => i !== id));
  const toggle = (id) =>
    setFavs((s) => (s.includes(id) ? s.filter((i) => i !== id) : [...s, id]));
  const isFav = (id) => favs.includes(id);

  return (
    <FavoritesContext.Provider value={{ favs, add, remove, toggle, isFav }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === null) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
