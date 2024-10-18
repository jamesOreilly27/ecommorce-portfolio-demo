import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons/faCcVisa'
import { faCcAmex } from '@fortawesome/free-brands-svg-icons/faCcAmex'
import { faCcDiscover } from '@fortawesome/free-brands-svg-icons/faCcDiscover'
import { faPaypal } from '@fortawesome/free-brands-svg-icons/faPaypal'
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons/faCcMastercard'
import { faCcDinersClub } from '@fortawesome/free-brands-svg-icons/faCcDinersClub'
import { faCcApplePay } from '@fortawesome/free-brands-svg-icons/faCcApplePay'
import { faCcAmazonPay } from '@fortawesome/free-brands-svg-icons/faCcAmazonPay'

const mainMenu = {
  title: 'Menu',
  links: [
    { name: 'About Us', to: '/about' },
    { name: 'Commercial', to: '/commercial' },
    { name: 'Subscribe and Save', to: '/subscribe'},
    { name: 'FAQ', to: '/faq'},
    { name: 'Contact Us', to: '/contact'}
  ]
}

const policyMenu = {
  title: 'Policies',
  links: [
    { name: 'Privacy Policy', to: '/privacy' },
    { name: 'Refunds and Returns', to: '/refunds' },
    { name: 'Shipping', to: '/shipping-info'},
    { name: "Don't sell my personal info", to: '/opt-out'},
    { name: 'Terms of Service', to: '/terms'},
    { name: 'My Account', to: '/account' },
  ]
}

const contactMenu = {
  title: "Get in Touch",
  links: [
    { name: '555-555-5555', to: '/' },
    { name: 'Email Us', to: "/" }
  ],
  title2: "Business Hours",
  links2: [
    { name: "Mon-Fri: 9am - 5pm ET", to:'/' }
  ],
  title3: "Follow Us",
  links3: [
    { icon: faInstagram, to: 'instagram.com' },
    { icon: faFacebook, to: 'facebook.com' },
    { icon: faYoutube, to: 'youtube.com' },
    { icon: faTwitter, to: 'twitter.com' }
  ]
}

const cardMenu = {
  title: "We Accept",
  links: [
    { id: 1, icon: faCcVisa, to: "/" },
    { id: 2, icon: faCcAmex, to: "/" },
    { id: 3, icon: faCcDiscover, to: '/' },
    { id: 4, icon: faCcMastercard, to: '/' },
    { id: 5, icon: faCcDinersClub, to: '/' },
    { id: 6, icon: faPaypal, to: '/' },
    { id: 7, icon: faCcApplePay, to: '/' },
    { id: 8, icon: faCcAmazonPay, to: '/' }
  ],
  cards: true
}

export const FooterMenus = [
  mainMenu,
  policyMenu,
  contactMenu,
  cardMenu
]

/**
 * Filters an array of items based on a boolean `featured` property.
 *
 * @param {Array} data - The array of items to be filtered.
 * @param {boolean} featured - Whether to filter for featured items (true) or all items (false).
 * @returns {Array} A new array containing filtered or unfiltered items.
 */

export const featuredFilter = (data, featured) => {
  return featured
    ? data.filter((item) => item.featured === true) // Filter for featured things
    : data // Render all things if featured is false
}

export const buildMenu = (menu, categories) => {
  menu.forEach(section => {
    categories.forEach(category => {
      if(category.name.toLowerCase().includes(section.selector)) {
        section.categories.push(category)
      }
    })
  })
  return menu
}
