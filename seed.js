const db = require('./server/db.js')
const { Customer, Product, Category, Review, ProductCategory, Order, OrderItem, Cart, CartItem } = require('./server/models')
const chalk = require('chalk')


const genRandomNum = () => {
  return Math.floor(Math.random() * 9) + 1
}

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

  // Create Customers
  // const customers = await Promise.all([
  //   Customer.create({
  //     first_name: 'John',
  //     last_name: 'Doe',
  //     email: 'johndoe@example.com',
  //     password: 'hashed_password',
  //     address: '123 Main St',
  //     town: 'Anytown',
  //     zip_code: '12345',
  //   }),
  //   Customer.create({
  //     first_name: 'Jane',
  //     last_name: 'Smith',
  //     email: 'janesmith@example.com',
  //     password: 'hashed_password',
  //     address: '456 Elm St',
  //     town: 'Cityville',
  //     zip_code: '54321'
  //   }),
  // ])

  

  console.log(chalk.red.bgWhite.bold(`seeded ${customers.length} customers`))

  const products = await Promise.all([
      // Product 1 - Whole Bean
      Product.create({
        name: "Columbian Supremo",
        description: "Rich and bold, this Columbian Supremo whole bean coffee is perfect for those who enjoy a strong cup of joe. Grind it fresh for the ultimate flavor experience.",
        price: 14.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),
    
      // Product 2 - Ground Coffee
      Product.create({
        name: "French Roast",
        description: "Dark and smooth, our French roast ground coffee is perfect for those who prefer a strong and intense flavor. Ready to brew for a quick and convenient coffee fix.",
        price: 12.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),
    
      // Product 3 - Decaf Coffee
      Product.create({
        name: "Decaf French Roast",
        description: "Enjoy the rich flavor of coffee without the caffeine. Our decaf blend is perfect for those who want a relaxing cup of joe any time of day.",
        price: 13.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),
    
      // Product 4 - Coffee Beans
      Product.create({
        name: "Ethiopian Yirgacheffe",
        description: "Bright and fruity, Ethiopian Yirgacheffe coffee beans are a favorite among coffee connoisseurs. Experience the unique flavor profile of this exotic coffee.",
        price: 16.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),
    
      // Product 5 - Whole Bean
      Product.create({
        name: "Dark Roast Espresso Beans",
        description: "Intense and bold, our dark roast espresso beans are perfect for creating a rich and creamy espresso. Grind them fresh for the best flavor.",
        price: 15.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),
    
      // Product 6 - Coffee Pods
      Product.create({
        name: "Coffee Pods",
        description: "Convenient and eco-friendly, our organic fair trade coffee pods are a great way to enjoy a delicious cup of coffee. Compatible with most single-serve coffee machines.",
        price: 11.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),
    
      // Product 7 - Accessories
      Product.create({
        name: "French Press Coffee Maker",
        description: "Brew the perfect cup of coffee with our classic French press. Made with durable stainless steel and easy to use.",
        price: 39.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),
    
      // Product 8 - Accessories
      Product.create({
        name: "Ceramic Coffee Mug",
        description: "Enjoy your favorite coffee in style with our ceramic coffee mug. Perfect for everyday use or as a gift.",
        price: 9.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),
    
      // Product 9 - Accessories
      Product.create({
        name: "Electric Burr Coffee Grinder",
        description: "Grind your coffee beans to the perfect consistency with our electric burr coffee grinder. Adjustable settings for precise control.",
        price: 59.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),
    
      // Product 10 - Syrups and Creamer
      Product.create({
        name: "Vanilla Almond Milk Creamer",
        description: "Add a creamy and delicious flavor to your coffee with our vanilla almond milk creamer. Low-calorie and dairy-free.",
        price: 4.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),
      
      // Product 11 - Syrups and Creamer
      Product.create({
        name: "Caramel Coffee Syrup",
        description: "Enhance the flavor of your coffee with our rich and delicious caramel coffee syrup. Perfect for lattes, cappuccinos, and iced coffee.",
        price: 5.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 12 - Accessories
      Product.create({
        name: "Coffee Thermos",
        description: "Keep your coffee hot or cold for hours with our insulated stainless steel thermos. Perfect for taking your coffee on the go.",
        price: 24.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 13 - Gifts
      Product.create({
        name: "Coffee Lover's Gift Set",
        description: "Give the gift of coffee with our curated coffee gift set. Includes a variety of coffee beans, a mug, and a coffee grinder.",
        price: 69.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
        featured: true
      }),

      // Product 14 - Gifts
      Product.create({
        name: "The Coffee Connoisseur's Guide",
        description: "Learn everything there is to know about coffee with this beautifully illustrated coffee table book.",
        price: 29.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 15 - Treats
      Product.create({
        name: "Moist Coffee Cake",
        description: "Enjoy a delicious and decadent coffee cake with moist cake and chocolate chips. Perfect for a morning treat or afternoon snack.",
        price: 8.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
        featured: true
      }),

      // Product 16 - Gifts
      Product.create({
        name: "Coffee Bean Body Scrub",
        description: "Exfoliate and invigorate your skin with our coffee bean body scrub. Made with natural ingredients and perfect for a spa-like experience.",
        price: 12.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
        featured: true
      }),

      // Product 17 - Gifts
      Product.create({
        name: "Coffee Scented Soap",
        description: "Pamper yourself with our coffee scented soap. Made with natural ingredients and perfect for a luxurious bath time experience.",
        price: 8.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
        featured: true
      }),

      // Product 18 - Decaf
      Product.create({
        name: "Decaf Italian Roast",
        description: "Enjoy a rich and flavorful coffee without the caffeine. Our Decaf Italian Roast offers a smooth and satisfying taste.",
        price: 18.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 19 - Ground Coffee
      Product.create({
        name: "Italian Roast",
        description: "A bold and intense coffee with a smoky flavor profile. Our Italian Roast ground coffee is perfect for those who prefer a strong cup of joe.",
        price: 16.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 20 - Gifts
      Product.create({
        name: "Whole Bean 3 Flavor Set",
        description: "Discover a variety of flavors with our curated Whole Bean 3 Flavor Set. Perfect for coffee enthusiasts looking to explore new tastes.",
        price: 62.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),
      
      // Product 21 - Whole Bean
      Product.create({
        name: "Dark Roast Blend",
        description: "A rich and bold blend of coffee beans, perfect for those who enjoy a strong and flavorful cup of coffee.",
        price: 15.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 22 - Ground Coffee
      Product.create({
        name: "Medium Roast Blend",
        description: "A balanced blend with a smooth and flavorful taste. Our Medium Roast Ground Coffee is perfect for everyday enjoyment.",
        price: 13.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 23 - Decaf
      Product.create({
        name: "Decaf Colombia",
        description: "Enjoy the smooth and mellow flavor of Colombian coffee without the caffeine. Our Decaf Colombia is perfect for a relaxing cup of joe.",
        price: 14.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 24 - Decaf
      Product.create({
        name: "Decaf French Roast",
        description: "Experience the rich and intense flavor of French Roast without the caffeine. Our Decaf French Roast is perfect for those who prefer a strong cup of coffee.",
        price: 15.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 25 - Whole Bean
      Product.create({
        name: "Brazilian Santos",
        description: "A smooth and nutty coffee with a low acidity. Our Brazilian Santos whole beans are perfect for those who prefer a mellow cup of coffee.",
        price: 14.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 26 - Ground Coffee
      Product.create({
        name: "Vienna Roast",
        description: "A medium-dark roast with a rich, chocolatey flavor. Our Vienna Roast ground coffee is perfect for those who enjoy a bold and flavorful cup.",
        price: 14.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 27 - Syrups and Creamers
      Product.create({
        name: "Hazelnut Coffee Syrup",
        description: "Add a nutty flavor to your coffee with our Hazelnut Coffee Syrup. Perfect for lattes, cappuccinos, and iced coffee.",
        price: 5.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 28 - Syrups and Creamers
      Product.create({
        name: "Pumpkin Spice Coffee Syrup",
        description: "Enjoy the warm and cozy flavors of fall with our Pumpkin Spice Coffee Syrup. Perfect for lattes, cappuccinos, and iced coffee.",
        price: 5.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 29 - Ground Coffee
      Product.create({
        name: "Espresso Blend",
        description: "A finely ground blend of coffee beans, perfect for creating a rich and creamy espresso. Use with a quality espresso machine for the best results.",
        price: 16.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 30 - Whole Bean
      Product.create({
        name: "Peruvian Organic",
        description: "A smooth and balanced coffee with a hint of chocolate and caramel. Our Peruvian Organic whole beans are perfect for those who enjoy a flavorful and ethical cup of coffee.",
        price: 15.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 31 - Decaf
      Product.create({
        name: "Decaf Sumatra",
        description: "A bold and earthy flavor without the caffeine. Our Decaf Sumatra is perfect for those who enjoy a strong cup of coffee.",
        price: 15.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 32 - Syrups and Creamers
      Product.create({
        name: "Chocolate Hazelnut Coffee Syrup",
        description: "Indulge in the rich and decadent flavor of chocolate hazelnut with our Chocolate Hazelnut Coffee Syrup.",
        price: 5.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 33 - Accessories
      Product.create({
        name: "Coffee Bean Storage Container",
        description: "Keep your coffee beans fresh and flavorful with our airtight coffee bean storage container.",
        price: 14.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 34 - Treats
      Product.create({
        name: "Coffee-Infused Chocolate Bar",
        description: "Indulge in the rich and decadent flavor of our coffee-infused chocolate bar. Perfect for a sweet treat after a cup of coffee.",
        price: 3.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 35 - Treats
      Product.create({
        name: "Coffee-Infused Jelly Beans",
        description: "Enjoy a burst of coffee flavor with our coffee-infused jelly beans. A fun and unique treat for coffee lovers.",
        price: 3.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 36 - Treats
      Product.create({
        name: "Coffee-Infused Ice Cream",
        description: "Cool down with our delicious coffee-infused ice cream. Perfect for a sweet and refreshing treat on a hot day.",
        price: 4.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 37 - Treats
      Product.create({
        name: "Coffee-Infused Cookies",
        description: "Enjoy the rich flavor of coffee in every bite of our coffee-infused cookies. Perfect for a sweet and satisfying snack.",
        price: 4.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 38 - Whole Bean
      Product.create({
        name: "Sumatra Mandheling",
        description: "A bold and earthy coffee with a low acidity. Our Sumatra Mandheling whole beans are perfect for those who prefer a strong and flavorful cup.",
        price: 16.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 39 - Ground Coffee
      Product.create({
        name: "Espresso Blend",
        description: "A finely ground blend of coffee beans, perfect for creating a rich and creamy espresso. Use with a quality espresso machine for the best results.",
        price: 16.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 40 - Decaf
      Product.create({
        name: "Decaf Guatemala",
        description: "A smooth and balanced coffee with a hint of chocolate and caramel. Our Decaf Guatemala is perfect for those who enjoy a flavorful and ethical cup of coffee.",
        price: 15.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 41 - Whole Bean
      Product.create({
        name: "Guatemala Antigua",
        description: "A balanced and flavorful coffee with notes of chocolate and caramel. Our Guatemala Antigua whole beans are perfect for those who enjoy a smooth and enjoyable cup.",
        price: 15.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 42 - Ground Coffee
      Product.create({
        name: "Espresso Blend",
        description: "A finely ground blend of coffee beans, perfect for creating a rich and creamy espresso. Use with a quality espresso machine for the best results.",
        price: 16.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 43 - Decaf
      Product.create({
        name: "Decaf Guatemala",
        description: "A smooth and balanced coffee with a hint of chocolate and caramel. Our Decaf Guatemala is perfect for those who enjoy a flavorful and ethical cup of coffee.",
        price: 15.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 44 - Pods
      Product.create({
        name: "Organic Fair Trade Coffee Pods",
        description: "Enjoy a delicious cup of coffee with our convenient and eco-friendly organic fair trade coffee pods.",
        price: 12.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 45 - Pods
      Product.create({
        name: "Decaf Coffee Pods",
        description: "Enjoy a relaxing cup of coffee without the caffeine with our Decaf Coffee Pods.",
        price: 13.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 46 - Pods
      Product.create({
        name: "Flavored Coffee Pods",
        description: "Add a burst of flavor to your coffee with our Flavored Coffee Pods. Choose from a variety of delicious options.",
        price: 13.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 47 - Pods
      Product.create({
        name: "Espresso Pods",
        description: "Create a rich and creamy espresso with our Espresso Pods. Compatible with most single-serve coffee machines.",
        price: 14.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 48 - Pods
      Product.create({
        name: "Decaf Espresso Pods",
        description: "Enjoy a flavorful espresso without the caffeine with our Decaf Espresso Pods.",
        price: 15.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 49 - Pods
      Product.create({
        name: "Flavored Espresso Pods",
        description: "Add a burst of flavor to your espresso with our Flavored Espresso Pods. Choose from a variety of delicious options.",
        price: 15.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),

      // Product 50 - Pods
      Product.create({
        name: "Organic Fair Trade Espresso Pods",
        description: "Enjoy a delicious and ethical cup of coffee with our Organic Fair Trade Espresso Pods.",
        price: 16.99,
        image: "https://placehold.it/200x200", // Replace with your actual image URL
      }),
    ])
    
  console.log(chalk.red.bgWhite.bold(`seeded ${products.length} products`))

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
      description: "From soaps and bodywash to monthly subcriptions, we have everything the coffee fanatic in your life needs."
    }),
    Category.create({
      name: "Treats",
      description: "satisy your sweet tooth"
    }),
    Category.create({
      name: "Pods",
      description: "Convenience in a tiny plastic pod"
    })
  ])

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

  const productCategories = await Promise.all([
    ProductCategory.create({
      productId: products[0].id,
      categoryId: categories[0].id
    }),
  
    ProductCategory.create({
      productId: products[1].id,
      categoryId: categories[1].id
    }),
  
    ProductCategory.create({
      productId: products[2].id,
      categoryId: categories[2].id
    }),
  
    ProductCategory.create({
      productId: products[3].id,
      categoryId: categories[0].id
    }),
  
    ProductCategory.create({
      productId: products[4].id,
      categoryId: categories[0].id
    }),
  
    ProductCategory.create({
      productId: products[5].id,
      categoryId: categories[3].id
    }),
  
    ProductCategory.create({
      productId: products[6].id,
      categoryId: categories[4].id
    }),
  
    ProductCategory.create({
      productId: products[7].id,
      categoryId: categories[4].id
    }),
  
    ProductCategory.create({
      productId: products[8].id,
      categoryId: categories[4].id
    }),
  
    ProductCategory.create({
      productId: products[9].id,
      categoryId: categories[3].id
    }),

    ProductCategory.create({
      productId: products[10].id,
      categoryId: categories[1].id
    }),
  
    ProductCategory.create({
      productId: products[11].id,
      categoryId: categories[3].id
    }),
  
    ProductCategory.create({
      productId: products[12].id,
      categoryId: categories[4].id
    }),
  
    ProductCategory.create({
      productId: products[13].id,
      categoryId: categories[5].id
    }),
  
    ProductCategory.create({
      productId: products[14].id,
      categoryId: categories[6].id
    }),
  
    ProductCategory.create({
      productId: products[15].id,
      categoryId: categories[6].id
    }),
  
    ProductCategory.create({
      productId: products[16].id,
      categoryId: categories[5].id
    }),
  
    ProductCategory.create({
      productId: products[17].id,
      categoryId: categories[2].id
    }),
  
    ProductCategory.create({
      productId: products[18].id,
      categoryId: categories[1].id
    }),
  
    ProductCategory.create({
      productId: products[19].id,
      categoryId: categories[5].id
    }),

    ProductCategory.create({
      productId: products[20].id,
      categoryId: categories[0].id
    }),
  
    ProductCategory.create({
      productId: products[21].id,
      categoryId: categories[0].id
    }),
  
    ProductCategory.create({
      productId: products[22].id,
      categoryId: categories[1].id
    }),
  
    ProductCategory.create({
      productId: products[23].id,
      categoryId: categories[2].id
    }),
  
    ProductCategory.create({
      productId: products[24].id,
      categoryId: categories[2].id
    }),
  
    ProductCategory.create({
      productId: products[25].id,
      categoryId: categories[0].id
    }),
  
    ProductCategory.create({
      productId: products[26].id,
      categoryId: categories[1].id
    }),
  
    ProductCategory.create({
      productId: products[27].id,
      categoryId: categories[3].id
    }),
  
    ProductCategory.create({
      productId: products[28].id,
      categoryId: categories[3].id
    }),
  
    ProductCategory.create({
      productId: products[29].id,
      categoryId: categories[1].id
    }),

    ProductCategory.create({
      productId: products[30].id,
      categoryId: categories[0].id
    }),
  
    ProductCategory.create({
      productId: products[31].id,
      categoryId: categories[2].id
    }),
  
    ProductCategory.create({
      productId: products[32].id,
      categoryId: categories[3].id
    }),
  
    ProductCategory.create({
      productId: products[33].id,
      categoryId: categories[4].id
    }),
  
    ProductCategory.create({
      productId: products[34].id,
      categoryId: categories[6].id
    }),
  
    ProductCategory.create({
      productId: products[35].id,
      categoryId: categories[6].id
    }),
  
    ProductCategory.create({
      productId: products[36].id,
      categoryId: categories[6].id
    }),
  
    ProductCategory.create({
      productId: products[37].id,
      categoryId: categories[6].id
    }),
  
    ProductCategory.create({
      productId: products[38].id,
      categoryId: categories[0].id
    }),
  
    ProductCategory.create({
      productId: products[39].id,
      categoryId: categories[1].id
    }),

    ProductCategory.create({
      productId: products[40].id,
      categoryId: categories[2].id
    }),
  
    ProductCategory.create({
      productId: products[41].id,
      categoryId: categories[0].id
    }),
  
    ProductCategory.create({
      productId: products[42].id,
      categoryId: categories[1].id
    }),
  
    ProductCategory.create({
      productId: products[43].id,
      categoryId: categories[2].id
    }),
  
    ProductCategory.create({
      productId: products[44].id,
      categoryId: categories[7].id
    }),
  
    ProductCategory.create({
      productId: products[45].id,
      categoryId: categories[7].id
    }),
  
    ProductCategory.create({
      productId: products[46].id,
      categoryId: categories[7].id
    }),
  
    ProductCategory.create({
      productId: products[47].id,
      categoryId: categories[7].id
    }),
  
    ProductCategory.create({
      productId: products[48].id,
      categoryId: categories[7].id
    }),
  
    ProductCategory.create({
      productId: products[49].id,
      categoryId: categories[7].id
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
      productId: products[3].id,
      quantity: OrderItemTotals[0],
      price: (products[3].price * OrderItemTotals[0])
    }),
    OrderItem.create({
      id: 2,
      orderId: orders[0].id,
      productId: products[10].id,
      quantity: OrderItemTotals[1],
      price: (products[10].price * OrderItemTotals[1])
    }),
    OrderItem.create({
      id: 3,
      orderId: orders[0].id,
      productId: products[15].id,
      quantity: OrderItemTotals[2],
      price: (products[15].price * OrderItemTotals[2])
    }),
    OrderItem.create({
      id: 4,
      orderId: orders[1].id,
      productId: products[4].id,
      quantity: OrderItemTotals[3],
      price: (products[4].price * OrderItemTotals[3])
    }),
    OrderItem.create({
      id: 5,
      orderId: orders[1].id,
      productId: products[5].id,
      quantity: OrderItemTotals[4],
      price: (products[5].price * OrderItemTotals[4])
    }),
    OrderItem.create({
      id: 6,
      orderId: orders[2].id,
      productId: products[5].id,
      quantity: OrderItemTotals[5],
      price: (products[5].price * OrderItemTotals[5])
    }),
    OrderItem.create({
      id: 7,
      orderId: orders[3].id,
      productId: products[5].id,
      quantity: OrderItemTotals[6],
      price: (products[5].price * OrderItemTotals[6])
    }),
    OrderItem.create({
      id: 8,
      orderId: orders[3].id,
      productId: products[8].id,
      quantity: OrderItemTotals[7],
      price: (products[8].price * OrderItemTotals[7])
    }),
    OrderItem.create({
      id: 9,
      orderId: orders[3].id,
      productId: products[4].id,
      quantity: OrderItemTotals[8],
      price: (products[4].price * OrderItemTotals[8])
    }),
    OrderItem.create({
      id: 10,
      orderId: orders[4].id,
      productId: products[8].id,
      quantity: OrderItemTotals[9],
      price: (products[8].price * OrderItemTotals[9])
    }),
    OrderItem.create({
      id: 11,
      orderId: orders[5].id,
      productId: products[18].id,
      quantity: OrderItemTotals[10],
      price: (products[18].price * OrderItemTotals[10])
    }),
    OrderItem.create({
      id: 12,
      orderId: orders[5].id,
      productId: products[6].id,
      quantity: OrderItemTotals[11],
      price: (products[6].price * OrderItemTotals[11])
    }),
    OrderItem.create({
      id: 13,
      orderId: orders[6].id,
      productId: products[5].id,
      quantity: OrderItemTotals[12],
      price: (products[5].price * OrderItemTotals[12])
    }),
    OrderItem.create({
      id: 14,
      orderId: orders[6].id,
      productId: products[13].id,
      quantity: OrderItemTotals[13],
      price: (products[13].price * OrderItemTotals[13])
    }),
    OrderItem.create({
      id: 15,
      orderId: orders[6].id,
      productId: products[8].id,
      quantity: OrderItemTotals[14],
      price: (products[8].price * OrderItemTotals[14])
    }),
    OrderItem.create({
      id: 16,
      orderId: orders[7].id,
      productId: products[7].id,
      quantity: OrderItemTotals[15],
      price: (products[7].price * OrderItemTotals[15])
    }),
    OrderItem.create({
      id: 17,
      orderId: orders[7].id,
      productId: products[9].id,
      quantity: OrderItemTotals[16],
      price: (products[9].price * OrderItemTotals[16])
    }),
    OrderItem.create({
      id: 18,
      orderId: orders[7].id,
      productId: products[17].id,
      quantity: OrderItemTotals[17],
      price: (products[17].price * OrderItemTotals[17])
    }),
    OrderItem.create({
      id: 19,
      orderId: orders[7].id,
      productId: products[14].id,
      quantity: OrderItemTotals[18],
      price: (products[14].price * OrderItemTotals[18])
    }),
    OrderItem.create({
      id: 20,
      orderId: orders[8].id,
      productId: products[8].id,
      quantity: OrderItemTotals[19],
      price: (products[8].price * OrderItemTotals[19])
    }),
    OrderItem.create({
      id: 21,
      orderId: orders[8].id,
      productId: products[16].id,
      quantity: OrderItemTotals[20],
      price: (products[16].price * OrderItemTotals[20])
    }),
    OrderItem.create({
      id: 22,
      orderId: orders[8].id,
      productId: products[11].id,
      quantity: OrderItemTotals[21],
      price: (products[11].price * OrderItemTotals[21])
    }),
    OrderItem.create({
      id: 23,
      orderId: orders[8].id,
      productId: products[10].id,
      quantity: OrderItemTotals[22],
      price: (products[10].price * OrderItemTotals[22])
    }),
    OrderItem.create({
      id: 24,
      orderId: orders[8].id,
      productId: products[5].id,
      quantity: OrderItemTotals[23],
      price: (products[5].price * OrderItemTotals[23])
    }),
    OrderItem.create({
      id: 25,
      orderId: orders[9].id,
      productId: products[8].id,
      quantity: OrderItemTotals[24],
      price: (products[8].price * OrderItemTotals[24])
    }),
    OrderItem.create({
      id: 26,
      orderId: orders[9].id,
      productId: products[4].id,
      quantity: OrderItemTotals[25],
      price: (products[4].price * OrderItemTotals[25])
    }),
    OrderItem.create({
      id: 27,
      orderId: orders[9].id,
      productId: products[3].id,
      quantity: OrderItemTotals[26],
      price: (products[3].price * OrderItemTotals[26])
    }),
    OrderItem.create({
      id: 28,
      orderId: orders[4].id,
      productId: products[17].id,
      quantity: OrderItemTotals[27],
      price: (products[17].price * OrderItemTotals[27])
    }),
    OrderItem.create({
      id: 29,
      orderId: orders[4].id,
      productId: products[2].id,
      quantity: OrderItemTotals[28],
      price: (products[2].price * OrderItemTotals[28])
    }),
    OrderItem.create({
      id: 30,
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
      price: (3 * products[4].price)
    }),
    CartItem.create({
      id: 2,
      cartId: carts[0].id,
      productId: products[10].id,
      quantity: 1,
      price: 1 * products[10].price
    })
  ])

  console.log(chalk.bgWhite.red.bold(`put ${cartItems.length} items in cart`))

  let newCartTotal = 0
  
  cartItems.forEach(item => {
    newCartTotal += parseFloat(item.price)
  })

  carts[0].update({ total_amount: newCartTotal })

}

seed()

console.log('SEED COMPLETE')
