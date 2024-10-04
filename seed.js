const db = require('./server/db.js')
const { Customer, Product, Category, Order, OrderItem } = require('./server/models')
const chalk = require('chalk')

async function seed() {
  await db.sync({ force: true });

  // Create Customers
  const customers = await Promise.all([
    Customer.create({
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@example.com',
      password: 'hashed_password',
      address: '123 Main St',
      town: 'Anytown',
      zip_code: '12345',
    }),
    Customer.create({
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'janesmith@example.com',
      password: 'hashed_password',
      address: '456 Elm St',
      town: 'Cityville',
      zip_code: '54321'
    }),
  ])

  console.log(chalk.red.bgWhite.bold(`seeded ${customers.length} customers`))

  const coffeeProducts = await Promise.all([
    // Product 1 - Whole Bean Coffee
    Product.create({
      name: "Columbian Supremo Whole Bean Coffee",
      description: "Rich and bold, this Columbian Supremo whole bean coffee is perfect for those who enjoy a strong cup of joe. Grind it fresh for the ultimate flavor experience.",
      price: 14.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 2 - Ground Coffee
    Product.create({
      name: "French Roast Ground Coffee",
      description: "Dark and smooth, our French roast ground coffee is perfect for those who prefer a strong and intense flavor. Ready to brew for a quick and convenient coffee fix.",
      price: 12.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 3 - Decaf Coffee
    Product.create({
      name: "Decaf Blend Ground Coffee",
      description: "Enjoy the rich flavor of coffee without the caffeine. Our decaf blend is perfect for those who want a relaxing cup of joe any time of day.",
      price: 13.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 4 - Coffee Beans
    Product.create({
      name: "Ethiopian Yirgacheffe Coffee Beans",
      description: "Bright and fruity, Ethiopian Yirgacheffe coffee beans are a favorite among coffee connoisseurs. Experience the unique flavor profile of this exotic coffee.",
      price: 16.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 5 - Espresso Beans
    Product.create({
      name: "Dark Roast Espresso Beans",
      description: "Intense and bold, our dark roast espresso beans are perfect for creating a rich and creamy espresso. Grind them fresh for the best flavor.",
      price: 15.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 6 - Coffee Pods
    Product.create({
      name: "Organic Fair Trade Coffee Pods",
      description: "Convenient and eco-friendly, our organic fair trade coffee pods are a great way to enjoy a delicious cup of coffee. Compatible with most single-serve coffee machines.",
      price: 11.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 7 - Coffee Maker
    Product.create({
      name: "Stainless Steel French Press Coffee Maker",
      description: "Brew the perfect cup of coffee with our classic French press. Made with durable stainless steel and easy to use.",
      price: 39.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 8 - Coffee Mug
    Product.create({
      name: "Ceramic Coffee Mug with Handle",
      description: "Enjoy your favorite coffee in style with our ceramic coffee mug. Perfect for everyday use or as a gift.",
      price: 9.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 9 - Coffee Grinder
    Product.create({
      name: "Electric Burr Coffee Grinder",
      description: "Grind your coffee beans to the perfect consistency with our electric burr coffee grinder. Adjustable settings for precise control.",
      price: 59.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 10 - Coffee Creamer
    Product.create({
      name: "Vanilla Almond Milk Coffee Creamer",
      description: "Add a creamy and delicious flavor to your coffee with our vanilla almond milk creamer. Low-calorie and dairy-free.",
      price: 4.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 11 - Coffee Syrup
    Product.create({
      name: "Caramel Coffee Syrup",
      description: "Enhance the flavor of your coffee with our rich and delicious caramel coffee syrup. Perfect for lattes, cappuccinos, and iced coffee.",
      price: 5.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 12 - Coffee Filter
    Product.create({
      name: "Reusable Coffee Filter",
      description: "Save money and reduce waste with our reusable coffee filter. Made with durable materials and easy to clean.",
      price: 9.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 13 - Coffee Thermos
    Product.create({
      name: "Stainless Steel Coffee Thermos",
      description: "Keep your coffee hot or cold for hours with our insulated stainless steel thermos. Perfect for taking your coffee on the go.",
      price: 24.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 14 - Coffee Gift Set
    Product.create({
      name: "Coffee Lover's Gift Set",
      description: "Give the gift of coffee with our curated coffee gift set. Includes a variety of coffee beans, a mug, and a coffee grinder.",
      price: 69.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 15 - Coffee Table Book
    Product.create({
      name: "The Coffee Connoisseur's Guide",
      description: "Learn everything there is to know about coffee with this beautifully illustrated coffee table book.",
      price: 29.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 16 - Coffee Subscription
    Product.create({
      name: "Monthly Coffee Subscription",
      description: "Enjoy fresh, high-quality coffee delivered right to your doorstep every month. Choose from a variety of beans and roasts.",
      price: 24.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 17 - Coffee Ice Cream
    Product.create({
      name: "Coffee Chocolate Chip Ice Cream",
      description: "Indulge in the rich flavor of coffee and chocolate with our creamy coffee chocolate chip ice cream.",
      price: 5.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 18 - Coffee Cake
    Product.create({
      name: "Moist Coffee Cake with Chocolate Chips",
      description: "Enjoy a delicious and decadent coffee cake with moist cake and chocolate chips. Perfect for a morning treat or afternoon snack.",
      price: 8.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 19 - Coffee Body Scrub
    Product.create({
      name: "Coffee Bean Body Scrub",
      description: "Exfoliate and invigorate your skin with our coffee bean body scrub. Made with natural ingredients and perfect for a spa-like experience.",
      price: 12.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    }),
  
    // Product 20 - Coffee Soap
    Product.create({
      name: "Coffee Scented Soap",
      description: "Pamper yourself with our coffee scented soap. Made with natural ingredients and perfect for a luxurious bath time experience.",
      price: 8.99,
      image: "https://placehold.it/200x200", // Replace with your actual image URL
    })
  ])
    
  console.log(chalk.red.bgWhite.bold(`seeded ${coffeeProducts.length} products`))

  const categories = await Promise.all([
    Category.create({
      name: 'Ground Coffee',
      description: 'Pre-ground coffee, ready to brew.',
    }),
    Category.create({
      name: 'Coffee Beans',
      description: 'Whole coffee beans, requiring grinding before brewing.',
    }),
    Category.create({
      name: 'Miscellaneous',
      description: 'Any product that doesn\'t fit into the "food" or "drink" categories.',
    })
  ])

  console.log(chalk.red.bgWhite.bold(`seeded ${categories.length} categories`))

}

seed()

console.log('SEED COMPLETE')
