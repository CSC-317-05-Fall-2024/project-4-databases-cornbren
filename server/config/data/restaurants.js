// Fill this in
// Sample restaurant data
let restaurantData = [
    {
        id: 0,
        name: "Dim Sum King",
        phone: "(415) 555-5555",
        address: "1600 Holloway Ave, San Francisco, CA 94132",
        photo: "/images/dimsumking.jpeg",
    }, 
    {
        id: 1,
        name: "Original Joe's",
        phone: "(415) 555-5555",
        address: "1600 Holloway Ave, San Francisco, CA 94132",
        photo: "/images/originaljoes.jpeg",
    }, 
    { 
        id: 2,
        name: "Boulevard Cafe",
        phone: "(415) 555-5555",
        address: "1600 Holloway Ave, San Francisco, CA 94132",
        photo: "/images/boulevardcafe.jpeg",
    }, 
    {
        id: 3,
        name: "Koi Palace",
        phone: "(415) 555-5555",
        address: "1600 Holloway Ave, San Francisco, CA 94132",
        photo: "/images/koi-palace.jpg",
    }, 
    {
        id: 4,
        name: "Val's",
        phone: "(415) 555-5555",
        address: "1600 Holloway Ave, San Francisco, CA 94132",
        photo: "/images/vals.jpeg",
    }, 
    {
        id: 5,
        name: "Banana Island",
        phone: "(415) 555-5555",
        address: "1600 Holloway Ave, San Francisco, CA 94132",
        photo: "/images/bananaisland.jpeg",
    }
];

// Initialize lastId to the highest id in the restaurant data
let lastId = Math.max(...restaurantData.map(restaurant => restaurant.id)) + 1;

// Get the next available ID for a new restaurant
const getNextId = () => {
    return lastId++;
};

// Get a list of all restaurants
const getRestaurants = () => {
    return restaurantData;
};

// Get a restaurant by its ID
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === id);
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    newRestaurant.id = restaurantData.length + 1; // Assign an ID based on the current length
    restaurantData.push(newRestaurant); // Add new restaurant to the array
    return newRestaurant; // Return the newly created restaurant
};

// Delete a restaurant by its ID
const deleteRestaurant = (id) => {
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);
    return restaurantData; 
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };
