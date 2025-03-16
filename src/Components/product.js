import image1 from "../../public/assets/hero_img/dWEcMIDFT0sP4RZX-generated_image.jpg";
import image2 from "../../public/assets/hero_img/67PRXXlwxhDSqYo6-generated_image.jpg";
import image3 from "../../public/assets/hero_img/20bcb541-0c6e-404d-a846-51cabc66f679.png";
import image4 from "../../public/assets/hero_img/6f5be0cb-c671-4a0b-9afb-7a6b4622e3c9.png";
import image5 from "../../public/assets/hero_img/b68ee65c-c8f4-4e24-bc46-450ed9667a8b.jpg";
import image6 from "../../public/assets/hero_img/c7d9cbba-cc53-4be3-986f-2264e477fdc0.jpg";
import image7 from "../../public/assets/hero_img/57d6142a-b700-4014-a5bc-d60ac92900e7.png";
import image8 from "../../public/assets/hero_img/096a777f-046a-4531-8edd-ba01d873a566.png";
import image9 from "../../public/assets/hero_img/55a6a215-4051-4c37-a6ad-5adf97b0cecf.png";
import image10 from "../../public/assets/hero_img/3f49f8cf-dbeb-4481-978d-ea73fee47ebf.png";
import image11 from "../../public/assets/hero_img/aa7a7e1c-0d77-4bdc-b26f-2d97957a3522.png";
// women section
import image12 from "../../public/assets/hero_img/fe502a7b-9ffc-454e-87e9-1ee378e6342b.png";
import image13 from "../../public/assets/hero_img/b354b252-568d-45e1-bcf7-a93a2e726858.png";
import image14 from "../../public/assets/hero_img/2a905da4-15c9-4325-ba70-70dbd5edfeac.png";
import image15 from "../../public/assets/hero_img/238a9b30-9f36-496b-9912-59cb3dc1bd31.png";
import image16 from "../../public/assets/hero_img/9e5280b7-5870-4184-9354-081f89cfd9c3.png";
import image17 from "../../public/assets/hero_img/f3427e24-f7cd-4467-a89b-c15a40fc6568.png";
import image18 from "../../public/assets/hero_img/1b0d5900-7dd6-4f39-a1e1-f6ac7f0477d6.png";
import image19 from "../../public/assets/hero_img/8d741681-80ea-4265-86bd-aac6ecd27cde.png";
import image20 from "../../public/assets/hero_img/c9f3fc02-c6ec-4184-836c-e0d03c3ba45e.png";
import image21 from "../../public/assets/hero_img/865bad8a-d977-4300-8565-e0cf4b6fab0d.png";

