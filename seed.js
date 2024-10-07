const db = require('./server/db.js')
const { Customer, Product, Category, Review, ProductCategory, Order, OrderItem } = require('./server/models')
const chalk = require('chalk')

const genRandomNum = () => {
  return Math.floor(Math.random() * 9) + 1
}

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
      id: 1,
      orderId: orders[0].id,
      productId: coffeeProducts[3].id,
      quantity: OrderItemTotals[0],
      price: (coffeeProducts[3].price * OrderItemTotals[0])
    }),
    OrderItem.create({
      id: 2,
      orderId: orders[0].id,
      productId: coffeeProducts[10].id,
      quantity: OrderItemTotals[1],
      price: (coffeeProducts[10].price * OrderItemTotals[1])
    }),
    OrderItem.create({
      id: 3,
      orderId: orders[0].id,
      productId: coffeeProducts[15].id,
      quantity: OrderItemTotals[2],
      price: (coffeeProducts[15].price * OrderItemTotals[2])
    }),
    OrderItem.create({
      id: 4,
      orderId: orders[1].id,
      productId: coffeeProducts[4].id,
      quantity: OrderItemTotals[3],
      price: (coffeeProducts[4].price * OrderItemTotals[3])
    }),
    OrderItem.create({
      id: 5,
      orderId: orders[1].id,
      productId: coffeeProducts[5].id,
      quantity: OrderItemTotals[4],
      price: (coffeeProducts[5].price * OrderItemTotals[4])
    }),
    OrderItem.create({
      id: 6,
      orderId: orders[2].id,
      productId: coffeeProducts[5].id,
      quantity: OrderItemTotals[5],
      price: (coffeeProducts[5].price * OrderItemTotals[5])
    }),
    OrderItem.create({
      id: 7,
      orderId: orders[3].id,
      productId: coffeeProducts[5].id,
      quantity: OrderItemTotals[6],
      price: (coffeeProducts[5].price * OrderItemTotals[6])
    }),
    OrderItem.create({
      id: 8,
      orderId: orders[3].id,
      productId: coffeeProducts[8].id,
      quantity: OrderItemTotals[7],
      price: (coffeeProducts[8].price * OrderItemTotals[7])
    }),
    OrderItem.create({
      id: 9,
      orderId: orders[3].id,
      productId: coffeeProducts[4].id,
      quantity: OrderItemTotals[8],
      price: (coffeeProducts[4].price * OrderItemTotals[8])
    }),
    OrderItem.create({
      id: 10,
      orderId: orders[4].id,
      productId: coffeeProducts[8].id,
      quantity: OrderItemTotals[9],
      price: (coffeeProducts[8].price * OrderItemTotals[9])
    }),
    OrderItem.create({
      id: 11,
      orderId: orders[5].id,
      productId: coffeeProducts[18].id,
      quantity: OrderItemTotals[10],
      price: (coffeeProducts[18].price * OrderItemTotals[10])
    }),
    OrderItem.create({
      id: 12,
      orderId: orders[5].id,
      productId: coffeeProducts[6].id,
      quantity: OrderItemTotals[11],
      price: (coffeeProducts[6].price * OrderItemTotals[11])
    }),
    OrderItem.create({
      id: 13,
      orderId: orders[6].id,
      productId: coffeeProducts[5].id,
      quantity: OrderItemTotals[12],
      price: (coffeeProducts[5].price * OrderItemTotals[12])
    }),
    OrderItem.create({
      id: 14,
      orderId: orders[6].id,
      productId: coffeeProducts[13].id,
      quantity: OrderItemTotals[13],
      price: (coffeeProducts[13].price * OrderItemTotals[13])
    }),
    OrderItem.create({
      id: 15,
      orderId: orders[6].id,
      productId: coffeeProducts[8].id,
      quantity: OrderItemTotals[14],
      price: (coffeeProducts[8].price * OrderItemTotals[14])
    }),
    OrderItem.create({
      id: 16,
      orderId: orders[7].id,
      productId: coffeeProducts[7].id,
      quantity: OrderItemTotals[15],
      price: (coffeeProducts[7].price * OrderItemTotals[15])
    }),
    OrderItem.create({
      id: 17,
      orderId: orders[7].id,
      productId: coffeeProducts[9].id,
      quantity: OrderItemTotals[16],
      price: (coffeeProducts[9].price * OrderItemTotals[16])
    }),
    OrderItem.create({
      id: 18,
      orderId: orders[7].id,
      productId: coffeeProducts[17].id,
      quantity: OrderItemTotals[17],
      price: (coffeeProducts[17].price * OrderItemTotals[17])
    }),
    OrderItem.create({
      id: 19,
      orderId: orders[7].id,
      productId: coffeeProducts[14].id,
      quantity: OrderItemTotals[18],
      price: (coffeeProducts[14].price * OrderItemTotals[18])
    }),
    OrderItem.create({
      id: 20,
      orderId: orders[8].id,
      productId: coffeeProducts[8].id,
      quantity: OrderItemTotals[19],
      price: (coffeeProducts[8].price * OrderItemTotals[19])
    }),
    OrderItem.create({
      id: 21,
      orderId: orders[8].id,
      productId: coffeeProducts[16].id,
      quantity: OrderItemTotals[20],
      price: (coffeeProducts[16].price * OrderItemTotals[20])
    }),
    OrderItem.create({
      id: 22,
      orderId: orders[8].id,
      productId: coffeeProducts[11].id,
      quantity: OrderItemTotals[21],
      price: (coffeeProducts[11].price * OrderItemTotals[21])
    }),
    OrderItem.create({
      id: 23,
      orderId: orders[8].id,
      productId: coffeeProducts[10].id,
      quantity: OrderItemTotals[22],
      price: (coffeeProducts[10].price * OrderItemTotals[22])
    }),
    OrderItem.create({
      id: 24,
      orderId: orders[8].id,
      productId: coffeeProducts[5].id,
      quantity: OrderItemTotals[23],
      price: (coffeeProducts[5].price * OrderItemTotals[23])
    }),
    OrderItem.create({
      id: 25,
      orderId: orders[9].id,
      productId: coffeeProducts[8].id,
      quantity: OrderItemTotals[24],
      price: (coffeeProducts[8].price * OrderItemTotals[24])
    }),
    OrderItem.create({
      id: 26,
      orderId: orders[9].id,
      productId: coffeeProducts[4].id,
      quantity: OrderItemTotals[25],
      price: (coffeeProducts[4].price * OrderItemTotals[25])
    }),
    OrderItem.create({
      id: 27,
      orderId: orders[9].id,
      productId: coffeeProducts[3].id,
      quantity: OrderItemTotals[26],
      price: (coffeeProducts[3].price * OrderItemTotals[26])
    }),
    OrderItem.create({
      id: 28,
      orderId: orders[4].id,
      productId: coffeeProducts[17].id,
      quantity: OrderItemTotals[27],
      price: (coffeeProducts[17].price * OrderItemTotals[27])
    }),
    OrderItem.create({
      id: 29,
      orderId: orders[4].id,
      productId: coffeeProducts[2].id,
      quantity: OrderItemTotals[28],
      price: (coffeeProducts[2].price * OrderItemTotals[28])
    }),
    OrderItem.create({
      id: 30,
      orderId: orders[4].id,
      productId: coffeeProducts[3].id,
      quantity: OrderItemTotals[29],
      price: (coffeeProducts[3].price * OrderItemTotals[29])
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

}

seed()

console.log('SEED COMPLETE')
