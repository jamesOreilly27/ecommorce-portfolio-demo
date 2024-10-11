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
    { name: 'Email us', to: "/" }
  ]
}

const hoursMenu = {
  title: "Business Hours",
  links: [
    { name: "Mon-Fri: 9am - 5pm ET", to:'/' }
  ]
}

const followUsMenu = {
  name: "Follow Us",
  links: [
    { name: "Instagram", to: 'instagram.com' },
    { name: "Facebook", to: 'facebook.com' },
    { name: "youtube", to: 'youtube.com' },
    { name: "Twitter", to: 'twitter.com' }
  ]
}

// const cardMenu = {
//   name: "We Accept",
//   links: [
//     {name: 
//     }
//   ]
// }

export const FooterMenus = [
  mainMenu,
  policyMenu,
  contactMenu,
  hoursMenu,
  followUsMenu
]
