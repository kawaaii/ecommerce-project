import { lazy, Suspense } from "react";
import Category from "../components/Category";

const Testimonials = lazy(() => import("../components/Testimonials"));

const Home = () => {
  return (
    <>
      <section>
        <Category />

        <Suspense fallback={<div>Loading testimonials...</div>}>
          <Testimonials />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
