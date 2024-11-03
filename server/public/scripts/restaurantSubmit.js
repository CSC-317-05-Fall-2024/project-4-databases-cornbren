const handleSubmit = async (event) => {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const photo = document.getElementById('photo').value;

    const newRestaurant = {
        name, 
        address,
        phone,
        photo
    };

    try {
        const response = await fetch('/api/restaurants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRestaurant)
        });

        if (response.ok) {
            alert('Restaurant added successfully!');
            window.location.href = '/restaurants'; // Redirect to restaurants page
        } else {
            throw new Error('Failed to add restaurant');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Select the form element
    const form = document.getElementById('restaurantForm');

    // Add event listener to the form for submit events
    form.addEventListener('submit', handleSubmit);
});
