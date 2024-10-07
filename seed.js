const db = require('./server/db.js')
const { Customer, Product, Category, Review, ProductCategory, Order, OrderItem } = require('./server/models')
const chalk = require('chalk')
const { promisify } = require('util')

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

  const reviews = await Promise.all([
    Review.create({ rating: 5, comment: "Great coffee!", productId: 1, customerId: 1 }),
    Review.create({ rating: 4, comment: "Nice flavor profile", productId: 2, customerId: 1 })
  ])

  console.log(chalk.red.bgWhite.bold(`seeded ${reviews.length} reviews`))

  const productCategories = await Promise.all([
    // Product 1 - Whole Bean Coffee (Category: Coffee Beans)
    ProductCategory.create({
      productId: 1,
      categoryId: 2
    }),
  
    // Product 2 - Ground Coffee (Category: Ground Coffee)
    ProductCategory.create({
      productId: 2,
      categoryId: 1
    }),
  
    // Product 3 - Decaf Blend Ground Coffee (Category: Ground Coffee)
    ProductCategory.create({
      productId: 3,
      categoryId: 1
    }),
  
    // Product 4 - Ethiopian Yirgacheffe Coffee Beans (Category: Coffee Beans)
    ProductCategory.create({
      productId: 4,
      categoryId: 2
    }),
  
    // Product 5 - Dark Roast Espresso Beans (Category: Coffee Beans)
    ProductCategory.create({
      productId: 5,
      categoryId: 2
    }),
  
    // Product 6 - Organic Fair Trade Coffee Pods (Category: Ground Coffee)
    ProductCategory.create({
      productId: 6,
      categoryId: 1
    }),
  
    // Product 7 - Coffee Maker (Category: Miscellaneous)
    ProductCategory.create({
      productId: 7,
      categoryId: 3
    }),
  
    // Product 8 - Coffee Mug (Category: Miscellaneous)
    ProductCategory.create({
      productId: 8,
      categoryId: 3
    }),
  
    // Product 9 - Coffee Grinder (Category: Miscellaneous)
    ProductCategory.create({
      productId: 9,
      categoryId: 3
    }),
  
    // Product 10 - Coffee Creamer (Category: Miscellaneous)
    ProductCategory.create({
      productId: 10,
      categoryId: 3
    }),
  
    // Product 11 - Coffee Syrup (Category: Miscellaneous)
    ProductCategory.create({
      productId: 11,
      categoryId: 3
    }),
  
    // Product 12 - Coffee Filter (Category: Miscellaneous)
    ProductCategory.create({
      productId: 12,
      categoryId: 3
    }),
  
    // Product 13 - Coffee Thermos (Category: Miscellaneous)
    ProductCategory.create({
      productId: 13,
      categoryId: 3
    }),
  
    // Product 14 - Coffee Lover's Gift Set (Category: Miscellaneous)
    ProductCategory.create({
      productId: 14,
      categoryId: 3
    }),
  
    // Product 15 - Coffee Table Book (Category: Miscellaneous)
    ProductCategory.create({
      productId: 15,
      categoryId: 3
    }),
  
    // Product 16 - Coffee Subscription (Category: Miscellaneous) - debatable
    ProductCategory.create({
      productId: 16,
      categoryId: 3 // Consider a new category for subscriptions if needed
    }),
  
    // Product 17 - Coffee Chocolate Chip Ice Cream (Category: Miscellaneous)
    ProductCategory.create({
      productId: 17,
      categoryId: 3
    }),
  
    // Product 18 - Coffee Cake (Category: Food)
    ProductCategory.create({
      productId: 18,
      categoryId: 3
    }),
  
    // Product 19 - Coffee Body Scrub (Category: Miscellaneous)
    ProductCategory.create({
      productId: 19,
      categoryId: 3
    }),
  
    // Product 20 - Coffee Scented Soap (Category: Miscellaneous)
    ProductCategory.create({
      productId: 20,
      categoryId: 3
    })
  ])

  console.log(chalk.red.bgWhite.bold(`Put ${productCategories.length} products into their categories`))

  const orders = await Promise.all([
    // Create 5 orders for the first customer
    Order.create({
      customer_id: customers[0].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 100.00,
    }),
    Order.create({
      customer_id: customers[0].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 150.00,
    }),
    Order.create({
      customer_id: customers[0].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 75.00,
    }),
    Order.create({
      customer_id: customers[0].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 200.00,
    }),
    Order.create({
      customer_id: customers[0].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 125.00,
    }),
  
    // Create 5 orders for the second customer
    Order.create({
      customer_id: customers[1].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 250.00,
    }),
    Order.create({
      customer_id: customers[1].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 300.00,
    }),
    Order.create({
      customer_id: customers[1].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 175.00,
    }),
    Order.create({
      customer_id: customers[1].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 225.00,
    }),
    Order.create({
      customer_id: customers[1].id,
      order_date: new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime()) + new Date(2023, 0, 1).getTime())),
      total_amount: 150.00,
    })
  ])

  console.log(chalk.red.bgWhite.bold(`created ${orders.length} orders`))
}

seed()

console.log('SEED COMPLETE')
