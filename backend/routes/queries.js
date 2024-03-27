const getProducts = "SELECT * FROM products";
const getProductsById = "SELECT * FROM products WHERE id = $1";


module.exports = {
    getProducts,
    getProductsById,
}