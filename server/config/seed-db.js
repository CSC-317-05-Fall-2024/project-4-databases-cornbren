/* Initialize the data in the DB */
import { pool } from './database.js';

const dropTables = async () => {
    try {
        const dropTablesQuery = `
            DROP TABLE IF EXISTS restaurants;
        `;
        await pool.query(dropTablesQuery);
    } catch (error) {
        console.log(error)
    }
}

const createTables = async () => {
    try {
        console.log('creating restaurants table...');
        const createQuery = `
            CREATE TABLE IF NOT EXISTS restaurants (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name TEXT NOT NULL,
                phone TEXT NOT NULL,
                address TEXT NOT NULL,
                photo TEXT
            );
        `;
        await pool.query(createQuery);
        console.log('created restaurants table');

    } catch (error) {
        console.log(error)
    }
}


const insertData = async () => {
    try {
        console.log('adding initial data...');
        const insertQuery = `
            INSERT INTO restaurants (name, phone, address, photo) VALUES ('Dim Sum King', '(415) 555-5555', '1600 Holloway Ave', '/images/dimsumking.jpeg');
            INSERT INTO restaurants (name, phone, address, photo) VALUES ('Original Joe''s', '(415) 555-5555', '1600 Holloway Ave', '/images/originaljoes.jpeg');
            INSERT INTO restaurants (name, phone, address, photo) VALUES ('Boulevard Cafe', '(415) 555-5555', '1600 Holloway Ave', '/images/boulevardcafe.jpeg');
            INSERT INTO restaurants (name, phone, address, photo) VALUES ('Koi Palace', '(415) 555-5555', '1600 Holloway Ave', '/images/koi-palace.jpg');
            INSERT INTO restaurants (name, phone, address, photo) VALUES ('Val''s', '(415) 555-5555', '1600 Holloway Ave', '/images/vals.jpeg');
            INSERT INTO restaurants (name, phone, address, photo) VALUES ('Banana Island', '(415) 555-5555', '1600 Holloway Ave', '/images/bananaisland.jpeg');
        `;
        await pool.query(insertQuery);
    } catch (error) {
        console.log(error)
    }
}

const setup = async () => {
    await dropTables();
    await createTables();
    await insertData();
}

setup();