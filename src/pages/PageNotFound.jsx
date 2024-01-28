const PageNotFound = () => {
  return (
    <>
      <section className="container flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4 font-mono">
          <p className="text-9xl font-black">404</p>
          <p className="text-4xl">Page Not Found</p>
          <p className="text-9xl">&#129335;</p>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
