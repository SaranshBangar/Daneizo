import TopRentedItemsCards from "./Top-Rented-Items-Components/TopRentedItemsCards"
import TopRentedItemsTitle from "./Top-Rented-Items-Components/TopRentedItemsTitle"

const TopRentedItems = () => {
  return (
    <section className=" max-sm:mt-0">
      <div className="flex flex-col">
        <TopRentedItemsTitle />
        {/* <TopRentedItemsCards /> */}
      </div>
    </section>
  )
}

export default TopRentedItems