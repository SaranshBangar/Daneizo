import TopRentedItemsCards from "./Top Rented Items Components/TopRentedItemsCards"
import TopRentedItemsTitle from "./Top Rented Items Components/TopRentedItemsTitle"

const TopRentedItems = () => {
  return (
    <section className="mt-[150px]">
        <div className="flex flex-col gap-[14px]">
            <TopRentedItemsTitle />
            <TopRentedItemsCards />
        </div>
    </section>
  )
}

export default TopRentedItems