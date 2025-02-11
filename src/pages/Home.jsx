import Hero from "../component/Layout/Hero"
import GenderCollectionSection from "../component/Products/GenderCollectionSection"
import NewArrivals from "../component/Products/NewArrivals"
import ProductDetails from "../component/Products/ProductDetails"
import ProductGrid from "../component/Products/ProductGrid"

const placeholderProducts = [
    {
        _id: 1,
        name: "Stylish T-Shirt",
        price: 50,
        images: [{ url: "https://picsum.photos/500/500?random=1" }],
    },
    {
        _id: 2,
        name: "Stylish T-Shirt",
        price: 50,
        images: [{ url: "https://picsum.photos/500/500?random=2" }],
    },
    {
        _id: 3,
        name: "Stylish T-Shirt",
        price: 50,
        images: [{ url: "https://picsum.photos/500/500?random=3" }],
    },
    {
        _id: 4,
        name: "Stylish T-Shirt",
        price: 50,
        images: [{ url: "https://picsum.photos/500/500?random=4" }],
    },
    {
        _id: 5,
        name: "Stylish T-Shirt",
        price: 50,
        images: [{ url: "https://picsum.photos/500/500?random=5" }],
    },
    {
        _id: 6,
        name: "Stylish T-Shirt",
        price: 50,
        images: [{ url: "https://picsum.photos/500/500?random=6" }],
    },
    {
        _id: 7,
        name: "Stylish T-Shirt",
        price: 50,
        images: [{ url: "https://picsum.photos/500/500?random=9" }],
    },
    {
        _id: 8,
        name: "Stylish T-Shirt",
        price: 50,
        images: [{ url: "https://picsum.photos/500/500?random=8" }],
    }
]

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

            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-bold">
                    Top Wears for Women
                </h2>

                <ProductGrid products={placeholderProducts} />
            </div>
        </div>
    )
}

export default Home