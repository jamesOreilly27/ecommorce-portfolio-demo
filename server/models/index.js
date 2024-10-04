const Product = require('./Product')
const Category = require('./Category')
const Order = require('./Order')
const OrderItem = require('./OrderItem')
const Customer = require('./Customer')
const ProductCategory = require('./ProductCategory')

// Relationships between models
Category.belongsToMany(Product, { through: ProductCategory })
Product.belongsToMany(Category, { through: ProductCategory })

Order.hasMany(OrderItem)
OrderItem.belongsTo(Order)

OrderItem.belongsTo(Product)

Customer.hasMany(Order)

module.exports = {
  Product,
  Category,
  ProductCategory,
  Order,
  OrderItem,
  Customer
}
