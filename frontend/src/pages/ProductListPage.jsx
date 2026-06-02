import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../services/productApi";

function ProductListPage() {
    const [productList, setProductList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const products = await getAllProducts();
            setProductList(products);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const filteredProducts = productList.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // Loading state
    if (loading) {
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
        <div className="min-h-screen bg-gray-50 px-4 py-12">
            <div className="max-w-6xl mx-auto">

                {/* Header row */}
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-1">
                            Inventory
                        </p>
                        <h1 className="text-2xl font-bold text-gray-900">
                            All Products
                        </h1>
                    </div>

                    {/* Live count */}
                    <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                        {filteredProducts.length} item{filteredProducts.length !== 1 ? "s" : ""}
                    </span>
                </div>

                {/* Search */}
                <div className="relative mb-8">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                        ⌕
                    </span>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    />
                </div>

                {/* Empty state */}
                {filteredProducts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <p className="text-4xl mb-4">◎</p>
                        <p className="text-sm font-semibold text-gray-900 mb-1">No products found</p>
                        <p className="text-xs text-gray-400">Try a different search term</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

export default ProductListPage;