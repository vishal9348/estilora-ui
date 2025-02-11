import MyOrderPage from "./MyOrderPage"


const Profile = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow container mx-auto p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-6">
                    {/* left section */}
                    <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
                        <div className="flex justify-center mb-4">
                            <img
                                src="https://picsum.photos/500/500?random=10" // Replace with your image URL
                                alt="Profile Picture"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl md:text-xl font-bold mb-2 text-center">
                            Vishal Kumar Saw
                        </h3>
                        <p className="text-lg text-gray-600 mb-4 text-center">
                            vishal@example.com
                        </p>
                        <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                            Logout
                        </button>
                    </div>

                    {/* Right section : orders table */}

                    <div className="w-full md:w-2/3 lg:h-3/4">
                        <MyOrderPage />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile