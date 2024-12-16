const db = require('./server/db.js')
const { Customer, Product, Category, Review, ProductCategory, Order, OrderItem, Cart, CartItem, Address, PaymentMethod } = require('./server/models')
const chalk = require('chalk')


const genRandomNum = () => {
  return Math.floor(Math.random() * 9) + 1
}

const createIds = length => {
  const ids = []
  for(let i = 1; i <= length; i++) {
    ids.push(i)
  }

  return ids
}

const productIds = createIds(171)
async function seed() {
  await db.sync({ force: true });

  const numCustomers = 20
  const customers = []

  for (let i = 0; i < numCustomers; i++) {
    const firstName = `Customer${i + 1}` // Generate unique first names
    const lastName = `Lastname${i + 1}` // Use faker for random last names
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`

    customers.push(new Promise((resolve, reject) => {
      Customer.create({
        first_name: firstName,
        last_name: lastName,
        email
      }, (err, customer) => {
          if(err) { reject(err) }
          else { resolve(customer) }
          })
      }))
    }

  console.log(chalk.red.bgWhite.bold(`seeded ${customers.length} customers`))

  const products = await Promise.all([
    Product.create({
      id: productIds[0],
      name: "Regular Caffeine Light Roast Vanilla Spice",
      description: "Add a little kick to the everyday vanilla",
      price: 19.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[1],
      name: "Regular Caffeine Medium Roast Vanilla Spice",
      description: "Add a little kick to the everyday vanilla",
      price: 19.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[2],
      name: "Regular Caffeine Dark Roast Vanilla Spice",
      description: "Add a little kick to the everyday vanilla",
      price: 19.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[3],
      name: "Decaf Light Roast Vanilla Spice",
      description: "Add a little kick to the everyday vanilla, but not too much",
      price: 22.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[4],
      name: "Decaf Medium Roast Vanilla Spice",
      description: "Add a little kick to the everyday vanilla",
      price: 22.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[5],
      name: "Decaf Dark Roast Vanilla Spice",
      description: "Add a little kick to the everyday vanilla",
      price: 22.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[6],
      name: "Half Caf Light Roast Vanilla Spice",
      description: "Add a little kick to the everyday vanilla",
      price: 22.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[7],
      name: "Half Caf Medium Roast Vanilla Spice",
      description: "Add a little kick to the everyday vanilla",
      price: 22.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[8],
      name: "Half Caf Dark Roast Vanilla Spice",
      description: "Add a little kick to the everyday vanilla",
      price: 22.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[9],
      name: "Regular Caffeine Light Roast Hazelnut Chocolate",
      description: "Add a little kick to the everyday vanilla",
      price: 22.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[10],
      name: "Regular Caffeine Medium Roast Hazelnut Chocolate",
      description: "Add a little kick to the everyday vanilla",
      price: 22.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[11],
      name: "Regular Caffeine Dark Roast Hazelnut Chocolate",
      description: "Add a little kick to the everyday vanilla",
      price: 22.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[12],
      name: " Decaf Light Roast Hazelnut Chocolate",
      description: "Add a little kick to the everyday vanilla, but not too much",
      price: 25.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[13],
      name: "Decaf Medium Roast Hazelnut Chocolate",
      description: "Add a little kick to the everyday vanilla",
      price: 25.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[14],
      name: "Decaf Dark Roast Hazelnut Chocolate",
      description: "Add a little kick to the everyday vanilla",
      price: 25.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[15],
      name: "Half Caf Light Roast Hazelnut Chocolate",
      description: "Add a little kick to the everyday vanilla",
      price: 25.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[16],
      name: "Half Caf Medium Roast Hazelnut Chocolate",
      description: "Add a little kick to the everyday vanilla",
      price: 25.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[17],
      name: "Half Caf Dark Roast Hazelnut Chocolate",
      description: "Add a little kick to the everyday vanilla",
      price: 25.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[18],
      name: "Regular Caffeine Light Roast Caramel Apple",
      description: "Add a little kick to the everyday vanilla",
      price: 18.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[19],
      name: "Regular Caffeine Medium Roast Caramel Apple",
      description: "Add a little kick to the everyday vanilla",
      price: 18.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[20],
      name: "Regular Caffeine Dark Roast Caramel Apple",
      description: "Add a little kick to the everyday vanilla",
      price: 18.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[21],
      name: "Decaf Light Roast Caramel Apple",
      description: "Add a little kick to the everyday vanilla, but not too much",
      price: 20.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[22],
      name: "Decaf Medium Roast Caramel Apple",
      description: "Add a little kick to the everyday vanilla",
      price: 20.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[23],
      name: "Decaf Dark Roast Caramel Apple",
      description: "Add a little kick to the everyday vanilla",
      price: 20.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[24],
      name: "Half Caf Light Roast Caramel Apple",
      description: "Add a little kick to the everyday vanilla",
      price: 20.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[25],
      name: "Half Caf Medium Roast Caramel Apple",
      description: "Add a little kick to the everyday vanilla",
      price: 20.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[26],
      name: "Half Caf Dark Roast Caramel Apple",
      description: "Add a little kick to the everyday vanilla",
      price: 20.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[27],
      name: "Regular Caffeine Light Roast Blueberry Lavender",
      description: "Add a little kick to the everyday vanilla",
      price: 24.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[28],
      name: "Regular Caffeine Medium Roast Blueberry Lavender",
      description: "Add a little kick to the everyday vanilla",
      price: 24.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[29],
      name: "Regular Caffeine Dark Roast Blueberry Lavender",
      description: "Add a little kick to the everyday vanilla",
      price: 24.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[30],
      name: "Decaf Light Roast Blueberry Lavender",
      description: "Add a little kick to the everyday vanilla, but not too much",
      price: 29.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[31],
      name: "Decaf Medium Roast Blueberry Lavender",
      description: "Add a little kick to the everyday vanilla",
      price: 29.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[32],
      name: "Decaf Dark Roast Blueberry Lavender",
      description: "Add a little kick to the everyday vanilla",
      price: 29.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[33],
      name: "Half Caf Light Roast Blueberry Lavender",
      description: "Add a little kick to the everyday vanilla",
      price: 29.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[34],
      name: "Half Caf Medium Roast Blueberry Lavender",
      description: "Add a little kick to the everyday vanilla",
      price: 29.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[35],
      name: "Half Caf Dark Roast Blueberry Lavender",
      description: "Add a little kick to the everyday vanilla",
      price: 29.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[36],
      name: "Regular Caffeine Light Roast Cinnamon Raisin",
      description: "Add a little kick to the everyday vanilla",
      price: 14.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[37],
      name: "Regular Caffeine Medium Roast Cinnamon Raisin",
      description: "Add a little kick to the everyday vanilla",
      price: 14.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[38],
      name: "Regular Caffeine Dark Roast Cinnamon Raisin",
      description: "Add a little kick to the everyday vanilla",
      price: 14.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[39],
      name: "Decaf Light Roast Cinnamon Raisin",
      description: "Add a little kick to the everyday vanilla, but not too much",
      price: 17.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[40],
      name: "Decaf Medium Roast Cinnamon Raisin",
      description: "Add a little kick to the everyday vanilla",
      price: 17.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[41],
      name: "Decaf Dark Roast Cinnamon Raisin",
      description: "Add a little kick to the everyday vanilla",
      price: 17.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[42],
      name: "Half Caf Light Roast Cinnamon Raisin",
      description: "Add a little kick to the everyday vanilla",
      price: 17.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[43],
      name: "Half Caf Medium Roast Cinnamon Raisin",
      description: "Add a little kick to the everyday vanilla",
      price: 17.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[44],
      name: "Half Caf Dark Roast Cinnamon Raisin",
      description: "Add a little kick to the everyday vanilla",
      price: 17.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[45],
      name: "Regular Caffeine Light Roast Almond Pecan",
      description: "Add a little kick to the everyday vanilla",
      price: 17.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[46],
      name: "Regular Caffeine Medium Roast Almond Pecan",
      description: "Add a little kick to the everyday vanilla",
      price: 17.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[47],
      name: "Regular Caffeine Dark Roast Almond Pecan",
      description: "Add a little kick to the everyday vanilla",
      price: 17.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[48],
      name: "Decaf Light Roast Almond Pecan",
      description: "Add a little kick to the everyday vanilla, but not too much",
      price: 21.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[49],
      name: "Decaf Medium Roast Almond Pecan",
      description: "Add a little kick to the everyday vanilla",
      price: 21.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[50],
      name: "Decaf Dark Roast Almond Pecan",
      description: "Add a little kick to the everyday vanilla",
      price: 21.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[51],
      name: "Half Caf Light Roast Almond Pecan",
      description: "Add a little kick to the everyday vanilla",
      price: 21.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[52],
      name: "Half Caf Medium Roast Almond Pecan",
      description: "Add a little kick to the everyday vanilla",
      price: 21.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[53],
      name: "Half Caf Dark Roast Almond Pecan",
      description: "Add a little kick to the everyday vanilla",
      price: 21.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[54],
      name: "Regular Caffeine Light Roast Coconut Lime",
      description: "Add a little kick to the everyday vanilla",
      price: 21.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[55],
      name: "Regular Caffeine Medium Roast Coconut Lime",
      description: "Add a little kick to the everyday vanilla",
      price: 21.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[56],
      name: "Regular Caffeine Dark Roast Coconut Lime",
      description: "Add a little kick to the everyday vanilla",
      price: 21.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[57],
      name: "Decaf Light Roast Coconut Lime",
      description: "Add a little kick to the everyday vanilla, but not too much",
      price: 24.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[58],
      name: "Decaf Medium Roast Coconut Lime",
      description: "Add a little kick to the everyday vanilla",
      price: 24.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[59],
      name: "Decaf Dark Roast Coconut Lime",
      description: "Add a little kick to the everyday vanilla",
      price: 24.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[60],
      name: "Half Caf Light Roast Coconut Lime",
      description: "Add a little kick to the everyday vanilla",
      price: 24.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[61],
      name: "Half Caf Medium Roast Coconut Lime",
      description: "Add a little kick to the everyday vanilla",
      price: 24.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[62],
      name: "Half Caf Dark Roast Coconut Lime",
      description: "Add a little kick to the everyday vanilla",
      price: 24.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[63],
      name: "Regular Caffeine Light Roast Maple Walnut",
      description: "Add a little kick to the everyday vanilla",
      price: 16.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[64],
      name: "Regular Caffeine Medium Roast Maple Walnut",
      description: "Add a little kick to the everyday vanilla",
      price: 16.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[65],
      name: "Regular Caffeine Dark Roast Maple Walnut",
      description: "Add a little kick to the everyday vanilla",
      price: 16.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[66],
      name: "Decaf Light Roast Maple Walnut",
      description: "Add a little kick to the everyday vanilla, but not too much",
      price: 20.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[67],
      name: "Decaf Medium Roast Maple Walnut",
      description: "Add a little kick to the everyday vanilla",
      price: 20.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[68],
      name: "Decaf Dark Roast Maple Walnut",
      description: "Add a little kick to the everyday vanilla",
      price: 20.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[69],
      name: "Half Caf Light Roast Maple Walnut",
      description: "Add a little kick to the everyday vanilla",
      price: 20.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[70],
      name: "Half Caf Medium Roast Maple Walnut",
      description: "Add a little kick to the everyday vanilla",
      price: 20.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[71],
      name: "Half Caf Dark Roast Maple Walnut",
      description: "Add a little kick to the everyday vanilla",
      price: 20.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[72],
      name: "Regular Caffeine Light Roast Cherry Almond",
      description: "Add a little kick to the everyday vanilla",
      price: 23.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[73],
      name: "Regular Caffeine Medium Roast Cherry Almond",
      description: "Add a little kick to the everyday vanilla",
      price: 23.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[74],
      name: "Regular Caffeine Dark Roast Cherry Almond",
      description: "Add a little kick to the everyday vanilla",
      price: 23.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[75],
      name: "Decaf Light Roast Cherry Almond",
      description: "Add a little kick to the everyday vanilla, but not too much",
      price: 26.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[76],
      name: "Decaf Medium Roast Cherry Almond",
      description: "Add a little kick to the everyday vanilla",
      price: 26.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[77],
      name: "Decaf Dark Roast Cherry Almond",
      description: "Add a little kick to the everyday vanilla",
      price: 26.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[78],
      name: "Half Caf Light Roast Cherry Almond",
      description: "Add a little kick to the everyday vanilla",
      price: 26.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[79],
      name: "Half Caf Medium Roast Cherry Almond",
      description: "Add a little kick to the everyday vanilla",
      price: 26.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[80],
      name: "Half Caf Dark Roast Cherry Almond",
      description: "Add a little kick to the everyday vanilla",
      price: 26.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[81],
      name: "Regular Caffeine Light Roast Italian",
      description: "Add a little kick to the everyday vanilla",
      price: 12.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[82],
      name: "Regular Caffeine Medium Roast Italian",
      description: "Add a little kick to the everyday vanilla",
      price: 12.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[83],
      name: "Regular Caffeine Dark Roast Italian",
      description: "Add a little kick to the everyday vanilla",
      price: 12.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[84],
      name: "Decaf Light Roast Italian",
      description: "Add a little kick to the everyday vanilla, but not too much",
      price: 14.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[85],
      name: "Decaf Medium Roast Italian",
      description: "Add a little kick to the everyday vanilla",
      price: 14.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[86],
      name: "Decaf Dark Roast Italian",
      description: "Add a little kick to the everyday vanilla",
      price: 14.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[87],
      name: "Half Caf Light Roast Italian",
      description: "Add a little kick to the everyday vanilla",
      price: 14.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[88],
      name: "Half Caf Medium Roast Italian",
      description: "Add a little kick to the everyday vanilla",
      price: 14.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[89],
      name: "Half Caf Dark Roast Italian",
      description: "Add a little kick to the everyday vanilla",
      price: 14.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[90],
      name: "Regular Caffeine Light Roast French",
      description: "Add a little kick to the everyday vanilla",
      price: 15.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[91],
      name: "Regular Caffeine Medium Roast French",
      description: "Add a little kick to the everyday vanilla",
      price: 15.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[92],
      name: "Regular Caffeine Dark Roast French",
      description: "Add a little kick to the everyday vanilla",
      price: 15.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[93],
      name: "Decaf Light Roast French",
      description: "Add a little kick to the everyday vanilla, but not too much",
      price: 18.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[94],
      name: "Decaf Medium Roast French",
      description: "Add a little kick to the everyday vanilla",
      price: 18.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[95],
      name: "Decaf Dark Roast French",
      description: "Add a little kick to the everyday vanilla",
      price: 18.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[96],
      name: "Half Caf Light Roast French",
      description: "Add a little kick to the everyday vanilla",
      price: 18.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[97],
      name: "Half Caf Medium Roast French",
      description: "Add a little kick to the everyday vanilla",
      price: 18.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[98],
      name: "Half Caf Dark Roast French",
      description: "Add a little kick to the everyday vanilla",
      price: 18.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[99],
      name: "Regular Caffeine Light Roast Vienna",
      description: "Add a little kick to the everyday vanilla",
      price: 17.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[100],
      name: "Regular Caffeine Medium Roast Vienna",
      description: "Add a little kick to the everyday vanilla",
      price: 17.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[101],
      name: "Regular Caffeine Dark Roast Vienna",
      description: "Add a little kick to the everyday vanilla",
      price: 17.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[102],
      name: "Decaf Light Roast Vienna",
      description: "Add a little kick to the everyday vanilla, but not too much",
      price: 19.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[103],
      name: "Decaf Medium Roast Vienna",
      description: "Add a little kick to the everyday vanilla",
      price: 19.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[104],
      name: "Decaf Dark Roast Vienna",
      description: "Add a little kick to the everyday vanilla",
      price: 19.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[105],
      name: "Half Caf Light Roast Vienna",
      description: "Add a little kick to the everyday vanilla",
      price: 19.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[106],
      name: "Half Caf Medium Roast Vienna",
      description: "Add a little kick to the everyday vanilla",
      price: 19.99,
      image: "https://placehold.it/200x200"
    }),
    Product.create({
      id: productIds[107],
      name: "Half Caf Dark Roast Vienna",
      description: "Add a little kick to the everyday vanilla",
      price: 19.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[108],
      name: "Regular Caffeine Light Roast Donut Shop",
      description: "Add a little kick to the everyday vanilla",
      price: 8.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[109],
      name: "Regular Caffeine Medium Roast Donut Shop",
      description: "Add a little kick to the everyday vanilla",
      price: 8.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[110],
      name: "Regular Caffeine Dark Roast Donut Shop",
      description: "Add a little kick to the everyday vanilla",
      price: 8.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[111],
      name: "Decaf Light Roast Donut Shop",
      description: "Add a little kick to the everyday vanilla, but not too much",
      price: 13.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[112],
      name: "Decaf Medium Roast Donut Shop",
      description: "Add a little kick to the everyday vanilla",
      price: 13.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[113],
      name: "Decaf Dark Roast Donut Shop",
      description: "Add a little kick to the everyday vanilla",
      price: 13.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[114],
      name: "Half Caf Light Roast Donut Shop",
      description: "Add a little kick to the everyday vanilla",
      price: 13.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[115],
      name: "Half Caf Medium Roast Donut Shop",
      description: "Add a little kick to the everyday vanilla",
      price: 13.99,
      image: "https://placehold.it/200x200"
    }),
    
    Product.create({
      id: productIds[116],
      name: "Half Caf Dark Roast Donut Shop",
      description: "Add a little kick to the everyday vanilla",
      price: 13.99,
      image: "https://placehold.it/200x200"
    }),
    
    
    // Accessories
    
    Product.create({
      id: productIds[117],
      name: "French Press Coffee Maker",
      description: "Brew the perfect cup of coffee with our classic French press. Made with durable stainless steel and easy to use.",
      price: 39.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    Product.create({
      id: productIds[118],
      name: "Ceramic Coffee Mug",
      description: "Enjoy your favorite coffee in style with our ceramic coffee mug. Perfect for everyday use or as a gift.",
      price: 9.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    Product.create({
      id: productIds[119],
      name: "Electric Burr Coffee Grinder",
      description: "Grind your coffee beans to the perfect consistency with our electric burr coffee grinder. Adjustable settings for precise control.",
      price: 59.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    Product.create({
      id: productIds[120],
      name: "Coffee Thermos",
      description: "Keep your coffee hot or cold for hours with our insulated stainless steel thermos. Perfect for taking your coffee on the go.",
      price: 24.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    Product.create({
      id: productIds[121],
      name: "Coffee Bean Storage Container",
      description: "Keep your coffee beans fresh and flavorful with our airtight coffee bean storage container.",
      price: 14.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    Product.create({
      id: productIds[122],
      name: "Milk Frother",
      description: "Create frothy, barista-quality milk for your latte art or simply enjoy a creamier coffee with our handheld milk frother.",
      price: 19.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[123],
      name: "Coffee Scale",
      description: "Achieve consistent and delicious coffee by measuring your coffee grounds with our digital coffee scale. For the perfect cup, every time.",
      price: 29.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[124],
      name: "Pour Over Coffee Maker",
      description: "Experience the art of pour-over brewing with our stylish and easy-to-use pour-over coffee maker. Perfect for brewing a single cup of coffee.",
      price: 24.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[125],
      name: "Cold Brew Coffee Maker",
      description: "Brew your own delicious cold brew coffee at home with our convenient cold brew coffee maker. Enjoy smooth and refreshing cold brew anytime.",
      price: 34.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[126],
      name: "Coffee Filters",
      description: "These filters are designed for optimal coffee extraction and minimal waste.",
      price: 3.99, // Replace with price depending on bleached/unbleached option
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[127],
      name: "Coffee Tamper",
      description: "Ensure a level and evenly tamped coffee puck for optimal espresso extraction with our ergonomic coffee tamper.",
      price: 14.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[128],
      name: "Moka Pot",
      description: "Brew strong and flavorful stovetop espresso with our classic Moka pot. Perfect for those who love a bold cup of coffee.",
      price: 29.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[129],
      name: "AeroPress Coffee Maker",
      description: "Brew a quick and delicious cup of coffee with our versatile AeroPress coffee maker. Compact and portable, perfect for travel or on-the-go coffee brewing.",
      price: 39.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    //Syrups and Creamers
    Product.create({
      id: productIds[130],
      name: "Vanilla Almond Milk Creamer",
      description: "Add a creamy and delicious flavor to your coffee with our vanilla almond milk creamer. Low-calorie and dairy-free.",
      price: 4.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[131],
      name: "Caramel Coffee Syrup",
      description: "Enhance the flavor of your coffee with our rich and delicious caramel coffee syrup. Perfect for lattes, cappuccinos, and iced coffee.",
      price: 5.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[132],
      name: "Hazelnut Coffee Syrup",
      description: "Add a nutty flavor to your coffee with our Hazelnut Coffee Syrup. Perfect for lattes, cappuccinos, and iced coffee.",
      price: 5.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[133],
      name: "Pumpkin Spice Coffee Syrup",
      description: "Enjoy the warm and cozy flavors of fall with our Pumpkin Spice Coffee Syrup. Perfect for lattes, cappuccinos, and iced coffee.",
      price: 5.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[134],
      name: "Chocolate Hazelnut Coffee Syrup",
      description: "Indulge in the rich and decadent flavor of chocolate hazelnut with our Chocolate Hazelnut Coffee Syrup.",
      price: 5.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[135],
      name: "Cinnamon Dolce Syrup",
      description: "Add a warm and comforting touch to your coffee with our Cinnamon Dolce Syrup. Perfect for lattes, cappuccinos, and iced coffee.",
      price: 5.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[136],
      name: "Peppermint Mocha Syrup",
      description: "Indulge in the refreshing and festive flavors of peppermint and chocolate with our Peppermint Mocha Syrup. Perfect for holiday lattes and iced coffees.",
      price: 5.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[137],
      name: "Toasted Coconut Syrup",
      description: "Escape to paradise with the tropical flavors of our Toasted Coconut Syrup. Perfect for adding a touch of sweetness and a unique twist to your coffee.",
      price: 5.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[138],
      name: "Salted Caramel Syrup",
      description: "Elevate your coffee with the delightful combination of sweet and salty in our Salted Caramel Syrup. Perfect for lattes, cappuccinos, and iced coffee.",
      price: 5.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[139],
      name: "Sugar-Free Vanilla Bean Syrup",
      description: "Enjoy the delicious flavor of vanilla without the guilt with our Sugar-Free Vanilla Bean Syrup. Perfect for those watching their sugar intake.",
      price: 4.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[140],
      name: "Oat Milk Creamer (Vanilla)",
      description: "A delicious and creamy plant-based option! Our Oat Milk Creamer (Vanilla) is perfect for those seeking a dairy-free alternative.",
      price: 5.49,
      image: "[https://placehold.it/200x200](https://placehold.it/200x200)", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[141],
      name: "Coconut Milk Creamer (Caramel)",
      description: "Indulge in the creamy sweetness of coconut with our Coconut Milk Creamer (Caramel). A delicious dairy-free option for your coffee.",
      price: 5.49,
      image: "[https://placehold.it/200x200](https://placehold.it/200x200)", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[142],
      name: "French Vanilla Creamer",
      description: "A classic and universally loved flavor! Our French Vanilla Creamer adds a touch of creamy sweetness to your coffee.",
      price: 4.99,
      image: "[https://placehold.it/200x200](https://placehold.it/200x200)", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[143],
      name: "Irish Cream Creamer",
      description: "Add a touch of Irish flair to your coffee with our Irish Cream Creamer. A delicious blend of whiskey, cream, and vanilla flavors.",
      price: 5.99,
      image: "[https://placehold.it/200x200](https://placehold.it/200x200)", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[144],
      name: "Cold Brew Creamer (Mocha)",
      description: "Specially formulated for cold brew coffee! Our Cold Brew Creamer (Mocha) adds a rich and creamy chocolate flavor without thinning out your cold brew.",
      price: 5.99,
      image: "[https://placehold.it/200x200](https://placehold.it/200x200"
    }),
    
    //Gifts
    Product.create({
      name: "Coffee Lover's Gift Set",
      id: productIds[145],
      description: "Give the gift of coffee with our curated coffee gift set. Includes a variety of coffee beans, a mug, and a coffee grinder.",
      price: 69.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
      featured: true
    }),
    Product.create({
      id: productIds[146],
      name: "The Coffee Connoisseur's Guide",
      description: "Learn everything there is to know about coffee with this beautifully illustrated coffee table book.",
      price: 29.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    Product.create({
      id: productIds[147],
      name: "Coffee Bean Body Scrub",
      description: "Exfoliate and invigorate your skin with our coffee bean body scrub. Made with natural ingredients and perfect for a spa-like experience.",
      price: 12.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
      featured: true
    }),
    Product.create({
      id: productIds[148],
      name: "Coffee Scented Soap",
      description: "Pamper yourself with our coffee scented soap. Made with natural ingredients and perfect for a luxurious bath time experience.",
      price: 8.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
      featured: true
    }),
    Product.create({
      id: productIds[149],
      name: "Whole Bean 3 Flavor Set",
      description: "Discover a variety of flavors with our curated Whole Bean 3 Flavor Set. Perfect for coffee enthusiasts looking to explore new tastes.",
      price: 62.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[150],
      name: "Coffee Constellation Mug",
      description: "Unwind under the stars with this constellation-themed coffee mug. Identify your favorite celestial bodies while you enjoy your morning cup of joe.",
      price: 14.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
      featured: false
    }),
    
    Product.create({
      id: productIds[151],
      name: "Color Changing Coffee Mug",
      description: "Watch your message magically appear as you pour hot coffee into this color-changing mug. Surprise yourself or a loved one with this fun and interactive mug.",
      price: 12.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
      featured: false
    }),
    
    Product.create({
      id: productIds[152],
      name: "Travel Mug with Infuser",
      description: "Brew your favorite loose leaf tea or coffee on the go with this travel mug featuring a built-in infuser. Enjoy a delicious cup of your favorite beverage wherever your adventures take you.",
      price: 24.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
      featured: false
    }),
    
    Product.create({
      id: productIds[153],
      name: "Ceramic Double-Walled Mug",
      description: "Keep your coffee hot for longer and your hands cool with this ceramic double-walled mug. The innovative design prevents heat transfer for a more comfortable coffee drinking experience.",
      price: 19.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
      featured: false
    }),
    
    Product.create({
      id: productIds[154],
      name: "Funny Quote Coffee Mug",
      description: "Start your day with a smile with this funny quote coffee mug. Featuring a humorous coffee-related quote, this mug is sure to brighten your day and anyone else's who sees it.",
      price: 9.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
      featured: false
    }),
    
    //Treats
    Product.create({
      id: productIds[155],
      name: "Moist Coffee Cake",
      description: "Enjoy a delicious and decadent coffee cake with moist cake and chocolate chips. Perfect for a morning treat or afternoon snack.",
      price: 8.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
      featured: true
    }),

    Product.create({
      id: productIds[156],
      name: "Coffee-Flavored Candy",
      description: "Indulge your sweet tooth with our delicious coffee-flavored candy. Available in a variety of flavors, it's the perfect pick-me-up for coffee lovers.",
      price: 5.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),

    Product.create({
      id: productIds[157],
      name: "Coffee-Infused Chocolate Bar",
      description: "Indulge in the rich and decadent flavor of our coffee-infused chocolate bar. Perfect for a sweet treat after a cup of coffee.",
      price: 3.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    Product.create({
      id: productIds[158],
      name: "Coffee-Infused Jelly Beans",
      description: "Enjoy a burst of coffee flavor with our coffee-infused jelly beans. A fun and unique treat for coffee lovers.",
      price: 3.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    Product.create({
      id: productIds[159],
      name: "Coffee-Infused Ice Cream",
      description: "Cool down with our delicious coffee-infused ice cream. Perfect for a sweet and refreshing treat on a hot day.",
      price: 4.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    Product.create({
      id: productIds[160],
      name: "Coffee-Infused Cookies",
      description: "Enjoy the rich flavor of coffee in every bite of our coffee-infused cookies. Perfect for a sweet and satisfying snack.",
      price: 4.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[161],
      name: "Salted Caramel Brownies",
      description: "Decadent brownies infused with rich caramel and a touch of sea salt for a delightful sweet and salty treat.",
      price: 5.49,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[162],
      name: "Spiced Pecan Pie",
      description: "A classic pecan pie bursting with warm spices and crunchy pecans. Perfect for a heartwarming dessert.",
      price: 12.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[163],
      name: "Chocolate Chip Cookie Dough Truffles",
      description: "Indulge in the irresistible flavor of chocolate chip cookie dough in a bite-sized truffle form.",
      price: 6.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[164],
      name: "Lemon Poppyseed Muffins",
      description: "Light and fluffy muffins bursting with fresh lemon zest and crunchy poppyseeds. A delightful breakfast or snack.",
      price: 3.49,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[165],
      name: "Peanut Butter Swirl Brownies",
      description: "Classic brownies with a delicious swirl of peanut butter for a delightful combination of chocolate and peanut butter flavors.",
      price: 4.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[166],
      name: "Raspberry White Chocolate Scones",
      description: "Buttery scones studded with fresh raspberries and white chocolate chips. A perfect pairing with a cup of tea or coffee.",
      price: 3.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[167],
      name: "Oatmeal Raisin Cookies",
      description: "A classic treat! Chewy oatmeal cookies packed with plump raisins for a satisfying and delicious snack.",
      price: 4.49,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[168],
      name: "Double Chocolate Chip Cookies",
      description: "For the ultimate chocolate lover! Cookies loaded with both milk and dark chocolate chips for a rich and decadent treat.",
      price: 5.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[169],
      name: "Blueberry Lemon Bars",
      description: "Tart and sweet lemon bars filled with fresh blueberries. A refreshing and delightful dessert.",
      price: 4.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
    
    Product.create({
      id: productIds[170],
      name: "Carrot Cake Cupcakes",
      description: "Moist and flavorful carrot cake cupcakes topped with a creamy cream cheese frosting. A delicious and festive treat.",
      price: 3.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  ])
    
  console.log(chalk.red.bgWhite.bold(`seeded ${products.length} products`))

  const categories = await Promise.all([
    Category.create({
      name: 'Ground Coffee',
      description: 'Pre-ground coffee, ready to brew.',
      featured: true
    }),
    Category.create({
      name: 'Coffee Beans',
      description: 'Whole coffee beans, requiring grinding before brewing.',
    }),
    Category.create({
      name: 'Decaf',
      decription: 'get all the flavor and none of the buzz'
    }),
    Category.create({
      name: 'Syrups and Creamers',
      description: 'Sweeten up your morning joe',
    }),
    Category.create({
      name: 'Accessories',
      description: 'You gotta brew it with something'
    }),
    Category.create({
      name: "Gifts",
      description: "From soaps and bodywash to monthly subcriptions, we have everything the coffee fanatic in your life needs.",
      featured: true
    }),
    Category.create({
      name: "Treats",
      description: "satisy your sweet tooth",
      featured: true
    }),
    Category.create({
      name: "Pods",
      description: "Convenience in a tiny plastic pod"
    }),
    Category.create({
      name: "Light Roast",
      description: "Light Roast versions of Flavors"
    }),
    Category.create({
      name: "Medium Roast",
      description: "Medium Roast versions of Flavors"
    }),
    Category.create({
      name: "Dark Roast",
      description: "Dark Roast versions of Flavors"
    }),
    Category.create({
      name: "Regular Caffeine",
      description: "Normal Caffeine levels"
    }),
    Category.create({
      name: "Half Caf",
      description: "Half the normal level of Caffeine"
    })
  ])

  console.log(chalk.red.bgWhite.bold(`seeded ${categories.length} categories`))


  const productCategoryAssociations = []

  categories.forEach(category => {
    products.forEach(product => {
      if(product.name.includes(category.name)) {
        productCategoryAssociations.push({categoryId: category.id, productId: product.id})
      }

      if((category.id === 5 && product.id >= 118 && product.id <= 130)) {
        productCategoryAssociations.push({categoryId: category.id, productId: product.id})
      }

      if((category.id === 4 && product.id >= 131 && product.id <= 145)) {
        productCategoryAssociations.push({categoryId: category.id, productId: product.id})
      }

      if((category.id === 6 && product.id >= 146 && product.id <= 155)) {
        productCategoryAssociations.push({categoryId: category.id, productId: product.id})
      }

      if((category.id === 7 && product.id >= 156 && product.id <= 171)) {
        productCategoryAssociations.push({categoryId: category.id, productId: product.id})
      }

      if((category.id === 5 && product.id >= 151 && product.id <= 155)) {
        productCategoryAssociations.push({categoryId: category.id, productId: product.id})  
      }
    })
  })

  productCategoryAssociations.forEach(association => {
    new Promise( () => ProductCategory.create(association))
  })

  console.log(chalk.red.bgWhite.bold(`Put products into ${productCategoryAssociations.length} categories`))

  console.log(chalk.red.bgWhite.bold(`seeded ${categories.length} categories`))

  const reviews = await Promise.all([
    Review.create({
      rating: 5,
      comment: "Excellent coffee! Smooth flavor, perfect aroma.",
      productId: 1,
      customerId: 1
    }),
    Review.create({
        rating: 4,
        comment: "Good coffee, could be a bit stronger.",
        productId: 2,
        customerId: 2
    }),
    Review.create({
        rating: 3,
        comment: "Average coffee, nothing special.",
        productId: 3,
        customerId: 3
    }),
    Review.create({
        rating: 5,
        comment: "Love the fruity notes in this Ethiopian Yirgacheffe!",
        productId: 4,
        customerId: 4
    }),
    Review.create({
        rating: 5,
        comment: "Intense and bold, just like I like it.",
        productId: 5,
        customerId: 5
    }),
    Review.create({
        rating: 4,
        comment: "Convenient and easy to use, but a bit pricey.",
        productId: 6,
        customerId: 6
    }),
    Review.create({
        rating: 5,
        comment: "Great quality French press, brews a perfect cup of coffee.",
        productId: 7,
        customerId: 7
    }),
    Review.create({
        rating: 4,
        comment: "Cute mug, but a bit small.",
        productId: 8,
        customerId: 8
    }),
    Review.create({
        rating: 5,
        comment: "Grinds coffee to perfection, highly recommended.",
        productId: 9,
        customerId: 9
    }),
    Review.create({
        rating: 5,
        comment: "Creamy and delicious, perfect for my coffee.",
        productId: 10,
        customerId: 10
    }),
    Review.create({
      rating: 5,
      comment: "Great coffee, highly recommend!",
      productId: 11,
      customerId: 11
    }),
    Review.create({
        rating: 4,
        comment: "Good coffee, but a bit too sweet.",
        productId: 12,
        customerId: 12
    }),
    Review.create({
        rating: 3,
        comment: "Not a fan of the caramel flavor.",
        productId: 13,
        customerId: 13
    }),
    Review.create({
        rating: 5,
        comment: "Keeps my coffee hot all day!",
        productId: 14,
        customerId: 14
    }),
    Review.create({
        rating: 4,
        comment: "A bit pricey for a gift set.",
        productId: 15,
        customerId: 15
    }),
    Review.create({
        rating: 5,
        comment: "Delicious and moist, perfect with coffee.",
        productId: 16,
        customerId: 16
    }),
    Review.create({
        rating: 5,
        comment: "Exfoliates my skin and smells great.",
        productId: 17,
        customerId: 17
    }),
    Review.create({
        rating: 4,
        comment: "A bit strong for my liking.",
        productId: 18,
        customerId: 18
    }),
    Review.create({
        rating: 5,
        comment: "Classic Italian roast, perfect for espresso.",
        productId: 19,
        customerId: 19
    }),
    Review.create({
        rating: 5,
        comment: "A great variety of flavors in one set.",
        productId: 20,
        customerId: 20
    }),
    Review.create({
      rating: 3,
      comment: "Smooth and flavorful, but still not quite what I was looking for.",
      productId: 21,
      customerId: 1
    }),
    Review.create({
        rating: 4,
        comment: "A bit too strong for my taste.",
        productId: 22,
        customerId: 2
    }),
    Review.create({
        rating: 3,
        comment: "Decent decaf option, a bit of a bitter aftertaste.",
        productId: 23,
        customerId: 3
    }),
    Review.create({
        rating: 4,
        comment: "Missing a bit of flavor compared to the regular version.",
        productId: 24,
        customerId: 4
    }),
    Review.create({
        rating: 4,
        comment: "Classic Brazilian taste, smooth and nutty.",
        productId: 25,
        customerId: 5
    }),
    Review.create({
        rating: 4,
        comment: "A bit too sweet for my preference.",
        productId: 26,
        customerId: 6
    }),
    Review.create({
        rating: 5,
        comment: "Adds a delicious hazelnut flavor to my coffee.",
        productId: 27,
        customerId: 7
    }),
    Review.create({
        rating: 3,
        comment: "Not a big fan of pumpkin spice, but it's okay.",
        productId: 28,
        customerId: 8
    }),
    Review.create({
        rating: 5,
        comment: "Great for making a strong espresso.",
        productId: 29,
        customerId: 9
    }),
    Review.create({
        rating: 4,
        comment: "A bit acidic for my taste.",
        productId: 30,
        customerId: 10
    }),
    Review.create({
      rating: 5,
      comment: "Decaf is great, doesn't compromise on flavor.",
      productId: 31,
      customerId: 11
    }),
    Review.create({
        rating: 5,
        comment: "Love the chocolate hazelnut flavor combination.",
        productId: 32,
        customerId: 12
    }),
    Review.create({
        rating: 3,
        comment: "A bit pricey for a storage container.",
        productId: 33,
        customerId: 13
    }),
    Review.create({
        rating: 5,
        comment: "Delicious and decadent chocolate bar.",
        productId: 34,
        customerId: 14
    }),
    Review.create({
        rating: 4,
        comment: "Jelly beans are a bit too sweet for me.",
        productId: 35,
        customerId: 15
    }),
    Review.create({
        rating: 5,
        comment: "Refreshing and flavorful ice cream.",
        productId: 36,
        customerId: 16
    }),
    Review.create({
        rating: 2,
        comment: "Cookies are a bit dry.",
        productId: 37,
        customerId: 17
    }),
    Review.create({
        rating: 5,
        comment: "Classic Sumatra flavor, strong and earthy.",
        productId: 38,
        customerId: 18
    }),
    Review.create({
        rating: 5,
        comment: "Great for making a strong espresso.",
        productId: 39,
        customerId: 19
    }),
    Review.create({
        rating: 4,
        comment: "A bit acidic for my taste.",
        productId: 40,
        customerId: 20
    }),
    Review.create({
      rating: 5,
      comment: "Decaf is great, doesn't compromise on flavor.",
      productId: 41,
      customerId: 1
  }),
  Review.create({
      rating: 5,
      comment: "Love the chocolate hazelnut flavor combination.",
      productId: 42,
      customerId: 2
  }),
  Review.create({
      rating: 2,
      comment: "A bit pricey for a storage container.",
      productId: 43,
      customerId: 3
    }),
    Review.create({
        rating: 5,
        comment: "Delicious and decadent chocolate bar.",
        productId: 44,
        customerId: 4
    }),
    Review.create({
        rating: 4,
        comment: "Jelly beans are a bit too sweet for me.",
        productId: 45,
        customerId: 5
    }),
    Review.create({
        rating: 5,
        comment: "Refreshing and flavorful ice cream.",
        productId: 46,
        customerId: 6
    }),
    Review.create({
        rating: 4,
        comment: "Cookies are a bit dry.",
        productId: 47,
        customerId: 7
    }),
    Review.create({
        rating: 5,
        comment: "Classic Sumatra flavor, strong and earthy.",
        productId: 48,
        customerId: 8
    }),
    Review.create({
        rating: 5,
        comment: "Great for making a strong espresso.",
        productId: 49,
        customerId: 9
    }),
    Review.create({
        rating: 1,
        comment: "This stinks.",
        productId: 50,
        customerId: 10
    })
  ])

  console.log(chalk.red.bgWhite.bold(`seeded ${reviews.length} reviews`))

  const orders = await Promise.all([
    // Create 5 orders for the first customer
    Order.create({
      customerId: customers[0].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 100.00,
    }),
    Order.create({
      customerId: customers[0].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 0.00,
    }),
    Order.create({
      customerId: customers[0].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 0.00,
    }),
    Order.create({
      customerId: customers[0].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 0.00,
    }),
    Order.create({
      customerId: customers[0].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 0.00,
    }),
  
    // Create 5 orders for the second customer
    Order.create({
      customerId: customers[1].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 0.00,
    }),
    Order.create({
      customerId: customers[1].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 0.00,
    }),
    Order.create({
      customerId: customers[1].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 0.00,
    }),
    Order.create({
      customerId: customers[1].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 0.00,
    }),
    Order.create({
      customerId: customers[1].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 0.00,
    })
  ])

  console.log(chalk.red.bgWhite.bold(`created ${orders.length} orders`))

  const createItemQuantities = count => {
    const quantities = []
    for(let i = 0; i < count; i++) {
      quantities.push(genRandomNum())
    }

    return quantities
  }
  
  const OrderItemTotals = createItemQuantities(30)

  const orderItems = await Promise.all([
    OrderItem.create({
      orderId: orders[0].id,
      productId: products[3].id,
      quantity: OrderItemTotals[0],
      price: (products[3].price * OrderItemTotals[0])
    }),
    OrderItem.create({
      orderId: orders[0].id,
      productId: products[10].id,
      quantity: OrderItemTotals[1],
      price: (products[10].price * OrderItemTotals[1])
    }),
    OrderItem.create({
      orderId: orders[0].id,
      productId: products[15].id,
      quantity: OrderItemTotals[2],
      price: (products[15].price * OrderItemTotals[2])
    }),
    OrderItem.create({
      orderId: orders[1].id,
      productId: products[4].id,
      quantity: OrderItemTotals[3],
      price: (products[4].price * OrderItemTotals[3])
    }),
    OrderItem.create({
      orderId: orders[1].id,
      productId: products[5].id,
      quantity: OrderItemTotals[4],
      price: (products[5].price * OrderItemTotals[4])
    }),
    OrderItem.create({
      orderId: orders[2].id,
      productId: products[5].id,
      quantity: OrderItemTotals[5],
      price: (products[5].price * OrderItemTotals[5])
    }),
    OrderItem.create({
      orderId: orders[3].id,
      productId: products[5].id,
      quantity: OrderItemTotals[6],
      price: (products[5].price * OrderItemTotals[6])
    }),
    OrderItem.create({
      orderId: orders[3].id,
      productId: products[8].id,
      quantity: OrderItemTotals[7],
      price: (products[8].price * OrderItemTotals[7])
    }),
    OrderItem.create({
      orderId: orders[3].id,
      productId: products[4].id,
      quantity: OrderItemTotals[8],
      price: (products[4].price * OrderItemTotals[8])
    }),
    OrderItem.create({
      orderId: orders[4].id,
      productId: products[8].id,
      quantity: OrderItemTotals[9],
      price: (products[8].price * OrderItemTotals[9])
    }),
    OrderItem.create({
      orderId: orders[5].id,
      productId: products[18].id,
      quantity: OrderItemTotals[10],
      price: (products[18].price * OrderItemTotals[10])
    }),
    OrderItem.create({
      orderId: orders[5].id,
      productId: products[6].id,
      quantity: OrderItemTotals[11],
      price: (products[6].price * OrderItemTotals[11])
    }),
    OrderItem.create({
      orderId: orders[6].id,
      productId: products[5].id,
      quantity: OrderItemTotals[12],
      price: (products[5].price * OrderItemTotals[12])
    }),
    OrderItem.create({
      orderId: orders[6].id,
      productId: products[13].id,
      quantity: OrderItemTotals[13],
      price: (products[13].price * OrderItemTotals[13])
    }),
    OrderItem.create({
      orderId: orders[6].id,
      productId: products[8].id,
      quantity: OrderItemTotals[14],
      price: (products[8].price * OrderItemTotals[14])
    }),
    OrderItem.create({
      orderId: orders[7].id,
      productId: products[7].id,
      quantity: OrderItemTotals[15],
      price: (products[7].price * OrderItemTotals[15])
    }),
    OrderItem.create({
      orderId: orders[7].id,
      productId: products[9].id,
      quantity: OrderItemTotals[16],
      price: (products[9].price * OrderItemTotals[16])
    }),
    OrderItem.create({
      orderId: orders[7].id,
      productId: products[17].id,
      quantity: OrderItemTotals[17],
      price: (products[17].price * OrderItemTotals[17])
    }),
    OrderItem.create({
      orderId: orders[7].id,
      productId: products[14].id,
      quantity: OrderItemTotals[18],
      price: (products[14].price * OrderItemTotals[18])
    }),
    OrderItem.create({
      orderId: orders[8].id,
      productId: products[8].id,
      quantity: OrderItemTotals[19],
      price: (products[8].price * OrderItemTotals[19])
    }),
    OrderItem.create({
      orderId: orders[8].id,
      productId: products[16].id,
      quantity: OrderItemTotals[20],
      price: (products[16].price * OrderItemTotals[20])
    }),
    OrderItem.create({
      orderId: orders[8].id,
      productId: products[11].id,
      quantity: OrderItemTotals[21],
      price: (products[11].price * OrderItemTotals[21])
    }),
    OrderItem.create({
      orderId: orders[8].id,
      productId: products[10].id,
      quantity: OrderItemTotals[22],
      price: (products[10].price * OrderItemTotals[22])
    }),
    OrderItem.create({
      orderId: orders[8].id,
      productId: products[5].id,
      quantity: OrderItemTotals[23],
      price: (products[5].price * OrderItemTotals[23])
    }),
    OrderItem.create({
      orderId: orders[9].id,
      productId: products[8].id,
      quantity: OrderItemTotals[24],
      price: (products[8].price * OrderItemTotals[24])
    }),
    OrderItem.create({
      orderId: orders[9].id,
      productId: products[4].id,
      quantity: OrderItemTotals[25],
      price: (products[4].price * OrderItemTotals[25])
    }),
    OrderItem.create({
      orderId: orders[9].id,
      productId: products[3].id,
      quantity: OrderItemTotals[26],
      price: (products[3].price * OrderItemTotals[26])
    }),
    OrderItem.create({
      orderId: orders[4].id,
      productId: products[17].id,
      quantity: OrderItemTotals[27],
      price: (products[17].price * OrderItemTotals[27])
    }),
    OrderItem.create({
      orderId: orders[4].id,
      productId: products[2].id,
      quantity: OrderItemTotals[28],
      price: (products[2].price * OrderItemTotals[28])
    }),
    OrderItem.create({
      orderId: orders[4].id,
      productId: products[3].id,
      quantity: OrderItemTotals[29],
      price: (products[3].price * OrderItemTotals[29])
    })
  ])

  console.log(chalk.red.bgWhite.bold(`created ${orderItems.length} order items`))

  orders.forEach(order => {
    let total = 0
    orderItems.forEach(item => {
      if(order.id === item.orderId) {
        total += parseFloat(item.price)
      }
    })

    order.update({ total_amount: total })
  })

  const carts = await Promise.all([
    Cart.create({
      id: 1,
      customerId: 1,
      status: 'open',
      total_amount: 0.00,
    })
  ])

  const cartItems = await Promise.all([
    CartItem.create({
      id: 1,
      cartId: carts[0].id,
      productId: products[4].id,
      quantity: 3,
      style: "Whole Bean",
      bag_size: 1,
      price: (3 * products[4].price)
    }),
    CartItem.create({
      id: 2,
      cartId: carts[0].id,
      productId: products[10].id,
      quantity: 1,
      style: "Whole Bean",
      bag_size: 2,
      price: 1 * products[10].price
    })
  ])

  console.log(chalk.bgWhite.red.bold(`put ${cartItems.length} items in cart`))

  let newCartTotal = 0
  
  cartItems.forEach(item => {
    newCartTotal += parseFloat(item.price)
  })

  carts[0].update({ total_amount: newCartTotal })

  const addresses = await Promise.all([
    Address.create({
      address: '123 Main St',
      town: 'anytown',
      state: "NY",
      zip_code: '12345',
      customerId: 1,
      current: true
    }),
    Address.create({
      address: '456 Elm St',
      town: 'smallville',
      state: "NY",
      zip_code: '54321',
      customerId: 1
    }),
    Address.create({
      address: '789 Oak Ave',
      town: 'Big City',
      state: "NY",
      zip_code: '98765',
      customerId: 2
    }),
    Address.create({
      address: '321 Pine Rd',
      town: 'Seaside',
      state: "NY",
      zip_code: '56789',
      customerId: 2
    }),
    Address.create({
      address: '654 Cedar Ln',
      town: 'Mountain View',
      state: "NY",
      zip_code: '13579',
      customerId: 3
    }),
    Address.create({
      address: '987 Maple Dr',
      town: 'Riverton',
      state: "NY",
      zip_code: '97531',
      customerId: 3
    }),
    Address.create({
      address: '246 Willow St',
      town: 'Sun City',
      state: "NY",
      zip_code: '35791',
      customerId: 4
    }),
    Address.create({
      address: '1810 Birch St',
      town: 'Desert Oasis',
      state: "NY",
      zip_code: '79135',
      customerId: 4
    }),
    Address.create({
      address: '579 Spruce Ct',
      town: 'Forestville',
      state: "NY",
      zip_code: '19357',
      customerId: 5
    }),
    Address.create({
      address: '369 Fir Ln',
      town: 'Lakeview',
      state: "NY",
      zip_code: '73195',
      customerId: 5
    }),
  ])

}

seed()

console.log('SEED COMPLETE')
