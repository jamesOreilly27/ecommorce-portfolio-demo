import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons/faCcVisa'

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
    {icon: faCcVisa, to: "/"}
  ],
  cards: true
}

export const FooterMenus = [
  mainMenu,
  policyMenu,
  contactMenu,
  cardMenu
]
