const Footer = () => {
  return (
    <>
      <section className="container my-20 flex flex-col gap-5">
        <div className="top-footer flex flex-row justify-between">
          <div className="flex w-96 flex-col gap-2 ">
            <h1 className="text-2xl font-bold">Hamro Pasal</h1>
            <p className="text-sm text-gray-500">
              <strong>Hamro Pasal</strong> is a Nepali E-Commerce website that
              aims to provide quality products to its customers.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Categories</h1>
            <a href="/products/electronics" className="text-sm text-gray-500">
              Electronics
            </a>
            <a href="/products/clothing" className="text-sm text-gray-500">
              Clothing
            </a>
            <a href="/products/jewelry" className="text-sm text-gray-500">
              Jewelry
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Contact Us</h1>
            <p className="text-sm text-gray-500">
              Email: support@hamropasal.com
            </p>
            <p className="text-sm text-gray-500">Phone: +977-9856472838</p>
          </div>
        </div>
        <code className="text-center">
          © 2024 hamropasal.com All right reserved.
          <br />
          Site under development.
        </code>
      </section>
    </>
  );
};

export default Footer;
