import { lazy, Suspense } from "react";
import Category from "../components/Category";

const Testimonials = lazy(() => import("../components/Testimonials"));
const BrandPartners = lazy(() => import("../components/BrandPartners"));

const Home = () => {
  return (
    <>
      <section>
        <Category />
        <Suspense fallback={<div>Loading components...</div>}>
          <Testimonials />
          <BrandPartners />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
