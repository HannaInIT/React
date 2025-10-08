import { useEffect, useState } from "react";
import { useFavorites } from "./context/FavoritesContext";
import ProductCard from "./ProductCard";
import Header from "./components/Header";

export default function Favorites() {
  const { favs } = useFavorites();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (favs.length === 0) {
      setProducts([]);
      return;
    }

    setLoading(true);
    setError(null);
    const urls = favs.map((id) => `https://fakestoreapi.com/products/${id}`);
    Promise.all(urls.map((u) => fetch(u).then((r) => r.json())))
      .then((results) => setProducts(results))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [favs]);

  if (error) return <div className="error">Error loading favorites</div>;
  if (loading) return <div className="loading">Loading...</div>;

  if (products.length === 0)
    return <div className="empty">No favorites yet</div>;

  return (
    <div>
      <Header title="Favorites" />
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
