const Product = require('./Product')
const Category = require('./Category')
const Order = require('./Order')
const OrderItem = require('./OrderItem')
const Customer = require('./Customer')
const ProductCategory = require('./ProductCategory')
const Cart = require('./Cart')
const CartItem = require('./CartItem')
const Review = require('./Review')
const Address = require('./Address')
const PaymentMethod = require('./PaymentMethod')

// Relationships between models
Category.belongsToMany(Product, { through: ProductCategory })
Product.belongsToMany(Category, { through: ProductCategory })

Order.hasMany(OrderItem)
OrderItem.belongsTo(Order)
OrderItem.belongsTo(Product)

Customer.hasMany(Order)

Review.belongsTo(Product)
Product.hasMany(Review)

Review.belongsTo(Customer)
Customer.hasMany(Review)

Customer.hasMany(Address)

/***** CART ASSOCIATIONS *****/
Cart.hasMany(CartItem)
CartItem.belongsTo(Cart)

Cart.hasOne(Order)
Order.belongsTo(Cart)

Cart.belongsTo(Customer)
Customer.hasOne(Cart)

CartItem.belongsTo(Product)
Product.hasMany(CartItem)

Customer.hasMany(PaymentMethod)
PaymentMethod.belongsTo(Customer)

module.exports = {
  Product,
  Category,
  ProductCategory,
  Order,
  OrderItem,
  Customer,
  Cart,
  CartItem,
  Review,
  Address,
  PaymentMethod
}
