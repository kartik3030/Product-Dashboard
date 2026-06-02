import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/productApi";

function AddProductPage() {
    const navigate = useNavigate();
    const [productData, setProductData] = useState({
        name: "",
        category: "",
        price: "",
        description: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createProduct(productData);
            navigate("/");
        } catch (error) {
            console.log(error);
            alert("Failed to add product");
        }
    };

    const inputClass =
        "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200";

    const labelClass =
        "block text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2";

    return (
        <div className="min-h-screen bg-gray-50 flex items-start justify-center px-4 py-16">
            <div className="w-full max-w-lg">

                {/* Header */}
                <div className="mb-8">
                    <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-1">
                        Inventory
                    </p>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Add New Product
                    </h1>
                </div>

                {/* Card */}
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Name */}
                        <div>
                            <label className={labelClass}>Product Name</label>
                            <input
                                type="text"
                                name="name"
                                value={productData.name}
                                onChange={handleChange}
                                placeholder="e.g. Wireless Headphones"
                                className={inputClass}
                                required
                            />
                        </div>

                        {/* Category + Price side by side */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelClass}>Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={productData.category}
                                    onChange={handleChange}
                                    placeholder="e.g. Electronics"
                                    className={inputClass}
                                    required
                                />
                            </div>
                            <div>
                                <label className={labelClass}>Price (₹)</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={productData.price}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                    className={inputClass}
                                    required
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className={labelClass}>Description</label>
                            <textarea
                                name="description"
                                value={productData.description}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Describe the product..."
                                className={`${inputClass} resize-none`}
                                required
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 pt-2">
                            <button
                                type="submit"
                                className="flex-1 bg-gray-900 text-white text-sm font-medium py-3 rounded-full hover:bg-blue-600 transition-colors duration-200"
                            >
                                Add Product
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate("/")}
                                className="flex-1 bg-gray-100 text-gray-600 text-sm font-medium py-3 rounded-full hover:bg-gray-200 transition-colors duration-200"
                            >
                                Cancel
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProductPage;