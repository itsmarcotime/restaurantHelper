const db = require('../config/connection');
const { Menu, Restaurant } = require('../models');

const menuData = require('../seeders/menu.json');
const restaurantData = require('../seeders/restaurant.json');

db.once('open', async () => {
  
  await Menu.deleteMany({});
  await Restaurant.deleteMany({});
 

  
  const menus = await Menu.insertMany(menuData);
  
  const restaurants = await Restaurant.insertMany(restaurantData);

  for (newMenu of menus) {
    
    const tempRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    console.log(tempRestaurant);
    console.log(newMenu._id);
    tempRestaurant.menus.push(newMenu._id);
    await tempRestaurant.save();

  }

  console.log('all done!');
  process.exit(0);
});