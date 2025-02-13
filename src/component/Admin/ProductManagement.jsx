import { Link } from "react-router-dom";


const ProductManagement = () => {

    const products = [
        {
            _id: 123,
            name: "Product 1",
            price: 10,
            sku: "123456",
        },
    ];

    const handleDelete = (productId) => {
        if (window.confirm("Are you sure want to delete this Product?")) {
            console.log("Product deleted", productId);
        }
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Product Management</h2>
            <div className="mb-2">
                <Link
                    to='/admin/product/add'
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-bold"
                >
                    Add New Product
                </Link>
            </div>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                        <tr>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Price</th>
                            <th className="py-3 px-4">SKU</th>
                            <th className="py-3 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 ? (products.map((product) => (
                                <tr key={product._id}
                                    className="border-b hover:bg-gray-50 cursor-pointer">
                                    <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                                        {product.name}
                                    </td>
                                    <td className="p-4">${product.price}</td>
                                    <td className="p-4">{product.sku}</td>
                                    <td className="p-4 flex">
                                        <Link
                                            to={`/admin/products/${product._id}/edit`}
                                            className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(product._id)}
                                            className="bg-red-500 text-white px-2 py-[1.3px] rounded hover:bg-red-600">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))) : (
                                <tr className="">
                                    <td colSpan="4" className="p-4 text-center text-gray-500">
                                        No products found.
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductManagement