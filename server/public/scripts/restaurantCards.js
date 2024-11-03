function deleteRestaurantCard(button) {
    const restaurantCard = button.parentElement;

    const restaurantId = restaurantCard.getAttribute('data-id');

    fetch(`/api/restaurants/${restaurantId}`, {  
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete restaurant');
        }
        restaurantCard.remove();  
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


// Attach the delete handler to each delete button on page load
document.addEventListener('DOMContentLoaded', () => {
    // Select all delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');

    // Attach the deleteRestaurantCard function to each button
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => deleteRestaurantCard(button));
    });
});


