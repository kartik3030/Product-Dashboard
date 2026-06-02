const API_URL = `${import.meta.env.VITE_API_URL}/api/products`;

export const getAllProducts = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const getProductById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
};

export const createProduct = async (productData) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
    });

    return response.json();
};