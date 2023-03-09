import { BsFillDoorOpenFill } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";

import { service1, service3, service5, service6, service8, people01, people02, people03, facebook, instagram, linkedin, twitter, founder } from "../assets";

import {buildingS1, buildingS2, buildingS3, buildingS4, buildingS5, buildingS6 } from '../assets/index';

import {a1lg, a2lg, a3lg, a4lg, a5lg, a6lg} from '../assets/index';

//building1


import { gif4, gif5, gif3 } from '../assets';

export const houses = [
  {   
    "id": "1",
    "address": {
        "title": "Location",
        "streetAddress": "KN 1001ST",
        "cell": "Biryogo",
        "city": "Kigali",
        "province": "Nyarugenge"        
    },   
    "rooms": {
      "title":"Rooms",
      "number": 9,
    },
    "bedrooms": {
      "title": "Bedrooms",
      "number": 4
    },
    "bathrooms": {
      "title": "Bathrooms",
      "number": 3
    },        
    "price": {
      "title": "Price",
      "amount": 90,
      "short": "M"
    },
    "homeStatus": {
      "title": "Home status",
      "status": "House For Sale",
      "statusCode": "FOR_SALE"
    },
    "landUse" :{
      "title": "Land use",
      "options": ["Residential", "Commercial"]
    },        
    "latitude": -1.952157,
    "longitude": 30.139896,
    "description": "This wonderful 4 bedroom, 3 bathroom home nestled in Nyarugenge offers over 2,300 sqft of space.",        
    "currency": "RWF",
    "parkingSpot": {
      "title": "Parking Spot",
      "status": true
    },
    "houseSize": {
      "title": "House size",
      "size": 450,
      "unit": "sqMt"
    },
    "lotSize": {
      "title": "Lot/land size",
      "size": 498,
      "unit": "sqMt"
    },
    "mainPhoto": buildingS1,
    "images": [buildingS1, a1lg, a2lg, a3lg, a4lg, a5lg, a6lg],
  },
  {   
    "id": "2",
    "address": {
        "title": "Location",
        "streetAddress": "KG 601ST",
        "cell": "Kacyiru",
        "city": "Kigali",
        "province": "Gasabo"        
    },   
    "rooms": {
      "title":"Rooms",
      "number": 6,
    },
    "bedrooms": {
      "title": "Bedrooms",
      "number": 4
    },
    "bathrooms": {
      "title": "Bathrooms",
      "number": 2
    },        
    "price": {
      "title": "Price",
      "amount": 50,
      "short": "M"
    },
    "homeStatus": {
      "title": "Home status",
      "status": "House For Sale",
      "statusCode": "RENT"
    },
    "landUse" :{
      "title": "Land use",
      "options": ["Residential", "Commercial"]
    },        
    "latitude": -1.949961,
    "longitude": 30.066161,
    "description": "This wonderful 4 bedroom, 3 bathroom home nestled in Nyarugenge offers over 2,300 sqft of space.",        
    "currency": "RWF",
    "parkingSpot": {
      "title": "Parking Spot",
      "status": true
    },
    "houseSize": {
      "title": "House size",
      "size": 450,
      "unit": "sqMt"
    },
    "lotSize": {
      "title": "Lot/land size",
      "size": 498,
      "unit": "sqMt"
    },
    "mainPhoto": buildingS2,
    "images": [buildingS2, a1lg, a2lg, a3lg, a4lg, a5lg, a6lg],
  },
  {   
    "id": "3",
    "address": {
        "title": "Location",
        "streetAddress": "KG 623ST",
        "cell": "kagarama",
        "city": "Kigali",
        "province": "Kicukiro"        
    },   
    "rooms": {
      "title":"Rooms",
      "number": 5,
    },
    "bedrooms": {
      "title": "Bedrooms",
      "number": 4
    },
    "bathrooms": {
      "title": "Bathrooms",
      "number": 3
    },        
    "price": {
      "title": "Price",
      "amount": 35,
      "short": "M"
    },
    "homeStatus": {
      "title": "Home status",
      "status": "House For Sale",
      "statusCode": "FOR_SALE"
    },
    "landUse" :{
      "title": "Land use",
      "options": ["Residential", "Commercial"]
    },        
    "latitude": -1.958773,
    "longitude": 30.060427,
    "description": "This cozy 3 bedroom, 2 bathroom home in Kicukiro features a beautiful garden and a garage.",        
    "currency": "RWF",
    "parkingSpot": {
      "title": "Parking Spot",
      "status": true
    },
    "houseSize": {
      "title": "House size",
      "size": 450,
      "unit": "sqMt"
    },
    "lotSize": {
      "title": "Lot/land size",
      "size": 498,
      "unit": "sqMt"
    },
    "mainPhoto": buildingS6,
    "images": [buildingS6, a1lg, a2lg, a3lg, a4lg, a5lg, a6lg],
  },
  {   
    "id": "4",
    "address": {
        "title": "Location",
        "streetAddress": "KG 6001ST",
        "cell": "Biryogo",
        "city": "Kigali",
        "province": "Nyarugenge"        
    },   
    "rooms": {
      "title":"Rooms",
      "number": 9,
    },
    "bedrooms": {
      "title": "Bedrooms",
      "number": 4
    },
    "bathrooms": {
      "title": "Bathrooms",
      "number": 3
    },        
    "price": {
      "title": "Price",
      "amount": 20,
      "short": "M"
    },
    "homeStatus": {
      "title": "Home status",
      "status": "House For Sale",
      "statusCode": "RENT"
    },
    "landUse" :{
      "title": "Land use",
      "options": ["Residential", "Commercial"]
    },        
    "latitude": -1.934996,
    "longitude": 30.111711,
    "description": "This wonderful 4 bedroom, 3 bathroom home nestled in Nyarugenge offers over 2,300 sqft of space.",        
    "currency": "RWF",
    "parkingSpot": {
      "title": "Parking Spot",
      "status": true
    },
    "houseSize": {
      "title": "House size",
      "size": 450,
      "unit": "sqMt"
    },
    "lotSize": {
      "title": "Lot/land size",
      "size": 498,
      "unit": "sqMt"
    },
    "mainPhoto": buildingS3,
    "images": [buildingS3, a1lg, a2lg, a3lg, a4lg, a5lg, a6lg],
  },
  {   
    "id": "5",
    "address": {
        "title": "Location",
        "streetAddress": "KG 6001ST",
        "cell": "Biryogo",
        "city": "Kigali",
        "province": "Nyarugenge"        
    },   
    "rooms": {
      "title":"Rooms",
      "number": 9,
    },
    "bedrooms": {
      "title": "Bedrooms",
      "number": 4
    },
    "bathrooms": {
      "title": "Bathrooms",
      "number": 3
    },        
    "price": {
      "title": "Price",
      "amount": 28,
      "short": "M"
    },
    "homeStatus": {
      "title": "Home status",
      "status": "House For Sale",
      "statusCode": "FOR_SALE"
    },
    "landUse" :{
      "title": "Land use",
      "options": ["Residential", "Commercial"]
    },        
    "latitude": -1.942531,
    "longitude": 30.073927,
    "description": "This wonderful 4 bedroom, 3 bathroom home nestled in Nyarugenge offers over 2,300 sqft of space.",        
    "currency": "RWF",
    "parkingSpot": {
      "title": "Parking Spot",
      "status": true
    },
    "houseSize": {
      "title": "House size",
      "size": 450,
      "unit": "sqMt"
    },
    "lotSize": {
      "title": "Lot/land size",
      "size": 498,
      "unit": "sqMt"
    },
    "mainPhoto": buildingS4,
    "images": [buildingS4, a1lg, a2lg, a3lg, a4lg, a5lg, a6lg],
  },
  {   
    "id": "6",
    "address": {
        "title": "Location",
        "streetAddress": "KG 6001ST",
        "cell": "Biryogo",
        "city": "Kigali",
        "province": "Nyarugenge"        
    },   
    "rooms": {
      "title":"Rooms",
      "number": 9,
    },
    "bedrooms": {
      "title": "Bedrooms",
      "number": 4
    },
    "bathrooms": {
      "title": "Bathrooms",
      "number": 3
    },        
    "price": {
      "title": "Price",
      "amount": 40,
      "short": "M"
    },
    "homeStatus": {
      "title": "Home status",
      "status": "House For Sale",
      "statusCode": "FOR_SALE"
    },
    "landUse" :{
      "title": "Land use",
      "options": ["Residential", "Commercial"]
    },        
    "latitude": -1.974474,
    "longitude": 30.129841,
    "description": "This wonderful 4 bedroom, 3 bathroom home nestled in Nyarugenge offers over 2,300 sqft of space.",        
    "currency": "RWF",
    "parkingSpot": {
      "title": "Parking Spot",
      "status": true
    },
    "houseSize": {
      "title": "House size",
      "size": 450,
      "unit": "sqMt"
    },
    "lotSize": {
      "title": "Lot/land size",
      "size": 498,
      "unit": "sqMt"
    },
    "mainPhoto": buildingS5,
    "images": [buildingS5, a1lg, a2lg, a3lg, a4lg, a5lg, a6lg],
  },
  {   
    "id": "7",
    "address": {
        "title": "Location",
        "streetAddress": "KG 6001ST",
        "cell": "Biryogo",
        "city": "Kigali",
        "province": "Nyarugenge"        
    },   
    "rooms": {
      "title":"Rooms",
      "number": 9,
    },
    "bedrooms": {
      "title": "Bedrooms",
      "number": 4
    },
    "bathrooms": {
      "title": "Bathrooms",
      "number": 3
    },        
    "price": {
      "title": "Price",
      "amount": 30,
      "short": "M"
    },
    "homeStatus": {
      "title": "Home status",
      "status": "House For Sale",
      "statusCode": "RENT"
    },
    "landUse" :{
      "title": "Land use",
      "options": ["Residential", "Commercial"]
    },        
    "latitude": -1.967760,
    "longitude": 30.011104,
    "description": "This wonderful 4 bedroom, 3 bathroom home nestled in Nyarugenge offers over 2,300 sqft of space.",        
    "currency": "RWF",
    "parkingSpot": {
      "title": "Parking Spot",
      "status": true
    },
    "houseSize": {
      "title": "House size",
      "size": 450,
      "unit": "sqMt"
    },
    "lotSize": {
      "title": "Lot/land size",
      "size": 498,
      "unit": "sqMt"
    },
    "mainPhoto": buildingS6,
    "images": [buildingS6, a1lg, a2lg, a3lg, a4lg, a5lg, a6lg],
  }

];

