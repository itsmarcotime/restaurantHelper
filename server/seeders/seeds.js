const db = require('../config/connection');
const { Menu, Restaurant } = require('../models');

const menuData = require('../seeders/menu.json');
const restaurantData = require('../seeders/restaurant.json');

db.once('open', async () => {
  // clean database
  await Menu.deleteMany({});
  await Restaurant.deleteMany({});
 

  // bulk create each model
  const menus = await Menu.insertMany(menuData);
  
  const restaurants = await Restaurant.insertMany(restaurantData);

  for (newMenu of menus) {
    // randomly add each class to a school
    const tempRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    console.log(tempRestaurant);
    console.log(newMenu._id);
    tempRestaurant.menus.push(newMenu._id);
    await tempRestaurant.save();

  }

  console.log('all done!');
  process.exit(0);
});