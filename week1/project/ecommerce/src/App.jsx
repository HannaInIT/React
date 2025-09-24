import { useState } from "react";
import allProducts from "./fake-data/all-products";
import allCategories from "./fake-data/all-categories";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => {
          const productCategory = product.category.replace("FAKE: ", "");
          const filterCategory = selectedCategory.replace("FAKE: ", "");
          return productCategory === filterCategory;
        });

  return (
    <div className="App">
      <h1 className="product-title">Products</h1>

      {/* Category filter*/}
      <div className="category-list">
        <button
          className={`category-button ${
            selectedCategory === "all" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          All products
        </button>
        {allCategories.map((category) => (
          <button
            key={category}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.replace("FAKE: ", "")}
          </button>
        ))}
      </div>

      {/* Product grid*/}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3>{product.title.replace('FAKE: ', '')}</h3>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
