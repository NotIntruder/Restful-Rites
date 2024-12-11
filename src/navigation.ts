import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Platforms',
      links: [
        {
          text: 'Web App',
          href: getPermalink(''),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
      ],
    },
    {
      text: 'Pricing',
      links: [
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: 'Info',
      links: [
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Tutorial',
          href: getPermalink('tutorials', 'category'),
        },
      ],
    },
  ],
  actions: [{ text: 'Login', href: 'http://localhost:4321/', target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#features' },
        { text: 'Security', href: '/about' },
        { text: 'Team', href: '/about' },
        { text: 'Enterprise', href: '/about' },
        { text: 'Customer stories', href: '#testimonials' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Resources', href: '/blog' },
      ],
    },
/*    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },*/
    {
      title: 'Support',
      links: [
        { text: 'FAQ', href: '#faq' },
        { text: 'Support', href: '/contact' },
        { text: 'Professional Services', href: '/about' },
        { text: 'Skills', href: '/about' },
        { text: 'Status', href: '/dashboard' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Careers', href: '/about' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Pricing', href: '/pricing' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/restfulrites' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/restfulrites/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61570051635020&sk=about' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/perpetualspace' },
  ],
};
