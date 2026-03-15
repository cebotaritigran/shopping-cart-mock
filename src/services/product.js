

const fetchProducts = async () => {

    try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        result.map((result) => {
            result.quantity = 1;
        })
        return result
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }

}

export default fetchProducts;