export const about = [
  {
    id: 1,
    title: "Our vision",
    subTitle: "Comprehensive Real Estate Solutions",
    description: "From property evaluation to marketing and closing, our team offers personalized service to make your selling or buying process stress-free. Trust us for all your real estate needs.",
    image:gif4
  },
  {
    id: 2,
    title: "Our Approach",
    subTitle: "Elevating the Real Estate Experience",
    description: "At Land Care, we're on a mission to change the way people think about real estate. By combining a client-centric approach with cutting-edge technology and a deep understanding of the market, we're elevating the real estate experience to new heights.",
    image:gif5
  },
  {
    id: 3,
    title: "Our Experience",
    subTitle: "Unsurpassed Experience in Real Estate Solutions",
    description: "With years of in-depth market knowledge and satisfied customers, we strive to exceed expectations and provide unparalleled service in every step of the process.",
    image:gif3
  },
]

export const founders = [
  {
    id: 1,
    personalInfo: {
      image: founder,
      title: "Founder",
      names: "Eng. Umuhire Jean Regis"
    },
    title: "Our Founder",
    subTitle: "Innovative Mind Behind Our Success: Meet Our Founder",
    description: "Our founder is a real estate visionary with a passion for providing the best possible customer experience. With many years of experience in the industry and a deep understanding of the market, they have successfully grown the company into a leading provider of real estate services. The founder's unique approach to business, combining creativity and innovation with a dedication to customer satisfaction, has set them apart in the industry and earned them a reputation for excellence."

  }
]

