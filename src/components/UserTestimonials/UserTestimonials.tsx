import UserTestimonialsCards from "./User Testimonials Components/UserTestimonialsCards"
import UserTestimonialsStickyScroll from "./User Testimonials Components/UserTestimonialsStickyScroll"
import UserTestimonialsTitle from "./User Testimonials Components/UserTestimonialsTitle"

const UserTestimonials = () => {
  return (
    <section className="mt-[120px]">
        <div className="flex flex-col gap-[14px]">
            <UserTestimonialsTitle />
            {/* <UserTestimonialsStickyScroll /> */}
            <UserTestimonialsCards />
        </div>
    </section>
  )
}

export default UserTestimonials