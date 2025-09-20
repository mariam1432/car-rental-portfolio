import luxurycar from "./assets/super_car-1-svg.webp";
import sportcar from "./assets/sport_car-1-svg.webp";
import suv from "./assets/suv-1-svg.webp";
import exoticcar from "./assets/hatchback-1-svg.webp";
import economiccar from "./assets/sedan-1-svg.webp";
import cadillac from "./assets/cadillac.svg";
import ferrari from "./assets/ferrari.svg";
import bmw from "./assets/bmw.svg";
import audi from "./assets/audi.svg";
import Lamborghini from "./assets/audi.svg";
import mclaren from "./assets/mclaren.svg";
import mercedes from "./assets/mercedes.svg";
import maserati from "./assets/maserati.svg";
import porsche from "./assets/porsche.svg";
import rangerover from "./assets/range-rover.svg";
import mini from "./assets/mini.svg";
import bently from "./assets/bently.svg";
export const URL = "https://carrentalbackend-rzqc.onrender.com/api/";
// export const URL="http://localhost:1337/api/"

export const faqsData = [
  {
    heading: "Documents",
    lineBreak: false,
    id: 1,
    title: "WHAT DOCUMENTS ARE REQUIRED TO RENT A CAR IN THE UAE?",
    content: `The list of documents depends on your country of origin and whether you are a UAE resident or tourist.\n

For UAE residents, the process is simple and fast as we only require 4 documents: copies of passport, residential visa, Emirates ID, and a valid UAE Driving License.\n

For Tourists, the documents differ a little and include a passport, visa with entry stamp, a valid home country driving license, and an international driving permit or international driving license. However, if you hold GCC, US, UK, or Canada passports, as well as some other countries’ passports, you can drive with your home country’s license.\n

To know if you are eligible to rent a car in Dubai, please ensure that your driving license is valid for driving in the UAE.`,
  },
  {
    lineBreak: false,
    id: 2,
    title: "WHAT TYPE OF A DRIVING LICENSE DO I NEED TO RENT A CAR IN THE UAE?",
    content: `If you are looking to rent a car in Dubai or any other Emirate, you will be asked to provide a valid UAE driving license or an international driving license depending on if you are a resident or a visitor.\n

If your driving license is from the following countries, you are lucky, as it is valid in the UAE.\n
If your country is not listed, please make sure to have a valid International Driving Permit (IDP).\n

Arab Star has a great solution for those who want to rent a car but don’t have a driver’s license. Our professional drivers will ensure that the driving experience is memorable and safe no matter what car you rent. So you can relax and enjoy the views while cruising around the city.`,
  },
  {
    heading: "Additional Costs",
    lineBreak: true,
    id: 3,
    title: "WHAT IS EXCLUDED FROM THE CAR RENTAL PRICE?",
    content: `Some things are excluded from the car rental price, for example, a deposit that is blocked by Arab Star and is refundable after the car is returned and all fines paid.\n

Also, fuel, car parking, and Salik (road tolls) are not included in the price.`,
  },
  {
    lineBreak: false,
    id: 4,
    title: "DO I NEED TO PAY A DEPOSIT TO RENT A CAR?",
    content: `We have a no deposit policy`,
  },
  {
    lineBreak: false,
    id: 5,
    title: "IS IT CHEAPER TO RENT OR BUY A CAR?",
    content: `Not only visitors but also residents prefer to rent a car rather than buy it. Renting saves you bucks as we cover maintenance expenditures. Also, if you want to try different models or car types, you can easily do it with Arab Star. Fast, easy, and hustle-free.`,
  },
  {
    lineBreak: false,
    id: 6,
    title: "WHAT IS SALIK AND HOW DOES IT WORK?",
    content: `Salik is Dubai’s road electronic free flow toll system that works without toll booths and allows drivers smooth and continuous driving. Every car has a red sticker on the windshield, so a fee of AED 5 will be deducted from the prepaid toll account whenever you pass through Salik. In Arab Star, all the records are done through the RTA Salik system and are billed when the car is returned.\n

Interesting to know that even if you use a taxi, you also pay Salik charges at the end of the trip.`,
  },
  {
    lineBreak: false,
    id: 7,
    title: "WHAT HAPPENS IF I ACCIDENTALLY MAKE A TRAFFIC VIOLATION?",
    content: `In such a dynamic city like Dubai, fines happen all the time. Exceeding the speed limit is one of the most popular fines, as speed cameras monitor the majority of roads in Dubai, and it’s easy to Overspeed when you enjoy smooth dring on Dubai roads.

A fine will be issued to the driver in case of a traffic violation. To avoid it, stay within the allowed speed limit, make sure to pay for your RTA parking, and follow all road signs at all times.

`,
  },
  {
    heading: "Features Included",
    lineBreak: true,
    id: 8,
    title: "WHAT FEATURES DO RENTAL CARS INCLUDE?",
    content: `In the UAE, all rental cars come with an AC and radio, while the newer models also have a USB music player or mobile charging port, making the driving experience even more convenient. Of course, every car model is different and has its own features and specifications, like a touch screen or a push-button ignition. So, before renting a car, make sure that the chosen car has everything you have been looking for.

In case you need a GPS, baby or child seat, and WIFI, they are available in Arab Star on request at an additional price.`,
  },
  {
    lineBreak: false,
    id: 9,
    title: "DO YOU PROVIDE A CAR DELIVERY SERVICE?",
    content: `Yes. At Arab Star, we are happy to spare you from the hustle of coming to pick up or drop off your car, so no matter where, airport, hotel, or house, your car will be delivered to your doorstep free of charge.`,
  },
  {
    heading: "Insurance",
    lineBreak: true,
    id: 10,
    title: "CAN SOMEONE ELSE DRIVE THE RENTED CAR?",
    content: `NO, only the registered driver whose documents were submitted to the car rental company can drive a car. In case there are 2 drivers, both of them should submit the required documents.

It is done so that in case of a car accident if the driver’s details were not registered, the Police might find you faulty even though it was not your fault.`,
  },
  {
    lineBreak: false,
    id: 11,
    title: "IS SMOKING PERMITTED IN THE RENTED CARS?",
    content: `No, due to our Policy, smoking is not allowed in any of our cars`,
  },
  {
    lineBreak: false,
    id: 12,
    title: "WHAT ARE THE PARKING RULES IN THE UAE?",
    content: `In the majority of shopping malls, parking is free for a particular period of time, and after that, there is an hourly payment. Also, in Dubai, there are many roadsides, underground and open-space parking that are constructed for the drivers’ convenience. Always remember to pay for your RTA parking via paid parking machines or SMS to 7275 with your car plate and parking zone number; otherwise, fines will accrue.`,
  },
  {
    lineBreak: true,
    id: 13,
    heading: "Why Arab Star ?",
    title: "WHY SHOULD I CHOOSE ARAB STAR RENT A CAR?",
    content: `There are more than 500 car rental companies in the UAE, and quite often, they do not deliver what they promise. Unlike others, Arab Star is the company where customer satisfaction is our main priority.

With a huge fleet of fully checked and fully vetted cars, we give a chance to make every customer’s dream come true. With the best prices on the market, we will help you live your dream. We have a wide range of vehicles for all budgets, so you can choose the car that will be delivered to your doorstep. No hustle, no pitfalls, or hidden prices.

Our car rental service is the most trusted on the market, that is why we earned our reputation as the best luxury car rental company in Dubai.

Don’t waste your time looking anywhere else; call Arab Star or check our websites for the best deals.`,
  },
];
export const articles = [
  {
    title: "Exotic Cars You Should Rent for Your Next Film Project",
    description:
      "Exotic Cars You Should Rent for Your Next Film Project. We often have seen exotic cars in movies and film shooting which sets the tone.",
    date: "22/5/2025",
    noOfComments: 12,
  },
  {
    title: "The Best Desert Locations for Your Next Adventure Shoot",
    description:
      "The Best Desert Locations for Your Next Adventure Shoot. Dramatic sand dunes and endless horizons make for stunning cinematic visuals.",
    date: "18/5/2025",
    noOfComments: 8,
  },
  {
    title: "How Lighting Can Transform Your Film Set",
    description:
      "How Lighting Can Transform Your Film Set. Proper lighting isn't just about visibility — it shapes mood and depth in every frame.",
    date: "25/5/2025",
    noOfComments: 5,
  },
  {
    title: "5 Drone Shots Every Director Should Know",
    description:
      "5 Drone Shots Every Director Should Know. Aerial shots can elevate your scenes — literally and creatively.",
    date: "20/5/2025",
    noOfComments: 17,
  },
  {
    title: "Vintage Cars That Add Timeless Charm to Period Films",
    description:
      "Vintage Cars That Add Timeless Charm to Period Films. Transport your audience to the past with the right vehicle choices.",
    date: "21/5/2025",
    noOfComments: 9,
  },
  {
    title: "Luxury Cars That Make a Statement On Screen",
    description:
      "Luxury Cars That Make a Statement On Screen. From roaring engines to sleek designs, these cars steal the scene.",
    date: "23/5/2025",
    noOfComments: 14,
  },
];
export const sampleImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_LbT3BaTQYN_3AwC9QQnHY9ZWV6AyRhWWiw&s",
  "https://www.topgear.com/sites/default/files/news-listicle/image/lamborghini_aventador_svj_yellow_track_22_1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMM-ib9WKBl9s0ZlntwYdPIOxYngLYpC_Kw&s",
  "https://www.carscoops.com/wp-content/uploads/2019/08/aba949b6-2020-acura-nsx-indy-yellow-pearl-0-1024x555.jpg",
];