export const product = [
  // Men's Category - Top Wear (5 products)
  {
    productid: 1,
    name: "Men's Classic Cotton T-shirt",
    brand: "Adidas",
    price: 25,
    originalPrice: 35,
    description: "A comfortable and stylish cotton T-shirt for everyday wear.",
    material: "Cotton",
    size: ["S", "M", "L", "XL"],
    color: ["White", "Black", "Navy"],
    gender: "Men",
    category: "Top Wear",
    image: [
      {
        url: image1,
        altText: "Men's White Cotton T-shirt",
      },
      {
        url: image2,
        altText: "Men's Black Cotton T-shirt",
      },
    ],
  },
  {
    productid: 2,
    name: "Men's Slim Fit Polo Shirt",
    brand: "Nike",
    price: 40,
    originalPrice: 50,
    description:
      "A sleek and modern polo shirt for a casual yet polished look.",
    material: "Cotton",
    size: ["S", "M", "L", "XL"],
    color: ["Pink", "White", "Navy"],
    gender: "Men",
    category: "Top Wear",
    image: [
      {
        url: image3,
        altText: "Men's Blue Polo Shirt",
      },
      {
        url: image4,
        altText: "Men's Gray Polo Shirt",
      },
    ],
  },
  {
    productid: 3,
    name: "Men's Hooded Sweatshirt",
    brand: "Puma",
    price: 55,
    originalPrice: 65,
    description: "A warm and cozy hoodie perfect for cooler days.",
    material: "Polyester",
    size: ["S", "M", "L", "XL"],
    color: ["Black", "Charcoal", "Red"],
    gender: "Men",
    category: "Top Wear",
    image: [
      {
        url: image5,
        altText: "Men's Black Hoodie",
      },
      {
        url: image5,
        altText: "Men's Red Hoodie",
      },
    ],
  },
  {
    productid: 4,
    name: "Men's Full-Zip Jacket",
    brand: "Adidas",
    price: 70,
    originalPrice: 85,
    description:
      "A lightweight and water-resistant jacket for outdoor activities.",
    material: "Polyester",
    size: ["S", "M", "L", "XL"],
    color: ["Navy", "Black", "Olive"],
    gender: "Men",
    category: "Top Wear",
    image: [
      {
        url: image6,
        altText: "Men's Navy Jacket",
      },
      {
        url: "https://picsum.photos/600/600?random=8",
        altText: "Men's Olive Jacket",
      },
    ],
  },
  {
    productid: 5,
    name: "Men's Crew Neck Sweatshirt",
    brand: "Reebok",
    price: 45,
    originalPrice: 55,
    description: "A soft and comfortable sweatshirt for a relaxed fit.",
    material: "Cotton",
    size: ["S", "M", "L", "XL"],
    color: ["Gray", "Black", "Blue"],
    gender: "Men",
    category: "Top Wear",
    image: [
      {
        url: "https://picsum.photos/600/600?random=9",
        altText: "Men's Gray Sweatshirt",
      },
      {
        url: "https://picsum.photos/600/600?random=10",
        altText: "Men's Blue Sweatshirt",
      },
    ],
  },

  // Men's Category - Bottom Wear (5 products)
  {
    productid: 6,
    name: "Men's Slim Fit Jeans",
    brand: "Levi's",
    price: 60,
    originalPrice: 75,
    description: "Classic slim-fit jeans for a modern look.",
    material: "Denim",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Blue", "Black"],
    gender: "Men",
    category: "Bottom Wear",
    image: [
      {
        url: image7,
        altText: "Men's Blue Jeans",
      },
      {
        url: "https://picsum.photos/600/600?random=12",
        altText: "Men's Black Jeans",
      },
    ],
  },
  {
    productid: 7,
    name: "Men's Chino Pants",
    brand: "H&M",
    price: 50,
    originalPrice: 65,
    description: "Versatile chino pants for a smart-casual style.",
    material: "Cotton",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Khaki", "Navy", "Beige"],
    gender: "Men",
    category: "Bottom Wear",
    image: [
      {
        url: image8,
        altText: "Men's Khaki Chinos",
      },
      {
        url: "https://picsum.photos/600/600?random=14",
        altText: "Men's Navy Chinos",
      },
    ],
  },
  {
    productid: 8,
    name: "Men's Cargo Shorts",
    brand: "Under Armour",
    price: 35,
    originalPrice: 45,
    description: "Durable and functional cargo shorts for outdoor adventures.",
    material: "Cotton",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Green", "Black", "Gray"],
    gender: "Men",
    category: "Bottom Wear",
    image: [
      {
        url: image9,
        altText: "Men's Green Cargo Shorts",
      },
      {
        url: "https://picsum.photos/600/600?random=16",
        altText: "Men's Black Cargo Shorts",
      },
    ],
  },
  {
    productid: 9,
    name: "Men's Jogger Pants",
    brand: "Nike",
    price: 55,
    originalPrice: 70,
    description:
      "Comfortable and stylish jogger pants for an active lifestyle.",
    material: "Polyester",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Black", "Gray", "Navy"],
    gender: "Men",
    category: "Bottom Wear",
    image: [
      {
        url: image10,
        altText: "Men's Black Joggers",
      },
      {
        url: "https://picsum.photos/600/600?random=18",
        altText: "Men's Gray Joggers",
      },
    ],
  },
  {
    productid: 10,
    name: "Men's Denim Shorts",
    brand: "Lee",
    price: 40,
    originalPrice: 50,
    description: "Casual denim shorts for a laid-back summer look.",
    material: "Denim",
    size: ["30", "32", "34", "36"],
    color: ["Blue", "Black"],
    gender: "Men",
    category: "Bottom Wear",
    image: [
      {
        url: image11,
        altText: "Men's Blue Denim Shorts",
      },
      {
        url: "https://picsum.photos/600/600?random=20",
        altText: "Men's Black Denim Shorts",
      },
    ],
  },

  // Women's Category - Top Wear (5 products)
  {
    productid: 11,
    name: "Women's V-Neck T-shirt",
    brand: "Zara",
    price: 20,
    originalPrice: 30,
    description: "A soft and breathable V-neck T-shirt for everyday comfort.",
    material: "Cotton",
    size: ["XS", "S", "M", "L"],
    color: ["White", "Pink", "Gray"],
    gender: "Women",
    category: "Top Wear",
    image: [
      {
        url: image12,
        altText: "Women's White T-shirt",
      },
      {
        url: "https://picsum.photos/600/600?random=22",
        altText: "Women's Pink T-shirt",
      },
    ],
  },
  {
    productid: 12,
    name: "Women's Crop Top",
    brand: "H&M",
    price: 25,
    originalPrice: 35,
    description: "A trendy crop top for a chic and modern look.",
    material: "Cotton",
    size: ["XS", "S", "M", "L"],
    color: ["Black", "Yellow", "Blue"],
    gender: "Women",
    category: "Top Wear",
    image: [
      {
        url: image13,
        altText: "Women's Black Crop Top",
      },
      {
        url: "https://picsum.photos/600/600?random=24",
        altText: "Women's Yellow Crop Top",
      },
    ],
  },
  {
    productid: 13,
    name: "Women's Hooded",
    brand: "Puma",
    price: 50,
    originalPrice: 65,
    description: "A cozy and stylish hoodie for casual outings.",
    material: "Polyester",
    size: ["XS", "S", "M", "L"],
    color: ["Pink", "Gray", "Black"],
    gender: "Women",
    category: "Top Wear",
    image: [
      {
        url: image14,
        altText: "Women's Pink Hoodie",
      },
      {
        url: "https://picsum.photos/600/600?random=26",
        altText: "Women's Gray Hoodie",
      },
    ],
  },
  {
    productid: 14,
    name: "Women's Denim Jacket",
    brand: "Levi's",
    price: 75,
    originalPrice: 90,
    description: "A classic denim jacket for a timeless look.",
    material: "Denim",
    size: ["XS", "S", "M", "L"],
    color: ["Blue", "Black"],
    gender: "Women",
    category: "Top Wear",
    image: [
      {
        url: image15,
        altText: "Women's Blue Denim Jacket",
      },
      {
        url: "https://picsum.photos/600/600?random=28",
        altText: "Women's Black Denim Jacket",
      },
    ],
  },
  {
    productid: 15,
    name: "Women's Knit Sweater",
    brand: "Zara",
    price: 45,
    originalPrice: 60,
    description: "A soft and warm knit sweater for chilly days.",
    material: "Wool",
    size: ["XS", "S", "M", "L"],
    color: ["Beige", "Gray", "Green"],
    gender: "Women",
    category: "Top Wear",
    image: [
      {
        url: image16,
        altText: "Women's Beige Sweater",
      },
      {
        url: "https://picsum.photos/600/600?random=30",
        altText: "Women's Gray Sweater",
      },
    ],
  },

  // Women's Category - Bottom Wear (5 products)
  {
    productid: 16,
    name: "Women's High-Waist Jeans",
    brand: "Levi's",
    price: 65,
    originalPrice: 80,
    description: "Stylish high-waist jeans for a flattering fit.",
    material: "Denim",
    size: ["26", "28", "30", "32"],
    color: ["Blue", "Black", "Green"],
    gender: "Women",
    category: "Bottom Wear",
    image: [
      {
        url: image17,
        altText: "Women's Blue Jeans",
      },
      {
        url: "https://picsum.photos/600/600?random=32",
        altText: "Women's Black Jeans",
      },
    ],
  },
  {
    productid: 17,
    name: "Women's Yoga Leggings",
    brand: "Lululemon",
    price: 55,
    originalPrice: 70,
    description: "Stretchy and comfortable leggings for yoga and workouts.",
    material: "Spandex",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Black", "Gray", "Purple"],
    gender: "Women",
    category: "Bottom Wear",
    image: [
      {
        url: image18,
        altText: "Women's Black Leggings",
      },
      {
        url: "https://picsum.photos/600/600?random=34",
        altText: "Women's Purple Leggings",
      },
    ],
  },
  {
    productid: 18,
    name: "Women's Shorts",
    brand: "Lee",
    price: 35,
    originalPrice: 45,
    description: "Casual denim shorts for a summer-ready look.",
    material: "Denim",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Blue", "White"],
    gender: "Women",
    category: "Bottom Wear",
    image: [
      {
        url: image19,
        altText: "Women's Blue Denim Shorts",
      },
      {
        url: "https://picsum.photos/600/600?random=36",
        altText: "Women's White Denim Shorts",
      },
    ],
  },
  {
    productid: 19,
    name: "Women's Midi Skirt",
    brand: "H&M",
    price: 40,
    originalPrice: 55,
    description: "A flowy midi skirt for a feminine and elegant look.",
    material: "Polyester",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Black", "Red", "Navy"],
    gender: "Women",
    category: "Bottom Wear",
    image: [
      {
        url: image20,
        altText: "Women's Black Midi Skirt",
      },
      {
        url: "https://picsum.photos/600/600?random=38",
        altText: "Women's Red Midi Skirt",
      },
    ],
  },
  {
    productid: 20,
    name: "Women's Jogger Pants",
    brand: "Nike",
    price: 50,
    originalPrice: 65,
    description:
      "Comfortable and stylish jogger pants for an active lifestyle.",
    material: "Polyester",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Black", "Gray", "Pink"],
    gender: "Women",
    category: "Bottom Wear",
    image: [
      {
        url: image21,
        altText: "Women's Black Joggers",
      },
      {
        url: "https://picsum.photos/600/600?random=40",
        altText: "Women's Pink Joggers",
      },
    ],
  },
];

export const newarrivelData = [
  {
    productid: 10,
    name: "Men's Denim Shorts",
    brand: "Lee",
    price: 40,
    originalPrice: 50,
    description: "Casual denim shorts for a laid-back summer look.",
    material: "Denim",
    size: ["30", "32", "34", "36"],
    color: ["Blue", "Black"],
    gender: "Men",
    category: "Bottom Wear",
    image: [
      {
        url: image11,
        altText: "Men's Blue Denim Shorts",
      },
      {
        url: "https://picsum.photos/600/600?random=20",
        altText: "Men's Black Denim Shorts",
      },
    ],
  },
  {
    productid: 16,
    name: "Women's High-Waist Jeans",
    brand: "Levi's",
    price: 65,
    originalPrice: 80,
    description: "Stylish high-waist jeans for a flattering fit.",
    material: "Denim",
    size: ["26", "28", "30", "32"],
    color: ["Blue", "Black", "Green"],
    gender: "Women",
    category: "Bottom Wear",
    image: [
      {
        url: image17,
        altText: "Women's Blue Jeans",
      },
      {
        url: "https://picsum.photos/600/600?random=32",
        altText: "Women's Black Jeans",
      },
    ],
  },
  {
    productid: 7,
    name: "Men's Chino Pants",
    brand: "H&M",
    price: 50,
    originalPrice: 65,
    description: "Versatile chino pants for a smart-casual style.",
    material: "Cotton",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Khaki", "Navy", "Beige"],
    gender: "Men",
    category: "Bottom Wear",
    image: [
      {
        url: image8,
        altText: "Men's Khaki Chinos",
      },
      {
        url: "https://picsum.photos/600/600?random=14",
        altText: "Men's Navy Chinos",
      },
    ],
  },
  {
    productid: 8,
    name: "Men's Cargo Shorts",
    brand: "Under Armour",
    price: 35,
    originalPrice: 45,
    description: "Durable and functional cargo shorts for outdoor adventures.",
    material: "Cotton",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Green", "Black", "Gray"],
    gender: "Men",
    category: "Bottom Wear",
    image: [
      {
        url: image9,
        altText: "Men's Green Cargo Shorts",
      },
      {
        url: "https://picsum.photos/600/600?random=16",
        altText: "Men's Black Cargo Shorts",
      },
    ],
  },
  {
    productid: 9,
    name: "Men's Jogger Pants",
    brand: "Nike",
    price: 55,
    originalPrice: 70,
    description:
      "Comfortable and stylish jogger pants for an active lifestyle.",
    material: "Polyester",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Black", "Gray", "Navy"],
    gender: "Men",
    category: "Bottom Wear",
    image: [
      {
        url: image10,
        altText: "Men's Black Joggers",
      },
      {
        url: "https://picsum.photos/600/600?random=18",
        altText: "Men's Gray Joggers",
      },
    ],
  },
  {
    productid: 13,
    name: "Women's Hooded",
    brand: "Puma",
    price: 50,
    originalPrice: 65,
    description: "A cozy and stylish hoodie for casual outings.",
    material: "Polyester",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Pink", "Gray", "Black"],
    gender: "Women",
    category: "Top Wear",
    image: [
      {
        url: image14,
        altText: "Women's Pink Hoodie",
      },
      {
        url: "https://picsum.photos/600/600?random=26",
        altText: "Women's Gray Hoodie",
      },
    ],
  },
  {
    productid: 14,
    name: "Women's Denim Jacket",
    brand: "Levi's",
    price: 75,
    originalPrice: 90,
    description: "A classic denim jacket for a timeless look.",
    material: "Denim",
    size: ["XS", "S", "M", "L"],
    color: ["Blue", "Black"],
    gender: "Women",
    category: "Top Wear",
    image: [
      {
        url: image15,
        altText: "Women's Blue Denim Jacket",
      },
      {
        url: "https://picsum.photos/600/600?random=28",
        altText: "Women's Black Denim Jacket",
      },
    ],
  },
  {
    productid: 15,
    name: "Women's Knit Sweater",
    brand: "Zara",
    price: 45,
    originalPrice: 60,
    description: "A soft and warm knit sweater for chilly days.",
    material: "Wool",
    size: ["XS", "S", "M", "L"],
    color: ["Beige", "Gray", "Green"],
    gender: "Women",
    category: "Top Wear",
    image: [
      {
        url: image16,
        altText: "Women's Beige Sweater",
      },
      {
        url: "https://picsum.photos/600/600?random=30",
        altText: "Women's Gray Sweater",
      },
    ],
  },
];

export const bestSellerData = [
  {
    productid: 10,
    name: "Men's Denim Shorts",
    brand: "Lee",
    price: 40,
    originalPrice: 50,
    description: "Casual denim shorts for a laid-back summer look.",
    material: "Denim",
    size: ["30", "32", "34", "36"],
    color: ["Blue", "Black"],
    gender: "Men",
    category: "Bottom Wear",
    image: [
      {
        url: image11,
        altText: "Men's Blue Denim Shorts",
      },
      {
        url: "https://picsum.photos/600/600?random=20",
        altText: "Men's Black Denim Shorts",
      },
    ],
  },
  {
    productid: 16,
    name: "Women's High-Waist Jeans",
    brand: "Levi's",
    price: 65,
    originalPrice: 80,
    description: "Stylish high-waist jeans for a flattering fit.",
    material: "Denim",
    size: ["26", "28", "30", "32"],
    color: ["Blue", "Black", "Green"],
    gender: "Women",
    category: "Bottom Wear",
    image: [
      {
        url: image17,
        altText: "Women's Blue Jeans",
      },
      {
        url: "https://picsum.photos/600/600?random=32",
        altText: "Women's Black Jeans",
      },
    ],
  },
  {
    productid: 7,
    name: "Men's Chino Pants",
    brand: "H&M",
    price: 50,
    originalPrice: 65,
    description: "Versatile chino pants for a smart-casual style.",
    material: "Cotton",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Khaki", "Navy", "Beige"],
    gender: "Men",
    category: "Bottom Wear",
    image: [
      {
        url: image8,
        altText: "Men's Khaki Chinos",
      },
      {
        url: "https://picsum.photos/600/600?random=14",
        altText: "Men's Navy Chinos",
      },
    ],
  },
  {
    productid: 8,
    name: "Men's Cargo Shorts",
    brand: "Under Armour",
    price: 35,
    originalPrice: 45,
    description: "Durable and functional cargo shorts for outdoor adventures.",
    material: "Cotton",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Green", "Black", "Gray"],
    gender: "Men",
    category: "Bottom Wear",
    image: [
      {
        url: image9,
        altText: "Men's Green Cargo Shorts",
      },
      {
        url: "https://picsum.photos/600/600?random=16",
        altText: "Men's Black Cargo Shorts",
      },
    ],
  },
  {
    productid: 9,
    name: "Men's Jogger Pants",
    brand: "Nike",
    price: 55,
    originalPrice: 70,
    description:
      "Comfortable and stylish jogger pants for an active lifestyle.",
    material: "Polyester",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Black", "Gray", "Navy"],
    gender: "Men",
    category: "Bottom Wear",
    image: [
      {
        url: image10,
        altText: "Men's Black Joggers",
      },
      {
        url: "https://picsum.photos/600/600?random=18",
        altText: "Men's Gray Joggers",
      },
    ],
  },
  {
    productid: 13,
    name: "Women's Hooded",
    brand: "Puma",
    price: 50,
    originalPrice: 65,
    description: "A cozy and stylish hoodie for casual outings.",
    material: "Polyester",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Pink", "Gray", "Black"],
    gender: "Women",
    category: "Top Wear",
    image: [
      {
        url: image14,
        altText: "Women's Pink Hoodie",
      },
      {
        url: "https://picsum.photos/600/600?random=26",
        altText: "Women's Gray Hoodie",
      },
    ],
  },
  {
    productid: 14,
    name: "Women's Denim Jacket",
    brand: "Levi's",
    price: 75,
    originalPrice: 90,
    description: "A classic denim jacket for a timeless look.",
    material: "Denim",
    size: ["XS", "S", "M", "L"],
    color: ["Blue", "Black"],
    gender: "Women",
    category: "Top Wear",
    image: [
      {
        url: image15,
        altText: "Women's Blue Denim Jacket",
      },
      {
        url: "https://picsum.photos/600/600?random=28",
        altText: "Women's Black Denim Jacket",
      },
    ],
  },
  {
    productid: 15,
    name: "Women's Knit Sweater",
    brand: "Zara",
    price: 45,
    originalPrice: 60,
    description: "A soft and warm knit sweater for chilly days.",
    material: "Wool",
    size: ["XS", "S", "M", "L"],
    color: ["Beige", "Gray", "Green"],
    gender: "Women",
    category: "Top Wear",
    image: [
      {
        url: image16,
        altText: "Women's Beige Sweater",
      },
      {
        url: "https://picsum.photos/600/600?random=30",
        altText: "Women's Gray Sweater",
      },
    ],
  },
];

export const recentOrders = [
  {
    productid: 20,
    name: "Women's Jogger Pants",
    brand: "Nike",
    price: 50,
    originalPrice: 65,
    description:
      "Comfortable and stylish jogger pants for an active lifestyle.",
    material: "Polyester",
    size: ["29", "30", "31", "32", "33", "34"],
    color: ["Black", "Gray", "Pink"],
    gender: "Women",
    category: "Bottom Wear",
    image: [
      {
        url: image21,
        altText: "Women's Black Joggers",
      },
      {
        url: "https://picsum.photos/600/600?random=40",
        altText: "Women's Pink Joggers",
      },
    ],
  },
  {
    productid: 16,
    name: "Women's High-Waist Jeans",
    brand: "Levi's",
    price: 65,
    originalPrice: 80,
    description: "Stylish high-waist jeans for a flattering fit.",
    material: "Denim",
    size: ["26", "28", "30", "32"],
    color: ["Blue", "Black", "Green"],
    gender: "Women",
    category: "Bottom Wear",
    image: [
      {
        url: image17,
        altText: "Women's Blue Jeans",
      },
      {
        url: "https://picsum.photos/600/600?random=32",
        altText: "Women's Black Jeans",
      },
    ],
  },
  {
    productid: 1,
    name: "Men's Classic Cotton T-shirt",
    brand: "Adidas",
    price: 25,
    originalPrice: 35,
    description: "A comfortable and stylish cotton T-shirt for everyday wear.",
    material: "Cotton",
    size: ["S", "M", "L", "XL"],
    color: ["White", "Black", "Navy"],
    gender: "Men",
    category: "Top Wear",
    image: [
      {
        url: image1,
        altText: "Men's White Cotton T-shirt",
      },
      {
        url: image2,
        altText: "Men's Black Cotton T-shirt",
      },
    ],
  },
  {
    productid: 11,
    name: "Women's V-Neck T-shirt",
    brand: "Zara",
    price: 20,
    originalPrice: 30,
    description: "A soft and breathable V-neck T-shirt for everyday comfort.",
    material: "Cotton",
    size: ["XS", "S", "M", "L"],
    color: ["White", "Pink", "Gray"],
    gender: "Women",
    category: "Top Wear",
    image: [
      {
        url: image12,
        altText: "Women's White T-shirt",
      },
      {
        url: "https://picsum.photos/600/600?random=22",
        altText: "Women's Pink T-shirt",
      },
    ],
  },
  {
    productid: 12,
    name: "Women's Crop Top",
    brand: "H&M",
    price: 25,
    originalPrice: 35,
    description: "A trendy crop top for a chic and modern look.",
    material: "Cotton",
    size: ["XS", "S", "M", "L"],
    color: ["Black", "Yellow", "Blue"],
    gender: "Women",
    category: "Top Wear",
    image: [
      {
        url: image13,
        altText: "Women's Black Crop Top",
      },
      {
        url: "https://picsum.photos/600/600?random=24",
        altText: "Women's Yellow Crop Top",
      },
    ],
  },
];
