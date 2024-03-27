const pool = require('../database');
const queries = require('./queries');

const getProducts = (req, res) => {
    pool.query(queries.getProducts, (error, results) => {
        if (error) {
            console.error("Database error:", error);
            res.status(500).json({ error: "Database error" });
            return;
        }
        res.status(200).json(results.rows);
    });
};

const getProductsById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getProductsById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.row);
    });
};

module.exports = {
    getProducts,
    getProductsById,
};