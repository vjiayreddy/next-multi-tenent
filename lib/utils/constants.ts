import { InboxIcon, SparklesIcon } from "@heroicons/react/24/outline";
export const SAMPLE_USER_ID = "5f8c1f5f2927681218811212";
export const DATA_RECORDS_LIMIT = 100;
export const navigationMenus = {
  categories: [
    {
      id: "wedding",
      name: "Wedding",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://images.unsplash.com/photo-1610047402714-307d99a677db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNoZXJ3YW5pc3xlbnwwfHwwfHx8MA%3D%3D",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "products",
          name: "Products",
          items: [
            { name: "Sherwanis", href: "#" },
            { name: "Pattu Pancha", href: "#" },
            { name: "Suits", href: "#" },
            { name: "Jodhpuris", href: "#" },
            { name: "Indo Western", href: "#" },
            { name: "Kurta", href: "#" },
            { name: "Sadri", href: "#" },
          ],
        },

        {
          id: "occasions",
          name: "Occasions",
          items: [
            { name: "Wedding", href: "#" },
            { name: "Reception", href: "#" },
            { name: "Engagement", href: "#" },
            { name: "Sangeet", href: "#" },
            { name: "Haldi", href: "#" },
          ],
        },
      ],
    },
    {
      id: "daily-wear",
      name: "Daily Wear",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Suits", href: "#" },
            { name: "Blazers", href: "#" },
            { name: "Waistcoats", href: "#" },
            { name: "Shirts", href: "#" },
            { name: "Trousers", href: "#" },
            { name: "Chinos", href: "#" },
          ],
        },
        {
          id: "shop-by-look",
          name: "Shop By Look",
          items: [
            { name: "Formal", href: "#" },
            { name: "Semi Formal", href: "#" },
            { name: "Party", href: "#" },
            { name: "Casual", href: "#" },
          ],
        },
      ],
    },
    {
      id: "accessories",
      name: "Accessories",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "men-accessories",
          name: "Men Accessories",
          items: [
            {
              name: "Shoes",
              href: "#",
              imageAlt: "Shoes",
              imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5OAYNO3ZriiDGcyXvBmGeSONGKKOKV1rghA&s",
            },
            {
              name: "Cufflinks",
              href: "#",
              imageAlt: "Cufflinks",
              imageSrc:
                "https://m.media-amazon.com/images/I/71qFKYCtHfL._AC_UF1000,1000_QL80_.jpg",
            },
            {
              name: "Tie & bows",
              href: "#",
              imageAlt: "Tie & bows",
              imageSrc:
                "https://assets.hermes.com/is/image/hermesproduct/faconnee-upside-down-bow-tie--846253T%2002-worn-3-0-0-800-800_g.jpg",
            },
            {
              name: "Belts",
              href: "#",
              imageAlt: "Belts",
              imageSrc:
                "https://www.artisansoul.in/cdn/shop/products/2304.JPG_1_2000x.jpg?v=1644908692",
            },
          ],
        },
      ],
    },
  ],
  pages: [{ name: "Blog", href: "#" }],
};

export const homeBannerSlides = [
  {
    image: "/images/suit.jpeg",
    label: "BUSINESS SUITS",
    caption: "Dressed for success 💼",
  },
  {
    image: "/images/wedding-dress.jpeg",
    label: "WEDDING WEARS",
    caption: "Two hearts, one love, perfect attire 💖",
  },
  {
    image: "/images/sharwani.jpeg",
    label: "SHARWANIS",
    caption: "Born to rule 👑",
  },
  {
    image: "/images/shirt.jpeg",
    label: "CUSTOM SHIRTS",
    caption: "Custom fit, perfect vibe 👕",
  },
  {
    image: "/images/indo-westren.jpeg",
    label: "INDO WESTERN",
    caption: "Style has no borders 🌎",
  },
  {
    image: "/images/recption.jpeg",
    label: "RECEPTION",
    caption: "Suited for forever ✨",
  },
  {
    image: "/images/engagement.jpeg",
    label: "ENGAGEMENT",
    caption: "Together is a beautiful place to be 💑",
  },
  {
    image: "/images/landing/pattu_pancha.jpeg",
    label: "PATTU PANCHA",
    caption: "Celebrating our culture, one drape at a time 🪔",
  },
];

export const homeStatsData = [
  {
    count: "12000+",
    title: "Clients Served",
  },
  {
    count: "7000+",
    title: "Grooms Served",
  },
  {
    count: "100000+",
    title: "Outfits Delivered",
  },
  {
    count: "20+",
    title: "Cities Served",
  },
];

