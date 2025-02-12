import { Link } from "react-router-dom";

const checkout = {
    _id: "123",
    createAt: new Date(),
    checkoutItem: [
        {
            productId: "1",
            name: "jacket",
            color: "black",
            size: "M",
            quantity: 2,
            price: 150,
            image: "https://picsum.photos/150?random=1",
        },
        {
            productId: "2",
            name: "jacket",
            color: "black",
            size: "M",
            quantity: 1,
            price: 10,
            image: "https://picsum.photos/150?random=2",
        }
    ],
    shippingAddress: {
        address: "barisakhi",
        city: "Chatra",
        state: "Bihar",
        postalCode: "789456",
        country: "India",
    },
}


const OrderConfirmationPage = () => {

    const calculateEstimatedDelivery = (createdAt) => {
        const orderDate = new Date(createdAt);
        orderDate.setDate(orderDate.getDate() + 5);
        return orderDate.toLocaleDateString();
    }
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white">
            <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
                Thank You for your Order!
            </h1>

            {
                checkout && (
                    <div className="p-6 rounded-lg border">
                        <div className="flex justify-between mb-2">
                            {/* orderId and date */}
                            <div>
                                <h2 className="text-xl font-semibold">
                                    Order ID: {checkout._id}
                                </h2>
                                <p className="text-gray-500">
                                    Order Date: {new Date(checkout.createAt).toLocaleDateString()}
                                </p>
                            </div>
                            <div>
                                <p className="text-emerald-700 text-sm">
                                    Estimated Delivery:{" "}
                                    {calculateEstimatedDelivery(checkout.createAt)}
                                </p>
                            </div>
                        </div>
                        {/* orders items */}
                        <div className="mb-20">
                            {
                                checkout.checkoutItem.map((item) => (
                                    <div key={item.productId}
                                        className="flex items-center mb-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-md mr-4"
                                        />
                                        <div>
                                            <h4 className="text-md font-semibold">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {item.color} | {item.size}
                                            </p>
                                        </div>
                                        <div className="ml-auto text-right">
                                            <p className="text-md">${item.price}</p>
                                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/* Payment info */}
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-semibold mb-2">Payment</h4>
                                <p className="text-gray-600">PayPal</p>
                            </div>
                            {/* Delivery info */}
                            <div>
                                <h4 className="text-lg font-semibold mb-2">Delivery</h4>
                                <p className="text-gray-500">
                                    {checkout.shippingAddress.address}
                                </p>
                                <p className="text-gray-600">
                                    {checkout.shippingAddress.city},{checkout.shippingAddress.state},{" "}
                                    {checkout.shippingAddress.postalCode}, {checkout.shippingAddress.country}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="flex items-center text-center justify-center mt-4">
                <Link
                    to='/'
                    className="cursor-pointer bg-black text-white text-lg rounded-sm h-14 w-52 items-center justify-center p-3"
                >
                    {"<-- "}Back to Home
                </Link>
            </div>

        </div>
    )
}

export default OrderConfirmationPage