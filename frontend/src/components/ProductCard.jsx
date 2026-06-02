import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <div className="group bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">

            {/* Category tag */}
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">
                {product.category}
            </span>

            {/* Name */}
            <h2 className="text-base font-semibold text-gray-900 mb-4 leading-snug">
                {product.name}
            </h2>

            {/* Footer row */}
            <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">
                    ₹{product.price}
                </span>

                <Link
                    to={`/product/${product._id}`}
                    className="flex items-center gap-1 bg-gray-900 text-white text-xs font-medium px-3.5 py-1.5 rounded-full hover:bg-blue-600 transition-colors duration-200"
                >
                    View
                    <span className="text-sm leading-none group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;