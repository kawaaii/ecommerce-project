import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("./testimonials.json");
        const data = await response.json();
        setTestimonialsData(data);
      } catch (error) {
        setError("Error fetching testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="container relative z-10 mx-auto mt-10 flex flex-col items-center gap-10 rounded-lg border bg-slate-100 p-5 pb-10 ring-black dark:border-none dark:bg-[#1c2737]">
      <div className="header mt-4 flex flex-col items-center gap-2">
        <p className="text-xl font-bold text-[#3917ea] dark:text-blue-600">
          Our Testimonials
        </p>
        <p className="text-black dark:text-white">
          Here is what our customer tells about us!
        </p>
      </div>
      {loading && <p>Loading testimonials...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="testimonial-cards flex flex-row gap-4">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-card flex transform flex-col items-center justify-evenly gap-5 rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105"
            style={{ padding: "20px", maxWidth: "300px" }}
          >
            <div className="testimonial-card__image mt-5">
              <img
                src={testimonial.photo_url}
                alt={`${testimonial.first_name} ${testimonial.last_name}`}
                className="h-20 w-20 rounded-full"
              />
            </div>
            <div className="testimonial-card__name flex flex-col items-center gap-2">
              <p className="font-semibold text-black">
                {testimonial.first_name} {testimonial.last_name}
              </p>
              <p className="flex flex-row items-center gap-2 text-left font-semibold text-black text-blue-600">
                <img
                  src="TwitterIcon.svg"
                  className="h-4 w-4"
                  alt="Twitter Icon"
                />
                <span className="font-mono">{testimonial.twitter}</span>
              </p>
            </div>
            <div className="testimonial-card__content mb-5">
              <blockquote className="text-center font-light text-black">
                {testimonial.testimonial}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
