const db = require('../config/connection');
const {Stock} = require('../models/');


db.once('open', async () => {

  console.log(Stock)
    await Stock.deleteMany();
  
     await Stock.insertMany([
      {
        ticker: 'AMZ',
        position: 'Good',
        quantity: 500,
        price: 2.99,
      },

      {
        ticker: 'APPL',
        position: 'Great!',
        quantity: 234,
        price: 11.99,
      }
      ]).then((result) => console.log(result));
      
      
  
    console.log('stocks seeded');
  
    process.exit();
  });
  