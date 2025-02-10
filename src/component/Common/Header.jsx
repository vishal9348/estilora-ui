import Topbar from "../Layout/Topbar"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <header className="border-b border-gray-200">
            <Topbar />
            <Navbar />
        </header>
    )
}

export default Header