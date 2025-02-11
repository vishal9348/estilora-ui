import { useEffect, useRef, useState } from "react";
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from "../component/Products/FilterSidebar";
import SortOption from "../component/Products/SortOption";
import ProductGrid from "../component/Products/ProductGrid";


const CollectionPage = () => {

    const [products, setProducts] = useState([]);
    const sideBarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const handleClickOutside = (e) => {
        if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    }

    useEffect(() => {
        // add event listener for clicks
        document.addEventListener("mousedown", handleClickOutside);

        // clear event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const fethchedProducts = [
                {
                    _id: 1,
                    name: "Stylish T-Shirt",
                    price: 50,
                    images: [{ url: "https://picsum.photos/500/500?random=9" }],
                },
                {
                    _id: 2,
                    name: "Stylish T-Shirt",
                    price: 50,
                    images: [{ url: "https://picsum.photos/500/500?random=11" }],
                },
                {
                    _id: 3,
                    name: "Stylish T-Shirt",
                    price: 50,
                    images: [{ url: "https://picsum.photos/500/500?random=10" }],
                },
                {
                    _id: 4,
                    name: "Stylish T-Shirt",
                    price: 50,
                    images: [{ url: "https://picsum.photos/500/500?random=12" }],
                },
                {
                    _id: 5,
                    name: "Stylish T-Shirt",
                    price: 50,
                    images: [{ url: "https://picsum.photos/500/500?random=13" }],
                },
                {
                    _id: 6,
                    name: "Stylish T-Shirt",
                    price: 50,
                    images: [{ url: "https://picsum.photos/500/500?random=14" }],
                },
                {
                    _id: 7,
                    name: "Stylish T-Shirt",
                    price: 50,
                    images: [{ url: "https://picsum.photos/500/500?random=15" }],
                },
                {
                    _id: 8,
                    name: "Stylish T-Shirt",
                    price: 50,
                    images: [{ url: "https://picsum.photos/500/500?random=16" }],
                },
            ];
            setProducts(fethchedProducts);
        }, 1000);
    }, []);
    return (
        <div className="flex flex-col lg:flex-row">
            {/* mobile filter icon */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden border p-2 flex justify-center items-center">
                <FaFilter className="mr-2" /> Filters
            </button>

            {/* Filter sidebar */}
            <div
                ref={sideBarRef}
                className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            fixed inset-y-0 z-50 left-0 w-64 bg-white 
            overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
            >
                <FilterSidebar />
            </div>

            <div className="flex-grow p-4">
                <h2 className="text-2xl uppercase mb-4 lg:px-10">All Collection</h2>

                {/* sort option */}
                <SortOption />

                {/* product grid */}
                <ProductGrid products={products} />
            </div>
        </div>
    )
}

export default CollectionPage