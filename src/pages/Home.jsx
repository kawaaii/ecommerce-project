import { lazy, Suspense } from "react";
import Category from "../components/Category";

const Testimonials = lazy(() => import("../components/Testimonials"));

const Home = () => {
  return (
    <>
      <section>
        <Category />

        <Suspense>
          <Testimonials />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
