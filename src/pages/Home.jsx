import Hero from "../component/Layout/Hero"
import GenderCollectionSection from "../component/Products/GenderCollectionSection"
import NewArrivals from "../component/Products/NewArrivals"
import ProductDetails from "../component/Products/ProductDetails"

const Home = () => {
    return (
        <div>
            <Hero />
            <GenderCollectionSection />
            <NewArrivals />

            {/* Best seller */}
            <h2 className="text-3xl text-center font-bold mb-4">
                Best Seller
            </h2>
            <ProductDetails />
        </div>
    )
}

export default Home