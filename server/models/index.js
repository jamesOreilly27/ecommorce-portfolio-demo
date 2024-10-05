const Product = require('./Product')
const Category = require('./Category')
const Order = require('./Order')
const OrderItem = require('./OrderItem')
const Customer = require('./Customer')
const ProductCategory = require('./ProductCategory')
const Cart = require('./Cart')
const CartItem = require('./CartItem')

// Relationships between models
Category.belongsToMany(Product, { through: ProductCategory })
Product.belongsToMany(Category, { through: ProductCategory })

Order.hasMany(OrderItem)
OrderItem.belongsTo(Order)

OrderItem.belongsTo(Product)

Customer.hasMany(Order)

/***** CART ASSOCIATIONS *****/
Cart.hasMany(CartItem)
CartItem.belongsTo(Cart)

Cart.hasOne(Order)
Order.belongsTo(Cart)

Cart.belongsTo(Customer)
Customer.hasOne(Cart)

CartItem.belongsTo(Product)
Product.hasMany(CartItem)

module.exports = {
  Product,
  Category,
  ProductCategory,
  Order,
  OrderItem,
  Customer,
  Cart,
  CartItem
}
