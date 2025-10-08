import { Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function NavBar() {
  const { favs } = useFavorites();
  const navigate = useNavigate();

  function goFavorites(e) {
    e.preventDefault();
    if (favs.length === 1) {
      navigate(`/product/${favs[0]}`);
    } else {
      navigate(`/favorites`);
    }
  }

  return (
    <nav className="top-nav">
      <div className="nav-inner">
        <Link to="/" className="nav-link">
          Products
        </Link>

        <a href="/favorites" onClick={goFavorites} className="nav-link">
          Favorites
        </a>
      </div>
    </nav>
  );
}
