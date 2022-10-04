const db = require('../config/connection');
const { Menu, Restaurant } = require('../models');

const menuData = require('../seeders/menu.json');
const restaurantData = require('../seeders/restaurant.json');

db.once('open', async () => {
  
  await Menu.deleteMany({});
  await Restaurant.deleteMany({});
 

  
  const menus = await Menu.insertMany(menuData);
  
  const restaurants = await Restaurant.insertMany(restaurantData);


  console.log('all done!');
  process.exit(0);
});