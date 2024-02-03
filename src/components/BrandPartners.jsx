import { useState, useEffect } from "react";

const BrandPartners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("brand_partners.json")
      .then((response) => response.json())
      .then((data) => setPartners(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="mt-10 flex flex-col overflow-x-auto rounded-lg border border-gray-300 py-4 dark:border-none dark:bg-[#1c2737]">
      <div>
        <p className="items-center justify-center text-center font-sans text-xl font-bold">
          Brand Partners
        </p>
      </div>
      <marquee behavior="scroll" direction="left">
        <div className="brand-images flex flex-row gap-5 ">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group relative mx-2 h-auto max-w-xs"
            >
              <img
                src={partner.image}
                alt={`Brand ${partner.id}`}
                className="h-full w-full transform grayscale transition duration-300 hover:scale-110 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </marquee>
    </section>
  );
};

export default BrandPartners;
