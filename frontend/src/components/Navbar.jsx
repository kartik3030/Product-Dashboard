import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link
                    to="/"
                    className="text-sm font-semibold tracking-widest uppercase text-gray-900 hover:text-blue-600 transition-colors duration-200"
                >
                    Product Dashboard
                </Link>

                <Link
                    to="/add-product"
                    className="flex items-center gap-1.5 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
                >
                    <span className="text-lg leading-none">+</span>
                    Add Product
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;