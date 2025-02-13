

const OrderManagement = () => {
    const orders = [
        {
            _id: 123,
            user: {
                name: "Vishal",
            },
            totalPrice: 100,
            status: "Processing",

        },
    ];

    const handleStatusChange = (orderId, status) => {
        console.log({ id: orderId, status: status });
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Order Management</h2>

            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                        <tr>
                            <th className="py-3 px-4">Order ID</th>
                            <th className="py-3 px-4">Customer</th>
                            <th className="py-3 px-4">Total Price</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order) => (
                                <tr key={order._id}
                                    className="border-b hover:bg-gray-50 cursor-pointer">
                                    <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                                        {order._id}
                                    </td>
                                    <td className="p-4">{order.user.name}</td>
                                    <td className="p-4">{order.totalPrice}</td>
                                    <td className="p-4">
                                        <select
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                            className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                        >
                                            <option value="Processing">Processing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => handleStatusChange(order._id, "Delivered")}
                                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                            Mark as Delivered
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderManagement