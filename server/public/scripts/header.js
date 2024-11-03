/* This file should contain any DOM manipulation
needed to populate the header, nav, and footer elements
*/
// public/scripts/header.js

    console.log("header.js loaded"); // Check if the script is running

    // Populate the header
    const header = document.querySelector('header');
    if (header) {
        console.log("Header found and populated");
        header.innerHTML = `
            <h1>Welcome To Daly City!</h1>
        `;
    }

    // Populate the nav
    const nav = document.querySelector('nav');
    if (nav) {
        console.log("Nav found and populated");
        nav.innerHTML = `
            <div class="navbar">
                <a href="/">Home</a>
                <a href="/attractions">Attractions</a>
                <a href="/restaurants">Restaurants</a>
                <a href="/addrestaurant">Add Restaurants</a>
            </div>
        `;
    }

    // Populate the footer
    const footer = document.querySelector('footer');
    if (footer) {
        console.log("Footer found and populated");
        footer.innerHTML = `
            <div class="copyright">© 2024</div>
            <div class="contact">Contact info: blapuz@mail.sfsu.edu</div>
        `;
    }
