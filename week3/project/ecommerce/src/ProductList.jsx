import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import ProductCard from "./ProductCard";
import Header from "./components/Header";

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const {
    data: categories,
    loading: catLoading,
    error: catError,
    setUrl: setCatUrl,
  } = useFetch();

  const {
    data: products,
    loading: prodLoading,
    error: prodError,
    setUrl: setProdUrl,
  } = useFetch();

  useEffect(() => {
    setCatUrl("https://fakestoreapi.com/products/categories");
  }, [setCatUrl]);

  useEffect(() => {
    setProdUrl(
      selectedCategory === ""
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${selectedCategory}`
    );
  }, [selectedCategory, setProdUrl]);

  if (catError || prodError) {
    return (
      <div className="error">
        Error: {(catError || prodError)?.message || "Failed to load"}
      </div>
    );
  }
  if (catLoading || prodLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <Header title="Products" />

      {/* Category filter*/}
      <div className="category-list">
        {categories?.map((category) => (
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
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
