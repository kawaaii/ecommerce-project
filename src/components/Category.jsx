import { useState, useEffect, useMemo } from "react";

const Category = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("pasal.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const groupedProducts = useMemo(() => {
    return products.reduce((groupedProductsObj, product) => {
      const { category } = product;
      const categoryName = category.name;
      groupedProductsObj[categoryName] = [
        ...(groupedProductsObj[categoryName] || []),
        product,
      ];
      return groupedProductsObj;
    }, {});
  }, [products]);

  return (
    <>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <section className="container mt-10 flex flex-col gap-14">
          {Object.keys(groupedProducts).map((categoryName) => {
            const categorySection =
              groupedProducts[categoryName][0].category.section;
            return (
              <div className="flex flex-col gap-4" key={categoryName}>
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-2xl font-bold">{categoryName}</h2>
                  <a
                    href={`/products/${categorySection}`}
                    className="text-blue-500 hover:underline focus:outline-none"
                  >
                    Shop More
                  </a>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {groupedProducts[categoryName]
                    .slice(0, 4)
                    .map(({ id, title, image, price, rating }) => (
                      <div
                        key={id}
                        className="product-card flex flex-col gap-4 rounded-lg border border-gray-300 dark:border-none dark:bg-gray-800"
                      >
                        <img
                          src={image}
                          className="mx-auto h-60 w-full rounded-t-md bg-white object-contain p-5"
                          alt={title}
                        />
                        <div className="flex flex-col items-center">
                          <h3 className="text-md mb-2 text-center font-semibold">
                            {title}
                          </h3>
                          <p className="font-mono font-bold text-green-600">
                            ${price.toLocaleString()}
                          </p>
                          <div className="flex items-center">
                            <span className="text-yellow-500">
                              ★ {rating.rate}
                            </span>
                            <span className="ml-1 text-gray-500">
                              ({rating.count} reviews)
                            </span>
                          </div>
                          <button
                            className="focus:shadow-outline-blue mb-5 mt-8 rounded-full bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600 focus:outline-none"
                            onClick={() => alert(`Added ${title} to cart`)}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Category;
