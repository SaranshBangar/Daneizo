import UserTestimonialsCards from "./User Testimonials Components/UserTestimonialsCards";
import UserTestimonialsTitle from "./User Testimonials Components/UserTestimonialsTitle";

const UserTestimonials = () => {
  return (
    <section className="mt-[120px] mb-[56px] px-4">
      <div className="flex flex-col gap-[14px]">
        <UserTestimonialsTitle />
        <UserTestimonialsCards />
      </div>
    </section>
  );
};

export default UserTestimonials;
