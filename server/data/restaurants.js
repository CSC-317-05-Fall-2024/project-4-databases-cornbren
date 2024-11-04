import { pool } from "../config/database.js";

// Get a list of all restaurants
const getRestaurants = async () => {
    try {
        const results = await pool.query('SELECT * FROM restaurants ORDER BY id ASC')
        return results.rows;
    } catch (error) {
        console.error( error.message )
    }};

// Get a restaurant by its ID
const getRestaurant = async (id) => {
    try {
        const results = await pool.query('SELECT * FROM restaurants WHERE id=$1', [id])
        return results.rows[0];
    } catch (error) {
        console.error( error.message )
    }
};

// Create a new restaurant entry
const createRestaurant = async (newRestaurant) => {
   try {
    const { name, address, phone, photo} = newRestaurant;
    const results = await pool.query('INSERT INTO restaurants (name, phone, address, photo) VALUES ($1, $2, $3, $4) RETURNING *', [name, phone, address, photo]);
    console.log(results)
    return results.rows[0];
   } catch (error) {
        console.error( error.message )
   }
};

// Delete a restaurant by its ID
const deleteRestaurant = async (id) => {
    try {
        const results = await pool.query('DELETE FROM restaurants WHERE id = $1', [id])
        return results.rowCount;
    } catch (error) {
        console.error( error.message )
    }
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };
