import UserTestimonialsCards from "./User Testimonials Components/UserTestimonialsCards"
import UserTestimonialsTitle from "./User Testimonials Components/UserTestimonialsTitle"

const UserTestimonials = () => {
  return (
    <section className="mt-[120px] mb-[56px]">
        <div className="flex flex-col gap-[24px]">
            <UserTestimonialsTitle />
            <div className="flex items-center justify-center">
              <UserTestimonialsCards />
            </div>
        </div>
    </section>
  )
}

export default UserTestimonials