export const carTypeList = [
  {
    id: 1,
    slug: "luxury-cars",
    cartype: "Luxury Cars",
    image: {
      url: luxurycar,
    },
    car_subcategories: [
      {
        id: 101,
        slug: "luxury-sedans",
        categorySubType: "Luxury Sedans",
        cars: [
          {
            id: 10101,
            name: "Mercedes-Benz S-Class",
            slug: "mercedes-benz-s-class",
            pricePerDay: 450,
            category: {
              id: 1,
              slug: "luxury-cars",
              name: "Luxury Cars"
            },
            subcategory: {
              id: 101,
              slug: "luxury-sedans",
              name: "Luxury Sedans"
            },
            brand: {
              id: 1,
              car_Brand: "Mercedes-Benz",
              slug: "mercedes-benz",
              image: {
                url: mercedes,
              },
            },
            images: [
              {
                url: "https://images.netdirector.auto/eyJrZXkiOiJuZHN0b2NrL2ltYWdlcy9zdG9jay8zNjJlNzJhNTE2Y2EwYjcwMjUzMzBlNjM4OTUzNzY3ZWZlN2JjYWM3L1cxSzIyMzE2MTFBMzE3NDI2XzMxNzQyNl8xLmpwZyIsImJ1Y2tldCI6Im5kLXN0b2NrLWlyZWxhbmQtcHJvZHVjdGlvbiIsImxhc3RfbW9kaWZpZWQiOiIxNzUxNzAxNTA5IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDUsImhlaWdodCI6Mjg0LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
              },
            ],
          },
          {
            id: 10102,
            name: "BMW 7 Series",
            slug: "bmw-7-series",
            pricePerDay: 420,
            category: {
              id: 1,
              slug: "luxury-cars",
              name: "Luxury Cars"
            },
            subcategory: {
              id: 101,
              slug: "luxury-sedans",
              name: "Luxury Sedans"
            },
            brand: {
              id: 2,
              car_Brand: "BMW",
              slug: "bmw",
              image: {
                url: bmw,
              },
            },
            images: [
              {
                url: "https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=408,height=258,sharpen=0/https://renty.ae/uploads/car/photo/l/black_bmw-li_2021_3772_main_005dddbbcc97b6a0d8bebec79ea5eb96.jpg",
              },
            ],
          },
          {
            id: 10103,
            name: "Audi A8",
            slug: "audi-a8",
            pricePerDay: 400,
            category: {
              id: 1,
              slug: "luxury-cars",
              name: "Luxury Cars"
            },
            subcategory: {
              id: 101,
              slug: "luxury-sedans",
              name: "Luxury Sedans"
            },
            brand: {
              id: 3,
              car_Brand: "Audi",
              slug: "audi",
              image: {
                url: audi,
              },
            },
            images: [
              {
                url: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/124141/a8-l-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80",
              },
            ],
          },
        ],
      },
      {
        id: 102,
        slug: "luxury-suvs",
        categorySubType: "Luxury SUVs",
        cars: [
          {
            id: 10201,
            name: "Range Rover",
            slug: "range-rover",
            pricePerDay: 500,
            category: {
              id: 1,
              slug: "luxury-cars",
              name: "Luxury Cars"
            },
            subcategory: {
              id: 102,
              slug: "luxury-suvs",
              name: "Luxury SUVs"
            },
            brand: {
              id: 9,
              car_Brand: "Land Rover",
              slug: "land-rover",
              image: {
                url: rangerover,
              },
            },
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6K-aU0tiZzfn0h5yj84BAGTes57g3vO7sng&s",
              },
            ],
          },
          {
            id: 10202,
            name: "Mercedes-Benz G-Class",
            slug: "mercedes-benz-g-class",
            pricePerDay: 550,
            category: {
              id: 1,
              slug: "luxury-cars",
              name: "Luxury Cars"
            },
            subcategory: {
              id: 102,
              slug: "luxury-suvs",
              name: "Luxury SUVs"
            },
            brand: {
              id: 1,
              car_Brand: "Mercedes-Benz",
              slug: "mercedes-benz",
              image: {
                url: mercedes,
              },
            },
            images: [
              {
                url: "https://ymimg1.b8cdn.com/resized/car_model/10835/pictures/13376330/webp_listing_main_01.webp",
              },
            ],
          },
          {
            id: 10203,
            name: "BMW X7",
            slug: "bmw-x7",
            pricePerDay: 480,
            category: {
              id: 1,
              slug: "luxury-cars",
              name: "Luxury Cars"
            },
            subcategory: {
              id: 102,
              slug: "luxury-suvs",
              name: "Luxury SUVs"
            },
            brand: {
              id: 2,
              car_Brand: "BMW",
              slug: "bmw",
              image: {
                url: bmw,
              },
            },
            images: [
              {
                url: "https://imagecdnsa.zigwheels.ae/large/gallery/exterior/4/1153/bmw-x7-front-angle-low-view-804901.jpg",
              },
            ],
          },
        ],
      },
      {
        id: 103,
        slug: "executive-cars",
        categorySubType: "Executive Cars",
        cars: [
          {
            id: 10301,
            name: "Mercedes-Benz E-Class",
            slug: "mercedes-benz-e-class",
            pricePerDay: 350,
            category: {
              id: 1,
              slug: "luxury-cars",
              name: "Luxury Cars"
            },
            subcategory: {
              id: 103,
              slug: "executive-cars",
              name: "Executive Cars"
            },
            brand: {
              id: 1,
              car_Brand: "Mercedes-Benz",
              slug: "mercedes-benz",
              image: {
                url: mercedes,
              },
            },
            images: [
              {
                url: "https://media.ed.edmunds-media.com/mercedes-benz/e-class/2025/oem/2025_mercedes-benz_e-class_sedan_amg-e-53-hybrid_fq_oem_1_1280.jpg",
              },
            ],
          },
          {
            id: 10302,
            name: "BMW 5 Series",
            slug: "bmw-5-series",
            pricePerDay: 340,
            category: {
              id: 1,
              slug: "luxury-cars",
              name: "Luxury Cars"
            },
            subcategory: {
              id: 103,
              slug: "executive-cars",
              name: "Executive Cars"
            },
            brand: {
              id: 2,
              car_Brand: "BMW",
              slug: "bmw",
              image: {
                url: bmw,
              },
            },
            images: [
              {
                url: "https://www.bmw.com.mo/content/dam/bmw/common/all-models/5-series/sedan/2023/ice2_Titan-Bronze_810-501.png",
              },
            ],
          },
          {
            id: 10303,
            name: "Audi A6",
            slug: "audi-a6",
            pricePerDay: 330,
            category: {
              id: 1,
              slug: "luxury-cars",
              name: "Luxury Cars"
            },
            subcategory: {
              id: 103,
              slug: "executive-cars",
              name: "Executive Cars"
            },
            brand: {
              id: 3,
              car_Brand: "Audi",
              slug: "audi",
              image: {
                url: audi,
              },
            },
            images: [
              {
                url: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/39472/a6-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
              },
            ],
          },
        ],
      },
      {
        id: 104,
        slug: "premium-coupes",
        categorySubType: "Premium Coupes",
        cars: [
          {
            id: 10401,
            name: "Mercedes-Benz S-Class Coupe",
            slug: "mercedes-benz-s-class-coupe",
            pricePerDay: 520,
            category: {
              id: 1,
              slug: "luxury-cars",
              name: "Luxury Cars"
            },
            subcategory: {
              id: 104,
              slug: "premium-coupes",
              name: "Premium Coupes"
            },
            brand: {
              id: 1,
              car_Brand: "Mercedes-Benz",
              slug: "mercedes-benz",
              image: {
                url: mercedes,
              },
            },
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHYVkE10Dx1NVsOBX5C2niyAeU2W47mmAqyw&s",
              },
            ],
          },
          {
            id: 10402,
            name: "BMW 8 Series",
            slug: "bmw-8-series",
            pricePerDay: 510,
            category: {
              id: 1,
              slug: "luxury-cars",
              name: "Luxury Cars"
            },
            subcategory: {
              id: 104,
              slug: "premium-coupes",
              name: "Premium Coupes"
            },
            brand: {
              id: 2,
              car_Brand: "BMW",
              slug: "bmw",
              image: {
                url: bmw,
              },
            },
            images: [
              {
                url: "https://www.bmw-me.com/content/dam/bmw/common/all-models/8-series/coupe/2022/navigation/bmw-8series-coupe-modellfinder.png",
              },
            ],
          },
          {
            id: 10403,
            name: "Porsche 911",
            slug: "porsche-911",
            pricePerDay: 600,
            category: {
              id: 1,
              slug: "luxury-cars",
              name: "Luxury Cars"
            },
            subcategory: {
              id: 104,
              slug: "premium-coupes",
              name: "Premium Coupes"
            },
            brand: {
              id: 4,
              car_Brand: "Porsche",
              slug: "porsche",
              image: {
                url: porsche,
              },
            },
            images: [
              {
                url: "https://www.topgear.com/sites/default/files/cars-car/image/2024/02/pcgb20_0589_fine.jpg?w=1280&h=720",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "sports-cars",
    cartype: "Sports Cars",
    car_subcategories: [
      {
        id: 201,
        slug: "supercars",
        categorySubType: "Supercars",
        cars: [
          {
            id: 20101,
            name: "Ferrari 488",
            slug: "ferrari-488",
            pricePerDay: 850,
            category: {
              id: 2,
              slug: "sports-cars",
              name: "Sports Cars"
            },
            subcategory: {
              id: 201,
              slug: "supercars",
              name: "Supercars"
            },
            brand: {
              id: 5,
              car_Brand: "Ferrari",
              slug: "ferrari",
              image: {
                url: ferrari,
              },
            },
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqNp65Udsyb-C1Un0SfxclCDu-B6fcx0LxYA&s",
              },
            ],
          },
          {
            id: 20102,
            name: "Lamborghini Huracan",
            slug: "lamborghini-huracan",
            pricePerDay: 900,
            category: {
              id: 2,
              slug: "sports-cars",
              name: "Sports Cars"
            },
            subcategory: {
              id: 201,
              slug: "supercars",
              name: "Supercars"
            },
            brand: {
              id: 6,
              car_Brand: "Lamborghini",
              slug: "lamborghini",
              image: {
                url: Lamborghini,
              },
            },
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_hUNJ5FuVoGDnRf2oMlWbv7exBlaysduTA&s",
              },
            ],
          },
          {
            id: 20103,
            name: "McLaren 720S",
            slug: "mclaren-720s",
            pricePerDay: 880,
            category: {
              id: 2,
              slug: "sports-cars",
              name: "Sports Cars"
            },
            subcategory: {
              id: 201,
              slug: "supercars",
              name: "Supercars"
            },
            brand: {
              id: 7,
              car_Brand: "McLaren",
              slug: "mclaren",
              image: {
                url: mclaren,
              },
            },
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL26lvnNctbDh49jU5rCPe9RbPSemy_JfEaA&s",
              },
            ],
          },
        ],
      },
      {
        id: 202,
        slug: "muscle-cars",
        categorySubType: "Muscle Cars",
        cars: [
          {
            id: 20201,
            name: "Cadillac CT5-V",
            slug: "cadillac-ct5-v",
            pricePerDay: 380,
            category: {
              id: 2,
              slug: "sports-cars",
              name: "Sports Cars"
            },
            subcategory: {
              id: 202,
              slug: "muscle-cars",
              name: "Muscle Cars"
            },
            brand: {
              id: 10,
              car_Brand: "Cadillac",
              slug: "cadillac",
              image: {
                url: cadillac,
              },
            },
            images: [
              {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2024_Cadillac_CT5-V_AWD%2C_front_12.20.24.jpg/1200px-2024_Cadillac_CT5-V_AWD%2C_front_12.20.24.jpg",
              },
            ],
          },
          {
            id: 20202,
            name: "BMW M8",
            slug: "bmw-m8",
            pricePerDay: 580,
            category: {
              id: 2,
              slug: "sports-cars",
              name: "Sports Cars"
            },
            subcategory: {
              id: 202,
              slug: "muscle-cars",
              name: "Muscle Cars"
            },
            brand: {
              id: 2,
              car_Brand: "BMW",
              slug: "bmw",
              image: {
                url: bmw,
              },
            },
            images: [
              {
                url: "https://i.ytimg.com/vi/nKWhBkm1DMk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDBgPGiotrqw7i6ugdwFk1g5RAaDA",
              },
            ],
          },
          {
            id: 20203,
            name: "Mercedes-AMG GT",
            slug: "mercedes-amg-gt",
            pricePerDay: 620,
            category: {
              id: 2,
              slug: "sports-cars",
              name: "Sports Cars"
            },
            subcategory: {
              id: 202,
              slug: "muscle-cars",
              name: "Muscle Cars"
            },
            brand: {
              id: 1,
              car_Brand: "Mercedes-Benz",
              slug: "mercedes-benz",
              image: {
                url: mercedes,
              },
            },
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dPBcQXIru4JQPNc-ZdmBDGF9hC3VbSunhg&s",
              },
            ],
          },
        ],
      },
      {
        id: 203,
        slug: "sports-coupes",
        categorySubType: "Sports Coupes",
        cars: [
          {
            id: 20301,
            name: "BMW M4",
            slug: "bmw-m4",
            pricePerDay: 420,
            category: {
              id: 2,
              slug: "sports-cars",
              name: "Sports Cars"
            },
            subcategory: {
              id: 203,
              slug: "sports-coupes",
              name: "Sports Coupes"
            },
            brand: {
              id: 2,
              car_Brand: "BMW",
              slug: "bmw",
              image: {
                url: bmw,
              },
            },
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OBD3Tw1CFk0cKYfDvCEAzu7pAcbHY7NcFw&s",
              },
            ],
          },
          {
            id: 20302,
            name: "Audi TT RS",
            slug: "audi-tt-rs",
            pricePerDay: 400,
            category: {
              id: 2,
              slug: "sports-cars",
              name: "Sports Cars"
            },
            subcategory: {
              id: 203,
              slug: "sports-coupes",
              name: "Sports Coupes"
            },
            brand: {
              id: 3,
              car_Brand: "Audi",
              slug: "audi",
              image: {
                url: audi,
              },
            },
            images: [
              {
                url: "https://hips.hearstapps.com/hmg-prod/images/2020-audi-tt-rs-mmp-1-1638998586.jpg?crop=1.00xw:0.754xh;0,0.103xh&resize=2048:*",
              },
            ],
          },
          {
            id: 20303,
            name: "Porsche 718 Cayman",
            slug: "porsche-718-cayman",
            pricePerDay: 450,
            category: {
              id: 2,
              slug: "sports-cars",
              name: "Sports Cars"
            },
            subcategory: {
              id: 203,
              slug: "sports-coupes",
              name: "Sports Coupes"
            },
            brand: {
              id: 4,
              car_Brand: "Porsche",
              slug: "porsche",
              image: {
                url: porsche,
              },
            },
            images: [
              {
                url: "https://images-porsche.imgix.net/-/media/3E21D30B38B9493DB0857BBBEF18A927_D65EC42E368B435398BE6AD275F02F59_CM24N3KIX0002-718-cayman-gts-40-side?w=2560&h=697&q=45&crop=faces%2Centropy%2Cedges&auto=format",
              },
            ],
          },
        ],
      },
      {
        id: 204,
        slug: "performance-sedans",
        categorySubType: "Performance Sedans",
        cars: [
          {
            id: 20401,
            name: "BMW M5",
            slug: "bmw-m5",
            pricePerDay: 480,
            category: {
              id: 2,
              slug: "sports-cars",
              name: "Sports Cars"
            },
            subcategory: {
              id: 204,
              slug: "performance-sedans",
              name: "Performance Sedans"
            },
            brand: {
              id: 2,
              car_Brand: "BMW",
              slug: "bmw",
              image: {
                url: bmw,
              },
            },
            images: [
              {
                url: "https://bmw.scene7.com/is/image/BMW/g90_driving-dynamics_fb?qlt=80&wid=1024&fmt=webp",
              },
            ],
          },
          {
            id: 20402,
            name: "Mercedes-AMG E63",
            slug: "mercedes-amg-e63",
            pricePerDay: 470,
            category: {
              id: 2,
              slug: "sports-cars",
              name: "Sports Cars"
            },
            subcategory: {
              id: 204,
              slug: "performance-sedans",
              name: "Performance Sedans"
            },
            brand: {
              id: 1,
              car_Brand: "Mercedes-Benz",
              slug: "mercedes-benz",
              image: {
                url: mercedes,
              },
            },
            images: [
              {
                url: "https://www.topgear.com/sites/default/files/2022/06/1-Mercedes-AMG-E-Class-Final-Edition.jpg",
              },
            ],
          },
          {
            id: 20403,
            name: "Audi RS7",
            slug: "audi-rs7",
            pricePerDay: 490,
            category: {
              id: 2,
              slug: "sports-cars",
              name: "Sports Cars"
            },
            subcategory: {
              id: 204,
              slug: "performance-sedans",
              name: "Performance Sedans"
            },
            brand: {
              id: 3,
              car_Brand: "Audi",
              slug: "audi",
              image: {
                url: audi,
              },
            },
            images: [
              {
                url: "https://www.mansory.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/661d6e0d2e84ef511db18f17/6818bd66e807a051a942382a_Audi%2520RS7-Exterior_-_Main_image-001.webp",
              },
            ],
          },
        ],
      },
    ],
    image: {
      url: sportcar,
    },
  },
  {
    id: 3,
    slug: "suvs",
    cartype: "SUVs",
    car_subcategories: [
      {
        id: 301,
        slug: "compact-suvs",
        categorySubType: "Compact SUVs",
      },
      {
        id: 302,
        slug: "mid-size-suvs",
        categorySubType: "Mid-size SUVs",
        cars: [
          {
            id: 30203,
            name: "Mercedes-Benz GLE",
            slug: "mercedes-benz-gle",
            pricePerDay: 380,
            category: {
              id: 3,
              slug: "suvs",
              name: "SUVs"
            },
            subcategory: {
              id: 302,
              slug: "mid-size-suvs",
              name: "Mid-size SUVs"
            },
            brand: {
              id: 1,
              car_Brand: "Mercedes-Benz",
              slug: "mercedes-benz",
              image: {
                url: mercedes,
              },
            },
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq7Ic9EAZamWnP7TVqcT0pLtkjdFovwVpM6Q&s",
              },
            ],
          },
        ],
      },
    ],
    image: {
      url: suv,
    },
  },
  {
    id: 4,
    slug: "exotic-cars",
    cartype: "Exotic Cars",
    car_subcategories: [
      {
        id: 403,
        slug: "exotic-supercars",
        categorySubType: "Exotic Supercars",
        cars: [
          {
            id: 40301,
            name: "Lamborghini Aventador SVJ",
            slug: "lamborghini-aventador-svj",
            pricePerDay: 1200,
            category: {
              id: 4,
              slug: "exotic-cars",
              name: "Exotic Cars"
            },
            subcategory: {
              id: 403,
              slug: "exotic-supercars",
              name: "Exotic Supercars"
            },
            brand: {
              id: 6,
              car_Brand: "Lamborghini",
              slug: "lamborghini",
              image: {
                url: Lamborghini,
              },
            },
            images: [
              {
                url: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_s2_m.jpg",
              },
            ],
          },
          {
            id: 40303,
            name: "Porsche 911 Turbo S",
            slug: "porsche-911-turbo-s",
            pricePerDay: 750,
            category: {
              id: 4,
              slug: "exotic-cars",
              name: "Exotic Cars"
            },
            subcategory: {
              id: 403,
              slug: "exotic-supercars",
              name: "Exotic Supercars"
            },
            brand: {
              id: 4,
              car_Brand: "Porsche",
              slug: "porsche",
              image: {
                url: porsche,
              },
            },
            images: [
              {
                url: "https://cdn.elferspot.com/wp-content/uploads/2024/04/24/porsche-911-turbo-s-gebraucht-dq60mk-37.jpeg?class=xl",
              },
            ],
          },
        ],
      },
    ],
    image: {
      url: exoticcar,
    },
  },
  {
    id: 5,
    slug: "economic-cars",
    cartype: "Economic Cars",
    car_subcategories: [
      {
        id: 501,
        slug: "compact-cars",
        categorySubType: "Compact Cars",
      },
      {
        id: 502,
        slug: "hatchbacks",
        categorySubType: "Hatchbacks",
      },
      {
        id: 503,
        slug: "subcompacts",
        categorySubType: "Subcompacts",
        cars: [
          {
            id: 50301,
            name: "Mini Electric",
            slug: "mini-electric",
            pricePerDay: 120,
            category: {
              id: 5,
              slug: "economic-cars",
              name: "Economic Cars"
            },
            subcategory: {
              id: 503,
              slug: "subcompacts",
              name: "Subcompacts"
            },
            brand: {
              id: 12,
              car_Brand: "Mini",
              slug: "mini",
              image: {
                url: mini,
              },
            },
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFuZ4nTwPSzjn1NNRhe7Ncr-6YsmGpAkOIIg&s",
              },
            ],
          },
          {
            id: 50302,
            name: "Audi e-tron",
            slug: "audi-e-tron",
            pricePerDay: 180,
            category: {
              id: 5,
              slug: "economic-cars",
              name: "Economic Cars"
            },
            subcategory: {
              id: 503,
              slug: "subcompacts",
              name: "Subcompacts"
            },
            brand: {
              id: 3,
              car_Brand: "Audi",
              slug: "audi",
              image: {
                url: audi,
              },
            },
            images: [
              {
                url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg",
              },
            ],
          },
          {
            id: 50303,
            name: "BMW i3",
            slug: "bmw-i3",
            pricePerDay: 150,
            category: {
              id: 5,
              slug: "economic-cars",
              name: "Economic Cars"
            },
            subcategory: {
              id: 503,
              slug: "subcompacts",
              name: "Subcompacts"
            },
            brand: {
              id: 2,
              car_Brand: "BMW",
              slug: "bmw",
              image: {
                url: bmw,
              },
            },
            images: [
              {
                url: "https://www.topgear.com/sites/default/files/2022/06/1%20BMW%20i3.jpeg",
              },
            ],
          },
        ],
      },
      {
        id: 504,
        slug: "fuel-efficient",
        categorySubType: "Fuel Efficient",
        cars: [
          {
            id: 50403,
            name: "Porsche Taycan",
            slug: "porsche-taycan",
            pricePerDay: 280,
            category: {
              id: 5,
              slug: "economic-cars",
              name: "Economic Cars"
            },
            subcategory: {
              id: 504,
              slug: "fuel-efficient",
              name: "Fuel Efficient"
            },
            brand: {
              id: 4,
              car_Brand: "Porsche",
              slug: "porsche",
              image: {
                url: porsche,
              },
            },
            images: [
              {
                url: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/Taycan-2024/11515/1707404051019/front-left-side-47.jpg",
              },
            ],
          },
        ],
      },
    ],
    image: {
      url: economiccar,
    },
  },
];

  const filterOutCars = () => {
    const carList = [];
    carTypeList.forEach((item) => {
      item?.car_subcategories.forEach((sub) => {
        sub?.cars?.forEach((car) => {
        
            carList.push(car);
          
        });
      });
    });

    return carList;
  };
export const carList=filterOutCars()
export const carBrands = [
  {
    id: 1,
    car_Brand: "Mercedes-Benz",
    slug: "mercedes-benz",
    image: {
      url: mercedes,
    },
  },
  {
    id: 2,
    car_Brand: "BMW",
    slug: "bmw",
    image: {
      url: bmw,
    },
  },
  {
    id: 3,
    car_Brand: "Audi",
    slug: "audi",
    image: {
      url: audi,
    },
  },
  {
    id: 4,
    car_Brand: "Porsche",
    slug: "porsche",
    image: {
      url: porsche,
    },
  },
  {
    id: 5,
    car_Brand: "Ferrari",
    slug: "ferrari",
    image: {
      url: ferrari,
    },
  },
  {
    id: 6,
    car_Brand: "Lamborghini",
    slug: "lamborghini",
    image: {
      url: Lamborghini,
    },
  },
  {
    id: 7,
    car_Brand: "McLaren",
    slug: "mclaren",
    image: {
      url: mclaren,
    },
  },
  {
    id: 8,
    car_Brand: "Maserati",
    slug: "maserati",
    image: {
      url: maserati,
    },
  },
  {
    id: 9,
    car_Brand: "Land Rover",
    slug: "land-rover",
    image: {
      url: rangerover,
    },
  },
  {
    id: 10,
    car_Brand: "Cadillac",
    slug: "cadillac",
    image: {
      url: cadillac,
    },
  },
  {
    id: 11,
    car_Brand: "Bentley",
    slug: "bentley",
    image: {
      url: bently,
    },
  },
  {
    id: 12,
    car_Brand: "Mini",
    slug: "mini",
    image: {
      url: mini,
    },
  },
];
