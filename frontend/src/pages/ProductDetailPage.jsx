import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../services/productApi";

function ProductDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const productData = await getProductById(id);
            setProduct(productData);
        } catch (error) {
            console.log(error);
        }
    };

    // Loading state
    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-200 border-t-gray-900 animate-spin" />
                    <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                        Loading
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-16">
            <div className="max-w-lg mx-auto">

                {/* Back */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors duration-200 mb-8"
                >
                    <span>←</span> Back
                </button>

                {/* Card */}
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

                    {/* Category tag */}
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">
                        {product.category}
                    </span>

                    {/* Name + Price row */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                        <h1 className="text-2xl font-bold text-gray-900 leading-snug">
                            {product.name}
                        </h1>
                        <span className="shrink-0 text-2xl font-bold text-gray-900">
                            ₹{product.price}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-100 mb-6" />

                    {/* Description */}
                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                            Description
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;