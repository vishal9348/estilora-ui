import { useEffect, useState } from "react";
import { Link, Links, useParams } from "react-router-dom"


const OrderDetailsPage = () => {
    const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const mockOrderDetails = {
            _id: id,
            createdAt: new Date(),
            isPaid: true,
            isDelivered: false,
            paymentMethod: "paypal",
            shippingMethod: "standard",
            shippingAddress: {
                address: "Barisakhi",
                city: "chatra",
                state: "jharkhand",
                postalCode: "456123",
                country: "IND",
                phone: "7894561230",
            },
            orderItems: [
                {
                    productId: "1",
                    name: "jacket",
                    price: 100,
                    quantity: 2,
                    image: "https://picsum.photos/150?random=6",
                },
                {
                    productId: "2",
                    name: "jacket",
                    price: 120,
                    quantity: 1,
                    image: "https://picsum.photos/150?random=4",
                },
            ],
        };
        setOrderDetails(mockOrderDetails);
    }, [id]);

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Order Details
            </h2>
            {
                !orderDetails ? (
                    <p>No Order details found!</p>
                ) : (
                    <div className="p-4 sm:p-6 rounded-lg border">
                        {/* order info */}
                        <div className="flex flex-col sm:flex-row justify-between mb-8">
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold">
                                    Order Id: #{orderDetails._id}
                                </h3>
                                <p className="text-gray-600">
                                    {new Date(orderDetails.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
                                <span className={`${orderDetails.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
                                px-3 py-1 rounded-full text-sm font-medium mb-2`}>
                                    Payment: {orderDetails.isPaid ? "Done" : "pending"}
                                </span>

                                <span className={`${orderDetails.isDelivered ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}
                                px-3 py-1 rounded-full text-sm font-medium mb-2`}>
                                    Item(Delivered): {orderDetails.isDelivered ? "Delivered" : "pending"}
                                </span>
                            </div>
                        </div>
                        {/* Customer, payment, shipping info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                            <div>
                                <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
                                <p>Payment Method: {orderDetails.paymentMethod}</p>
                                <p>Status:{" "}{orderDetails.isPaid ? "Paid" : "Pending"}</p>

                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
                                <p>Shipping Method: {orderDetails.shippingMethod}</p>
                                <p>Address:{ }
                                    {`${orderDetails.shippingAddress.address},
                                    ${orderDetails.shippingAddress.city},
                                    ${orderDetails.shippingAddress.state},
                                    ${orderDetails.shippingAddress.country}, 
                                    ${orderDetails.shippingAddress.postalCode}, ${"Phone-"}
                                    ${orderDetails.shippingAddress.phone}`}
                                </p>
                            </div>
                        </div>
                        {/* product list */}
                        <div className="overflow-x-auto">
                            <h4 className="text-lg font-semibold mb-4">Products</h4>
                            <table className="min-w-full text-gray-600 mb-4">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="py-2 px4">Name</th>
                                        <th className="py-2 px4">Unit price</th>
                                        <th className="py-2 px4">Quantity</th>
                                        <th className="py-2 px4">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderDetails.orderItems.map((item) => (
                                            <tr key={item.productId}
                                                className="border-b">
                                                <td className="py-2 px-4 flex items-center">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-12 h-12 object-cover rounded-lg mr-4"
                                                    />
                                                    <Link to={`/product/${item.productId}`}
                                                        className="text-blue-500 hover:underline">
                                                        {item.name}
                                                    </Link>
                                                </td>
                                                <td className="py-2 px-4 text-center">${item.price}</td>
                                                <td className="py-2 px-4 text-center">{item.quantity}</td>
                                                <td className="py-2 px-4 text-center">${item.price * item.quantity}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/* Back to order links */}
                        <Link to='/my-orders'
                            className="text-blue-500 hover:underline">
                            Back to My Orders
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default OrderDetailsPage