//services
export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "buy",
    title: "Buy",
  },
  {
    id: "sell",
    title: "Sell",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "about",
    title: "About",
  }
];

export const stats = [
  {
    id: "stats-1",
    title: "Completed Houses",
    value: "12",
  },
  {
    id: "stats-2",
    title: "Sold Houses",
    value: "22",
  },
  {
    id: "stats-3",
    title: "Sold Plots",
    value: "44",
  },
  {
    id: "stats-4",
    title: "Properties Evaluated",
    value: "128"
  },
  {
    id: "stats-5",
    title: "Land Survey",
    value: "220"
  },
  {
    id: "stats-6",
    title: "Happy clients",
    value: "428"
  },

];


export const feedback = [
  {
    id: "feedback-1",
    content:
      "Working with this team was an absolute pleasure. They found us our dream home in no time",
    name: "Seraphine Ngute",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "The level of professionalism and expertise is unmatched. We highly recommend them.",
    name: "Steve Nkurunziza",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Our experience with this real estate company was beyond expectations. They went above and beyond",
    name: "Keith Rugamba",
    title: "Founder & Leader",
    img: people03,
  },
];


export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const services = [
  {
    title: 'Construction consultant',
    img: service5,
    description: "Construction consultant description"
  },
  {
    title: 'Building Construction',
    img: service1,
    description: "Building Construction description"
  },
  {
    title: 'House renovation',
    img: service8,
    description: "House renovation description"
  },
  {
    title: 'Property Evalution',
    img: service3,
    description: "Property Evalution description"
  },
  {
    title: 'Land Survey',
    img: service6,
    description: "Land survey description"
  },
]


