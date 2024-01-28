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
      groupedProductsObj[category] = [
        ...(groupedProductsObj[category] || []),
        product,
      ];
      return groupedProductsObj;
    }, {});
  }, [products]);

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    return `${description.substring(0, maxLength)}...`;
  };

  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const handleReadMore = (productId) => {
    setExpandedDescriptions({
      ...expandedDescriptions,
      [productId]: true,
    });
  };

  return (
    <>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <section className="container mt-10 flex flex-col gap-5">
          {Object.keys(groupedProducts).map((category) => (
            <div className="flex flex-col gap-4" key={category}>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-2xl font-bold">{category}</h2>
                <a
                  href={`/products/${category}`}
                  className="text-blue-500 hover:underline focus:outline-none"
                >
                  Shop More
                </a>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {groupedProducts[category]
                  .slice(0, 4)
                  .map(({ id, title, image, description, price, rating }) => (
                    <div
                      key={id}
                      className="product-card dark:border-dark-gray flex flex-col gap-4 rounded-lg border border-gray-200 p-4 dark:bg-gray-800"
                    >
                      <img
                        src={image}
                        className="mx-auto h-44 w-44 rounded-md"
                        alt={title}
                      />
                      <div className="flex flex-col items-center">
                        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                        <p className="mb-2 text-gray-700 dark:text-gray-300">
                          {expandedDescriptions[id]
                            ? description
                            : truncateDescription(description, 150)}
                        </p>
                        {!expandedDescriptions[id] && (
                          <button
                            className="text-blue-500 hover:underline focus:outline-none"
                            onClick={() => handleReadMore(id)}
                          >
                            Read More
                          </button>
                        )}
                        <p className="font-bold text-green-600">
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
                          className="focus:shadow-outline-blue mt-2 rounded-full bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600 focus:outline-none"
                          onClick={() => alert(`Added ${title} to cart`)}
                        >
                          Add to Cart
                        </button>
                      </div>
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

export default Category;
