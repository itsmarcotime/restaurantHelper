const faker = require('faker');
const db = require('../config/connection');
const { Menu, Restaurant, User } = require('../models');

const menuData = require('../seeders/menu.json');
const restaurantData = require('../seeders/restaurant.json');

db.once('open', async () => {
  
  await Menu.deleteMany({});
  await Restaurant.deleteMany({});
  // await User.deleteMany({});

  // create user 
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  // const users = await User.insertMany(userData);
  
  const menus = await Menu.insertMany(menuData);
  
  const restaurants = await Restaurant.insertMany(restaurantData);


  console.log('all done!');
  process.exit(0);
});