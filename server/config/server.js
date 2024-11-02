// Add your server code here.
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { backendRouter } from './routes/api.js';
import { getRestaurants, createRestaurant } from './data/restaurants.js'; 


const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

app.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();
    res.render('restaurants', { restaurants });
});

// New route for rendering a restaurant's details based on its id
app.get('/restaurants/:id', (req, res) => {
    const restaurantId = parseInt(req.params.id, 10); // Parse the id from the URL
    const restaurants = getRestaurants(); // Fetch the restaurant data

    const restaurant = restaurants.find(r => r.id === restaurantId); // Find restaurant by id

    if (restaurant) {
        // If the restaurant is found, render the restaurant-details view
        res.render('restaurant-details', { restaurant });
    } else {
        // If no restaurant found, return a 404 error
        res.status(404).send('Restaurant not found');
    }
});

// Mount the API router under the '/api' path
app.use('/api', backendRouter); 

app.get('/addrestaurant', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'addrestaurant.html'));
});

app.use((req, res, next) => {
    console.log('Request URL:', req.url);
    next();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
