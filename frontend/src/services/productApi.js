const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllProducts = async () => {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return await response.json();
};

export const getProductById = async (productId) => {
    const response = await fetch(`${BASE_URL}/${productId}`);

    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }

    return await response.json();
};

export const createProduct = async (productData) => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
    });

    if (!response.ok) {
        throw new Error("Failed to create product");
    }

    return await response.json();
};