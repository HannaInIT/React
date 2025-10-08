import { Link } from "react-router-dom";
import { useFavorites } from "./context/FavoritesContext.jsx";
import heartOutline from "./assets/heart-outlined.svg";
import heartFilled from "./assets/heart-filled.svg";

export default function ProductCard({ product }) {
  const { id, image, title } = product;
  const { isFav, toggle } = useFavorites();
  const fav = isFav(id);

  return (
    <div className="product-card">
      <button
        className="fav-button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle(id);
        }}
        aria-label={fav ? "remove from favorites" : "add to favorites"}
      >
        <img
          src={fav ? heartFilled : heartOutline}
          alt={fav ? "favorited" : "not favorited"}
          className="fav-icon"
        />
      </button>

      <Link to={`/product/${id}`} className="product-link">
        <img src={image} alt={title} className="product-image" />

        <div className="product-meta">
          <div className="product-title">{title}</div>
          <div className="product-bottom"></div>
        </div>
      </Link>
    </div>
  );
}
