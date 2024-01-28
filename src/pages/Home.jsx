import React, { useState, useEffect, useMemo } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("pasal.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Memoized function to group products by category
  const groupedProducts = useMemo(() => {
    const groupedProductsObj = {};
    products.forEach((product) => {
      const { category } = product;
      if (!groupedProductsObj[category]) {
        groupedProductsObj[category] = [];
      }
      groupedProductsObj[category].push(product);
    });
    return groupedProductsObj;
  }, [products]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section className="container flex flex-col gap-5">
          {Object.keys(groupedProducts).map((category) => (
            <div className="flex flex-col gap-2" key={category}>
              <strong>{category}</strong>
              <div className="flex flex-wrap gap-4">
                {groupedProducts[category].map((product) => (
                  <div
                    key={product.id}
                    className="product-card w-50 flex flex-col gap-2 rounded-lg p-2 dark:bg-white dark:text-black"
                  >
                    <img
                      src={product.image}
                      className="mx-auto h-44 w-44"
                      alt={product.title}
                    />
                    <h3>
                      {product.brand && (
                        <span className="flex flex-col">
                          <strong className="text-center">
                            {product.brand}
                          </strong>
                          <br /> {product.title}
                        </span>
                      )}
                      {!product.brand && (
                        <span className="font-medium">
                          <strong>{product.title}</strong>
                        </span>
                      )}
                    </h3>
                    <p className="flex flex-row">
                      <strong>Price: &nbsp;</strong>
                      <div className="font-mono">
                        ${product.price.toLocaleString()}
                      </div>
                    </p>
                    <p>
                      <strong>Rating: </strong>
                      {product.rating.rate}
                    </p>
                    <p>
                      <strong>Total Reviews: </strong>
                      {product.rating.count}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default Home;