export const villas = [    
  {   
      "id": "1",
      "address": {
          "streetAddress": "KG 6001ST",
          "cell": "Biryogo",
          "city": "Kigali",
          "province": "Nyarugenge"        
      },           
      "price": 100,        
      "homeStatus": "FOR_SALE",   
      "currency": "RWF",     
      "mainPhoto": buildingS1,
      // "photos": [house1Image, /*....*/ ]
  },
  {
      "id": "2",
      "address": {
          "streetAddress": "KG 358ST",
          "cell": "Biryogo",
          "city": "Kigali",
          "province": "Gasabo"
      },
      "price": 15,
      "homeStatus": "FOR_RENT",
      "currency": "RWF",
      "mainPhoto": buildingS2,
      // "photos": [house2Image, /*....*/ ]
  },
  {
    "id": "3",
      "address": {
          "streetAddress": "KG 623ST",
          "cell": "Biryogo",
          "city": "Kigali",
          "province": "Kicukiro"
      },
      "price": 40,
      "homeStatus": "FOR_RENT",
      "currency": "RWF",
      "mainPhoto": buildingS3,
      // "photos": [house3Image, /*....*/ ]
  },
  {
      "id": "4",
      "address": {
          "streetAddress": "KG 472ST",
          "cell": "Biryogo",
          "city": "Kigali",
          "province": "Nyarugenge"
      },
      "price": 25,
      "homeStatus": "FOR_SALE",
      "currency": "RWF",
      "mainPhoto": buildingS4,
      // "photos": [house4Image, /*....*/ ]
  },
  {
    "id": "5",
      "address": {
          "streetAddress": "KG 108ST",
          "cell": "Biryogo",
          "city": "Kigali",
          "province": "Gasabo"
      },
      "price": 60,
      "currency": "RWF",
      "mainPhoto": buildingS5,
      // "photos": [house5Image, /*....*/ ]
  },
  {
      "id": "6",
      "address": {
          "streetAddress": "KG 946ST",
          "cell": "Biryogo",
          "city": "Kigali",
          "province": "Nyarugenge"
      },
      "price": 26,
      "currency": "RWF",
      "mainPhoto": buildingS6,
      // "photos": [house6Image, /*... */]
  }
];


