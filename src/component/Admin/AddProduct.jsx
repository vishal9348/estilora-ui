import { useState } from "react";


const AddProduct = () => {

    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: 0,
        discountedPrice: 0,
        countInStock: 0,
        sku: '',
        category: '',
        sizes: [],
        colors: [],
        collections: "",
        material: "",
        gender: '',
        images: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageUpload = (e) => {
        const uploadedImages = Array.from(e.target.files).map(file => {
            return { url: URL.createObjectURL(file), altText: file.name };
        });
        setProductData(prevData => ({
            ...prevData,
            images: [...prevData.images, ...uploadedImages],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(productData);
        // Here you would typically send the data to your server/API
        // Example: axios.post("/api/products", productData);
    };

    return (
        <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
            <h2 className="text-3xl font-bold mb-6">Add Product</h2>

            <form onSubmit={handleSubmit}>
                {/* name */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                {/* Description */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Product Description</label>
                    <textarea
                        type="text"
                        name="description"
                        onChange={handleChange}
                        value={productData.description}
                        className="w-full border border-gray-300 rounded-md p-2"
                        rows={4}
                        required
                    />
                </div>

                <div className="grid grid-cols-2">
                    {/* price */}
                    <div className="mb-6 mr-2">
                        <label className="block font-semibold mb-2">Product Price</label>
                        <input
                            type="number"
                            name="price"
                            value={productData.price}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    {/* In-stock */}
                    <div className="mb-6">
                        <label className="block font-semibold mb-2">Product In Stock</label>
                        <input
                            type="number"
                            name="countInStock"
                            value={productData.countInStock}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    {/* discountedPrice */}
                    <div className="mb-6 mr-2">
                        <label className="block font-semibold mb-2">Discount Price</label>
                        <input
                            type="number"
                            name="discountedPrice"
                            value={productData.discountedPrice}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    {/* SKU */}
                    <div className="mb-6">
                        <label className="block font-semibold mb-2">SKU</label>
                        <input
                            type="text"
                            name="sku"
                            value={productData.sku}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    {/* Category */}
                    <div className="mb-6 mr-2">
                        <label className="block font-semibold mb-2">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={productData.category}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    {/* Gender */}
                    <div className="mb-6">
                        <label className="block font-semibold mb-2">Gender(M/F)</label>
                        <input
                            type="text"
                            name="gender"
                            value={productData.gender}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 uppercase"
                            required
                        />
                    </div>
                </div>
                {/* Sizes */}
                <div className="mb-6 mr-2">
                    <label className="block font-semibold mb-2">Sizes (comma seprated)</label>
                    <input
                        type="text"
                        name="sizes"
                        value={productData.sizes.join(", ")}
                        onChange={(e) => setProductData({
                            ...productData,
                            sizes: e.target.value.split(",").map((size) => size.trim()),
                        })}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                {/* Color */}
                <div className="mb-6 mr-2">
                    <label className="block font-semibold mb-2">Color (comma seprated)</label>
                    <input
                        type="text"
                        name="colors"
                        value={productData.colors.join(", ")}
                        onChange={(e) => setProductData({
                            ...productData,
                            colors: e.target.value.split(",").map((color) => color.trim()),
                        })}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                {/* Image Upload */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Upload Image</label>
                    <input
                        type="file"
                        multiple
                        onChange={handleImageUpload}
                    />

                    <div className="flex gap-4 mt-4">
                        {
                            productData.images.map((image, index) => {
                                return (
                                    <div key={index}>
                                        <img
                                            src={image.url}
                                            alt={image.altText || "Product Image"}
                                            className="w-20 h-20 object-cover rounded-md shadow-md"
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>
                <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
                    type="submit"
                >
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default AddProduct