import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("");
  
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
   useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );

        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(`Failed to load categories: ${err.message}`);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url =
          selectedCategory === ""
            ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${selectedCategory}`;

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(`Failed to load products: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

    if (error) {
    return <div className="error">Error: {error}</div>;
  }
  if (loading) {
    return <div className="loading">Loading...</div>;
  }


  return (
  <>
  <h1>Products</h1>

     {/* Category filter*/}
      <div className="category-list">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product grid*/}
      <div className="product-grid">
      {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="product-link">
          <div className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-title">{product.title}</h3>
            {/* <p className="product-description"></p> */}

          </div>
          </Link>
        ))}
      </div>
  </>
    )
}

export default ProductList