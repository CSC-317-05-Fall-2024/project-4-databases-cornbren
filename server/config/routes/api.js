import express from 'express';
import { createRestaurant, getRestaurant, getRestaurants, deleteRestaurant } from '../data/restaurants.js';
const router = express.Router();

// Add routes here
router.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();
    res.json(restaurants);
});

//Route for single restaurant
router.get('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);  // Parse the ID from the URL
    const restaurant = getRestaurant(id);  // Get the restaurant by ID

    if (restaurant) {
        res.json(restaurant);  // Send the restaurant data as JSON
    } else {
        res.status(404).json({ message: 'Restaurant not found' });  // Send 404 if not found
    }
});

router.post('/restaurants', (req, res) => {
    console.log('Request body:', req.body); // Log the request body
    const newRestaurant = req.body; // Get the new restaurant data from the request body
    
    // Check if the required fields are present
    if (!newRestaurant || !newRestaurant.name || !newRestaurant.address || !newRestaurant.photo) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const createdRestaurant = createRestaurant(newRestaurant); 
        res.status(201).json(createdRestaurant);
    } catch (error) {
        console.error('Error creating restaurant:', error); 
        res.status(500).json({ error: 'Failed to add restaurant' }); 
    }
});


router.delete('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const deleted = deleteRestaurant(id);

    if (deleted) {
        res.status(200).json({message: 'Restaurant with ID ${id} deleted' });
    } else {
        res.status(404).json({message: 'Restaurant not found'});
    }
});


export {router as backendRouter};