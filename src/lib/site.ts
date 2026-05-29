export const SITE = {
  name: "Leyla D",
  fullName: "Leyla D Skin Body Brows",
  url: "https://leylad.com.au",
  address: {
    line1: "18 Boardwalk Boulevard",
    suburb: "Point Cook",
    state: "VIC",
    postcode: "3030",
    country: "Australia",
  },
  email: "info@leylad.com.au",
  phone: "0400 903 755",
  phoneIntl: "+61400903755",
  booking:
    "https://www.fresha.com/a/leyla-d-skin-body-brows-melbourne-18-boardwalk-boulevard-x9zqmavd/booking",
  stats: {
    services: "3,100",
    reviews: "670+",
  },
  social: {
    instagram: "https://www.instagram.com/leyladskinbodybrows/",
    facebook: "https://www.facebook.com/leyladbrowsandbeauty/",
  },
} as const;

export const NAV: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatment-services" },
  { label: "Laser", href: "/laser-treatments" },
  { label: "Contact", href: "/contact" },
];
