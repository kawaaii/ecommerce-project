const Footer = () => {
  return (
    <>
      <section className="container mt-10 flex flex-row justify-between">
        <div className="flex w-96 flex-col gap-2 ">
          <h1 className="text-2xl font-bold">Hamro Pasal</h1>
          <p className="text-sm text-gray-500">
            <strong>Hamro Pasal</strong> is a Nepali E-Commerce website that
            aims to provide quality products to its customers.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Categories</h1>
          <p className="text-sm text-gray-500">Electronics</p>
          <p className="text-sm text-gray-500">Clothing</p>
          <p className="text-sm text-gray-500">Jewelry</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <p className="text-sm text-gray-500">Email: info@hamropasal.com</p>
          <p className="text-sm text-gray-500">Phone: +977-9856472838</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