export const homeShopByProducts = [
  {
    image: "/images/shop_suits.jpeg",
    label: "BUSINESS SUITS",
  },
  {
    image: "/images/shop_formal_shirt.jpeg",
    label: "FORMAL SHIRTS",
  },
  {
    image: "/images/shop_trouser.jpeg",
    label: "TROUSERS",
  },
  {
    image: "/images/shop_sadri.jpeg",
    label: "SADRIS",
  },
  {
    image: "/images/shop_Jodhpuris.jpeg",
    label: "JODHPURIS",
  },
  {
    image: "/images/shop_men_accessories.jpeg",
    label: "ACCESSORIES",
  },
];

export const homeShopByOccasions = [
  {
    image: "/images/shop_wedding.jpeg",
    label: "WEDDING",
  },
  {
    image: "/images/shop_sangeet.jpeg",
    label: "SANGEET",
  },
  {
    image: "/images/shop_mehndi.jpeg",
    label: "MEHNDI",
  },
  {
    image: "/images/shop_sadri.jpeg",
    label: "SADRIS",
  },
  {
    image: "/images/shop_Jodhpuris.jpeg",
    label: "JODHPURIS",
  },
  {
    image: "/images/shop_men_accessories.jpeg",
    label: "ACCESSORIES",
  },
];

export const homeElivateYourStyle = [
  {
    title: `Great fabrics, latest designs`,
    description: `Experience the pinnacle of textile innovation with our exceptional collection of fabrics that blend timeless elegance with contemporary design. Our curated selection showcases the finest materials and cutting-edge patterns that define modern luxury.`,
    btnName: "Learn More",
    link: "#",
    imgUrl: "/images/fabrics.jpeg",
    icon: InboxIcon,
  },
  {
    title: `Bespoke experience`,
    description: `Step into the extraordinary world of bespoke tailoring, where your perfect garment begins as a vision and transforms into reality through the hands of master craftsmen. Our bespoke experience transcends traditional tailoring – it's an artful journey that begins with a personal consultation in our elegant fitting room.`,
    btnName: "Learn More",
    link: "#",
    imgUrl: "/images/_bespoke.jpeg",
    icon: SparklesIcon,
  },
  {
    title: `Elite service`,
    description: `Step into a world of unparalleled luxury with our Elite Service in custom men's wear, where exceptional craftsmanship meets personalized attention. Our master tailors, with decades of expertise, guide you through an exclusive journey of creating your perfect wardrobe.`,
    btnName: "Learn More",
    link: "#",
    imgUrl: "/images/elite_service.jpeg",
    icon: InboxIcon,
  },
];

export const homeFindYourStyle = [
  {
    title: `Connect with Expert Fashion Advisors`,
    description: `Elevate your personal style journey by connecting with our handpicked team of expert fashion advisors, each bringing years of industry experience and a passion for transformative styling. Our advisors aren't just fashion enthusiasts – they're certified professionals who understand the delicate balance between current trends and timeless elegance`,
    btnName: "Learn More",
    link: "#",
    imgUrl: "/images/personal_stylist.jpeg",
    icon: InboxIcon,
  },
  {
    title: `Visit our store`,
    description: `Step into our prestigious custom menswear boutique, where master tailors craft impeccable garments that reflect your unique style and personality. Our elegant showroom, located in the heart of the fashion district, welcomes you to experience the art of bespoke tailoring at its finest.`,
    btnName: "Learn More",
    link: "#",
    imgUrl: "/images/our-store.jpeg",
    icon: SparklesIcon,
  },
  {
    title: `Schedule a video call`,
    description: `Step into a world of unparalleled luxury with our Elite Service in custom men's wear, where exceptional craftsmanship meets personalized attention. Our master tailors, with decades of expertise, guide you through an exclusive journey of creating your perfect wardrobe.`,
    btnName: "Learn More",
    link: "#",
    imgUrl: "/images/_video_call.jpeg",
    icon: InboxIcon,
  },
];

export const homeLookBooks = [
  {
    name: "Yellow Semi Formal Look",
    image: "/images/looks/yellow.jpeg",
  },
  {
    name: "Blue Tuxedo Look",
    image: "/images/looks/blue.jpeg",
  },
  {
    name: "Blue Tuxedo Look",
    image: "/images/looks/maroon.jpeg",
  },
  {
    name: "Light Pink Casual Look",
    image: "/images/looks/pink.jpeg",
  },
  {
    name: "Black Tie Three Piece Suit",
    image: "/images/looks/black.jpeg",
  },
  {
    name: "Army Green Semi Formal Linen Look",
    image: "/images/looks/army.jpeg",
  },
];
