
export const Items = [
  {
    "name": "Cafe 5 by The Kitchen",
    "desc": "Lawrence Road. Casual Dining",
    "status": "Open Now",
    "rating": "3.9",
    "image": require('../image/imgmenu1.png'),
  },
  {
    "name": "Truffles Ice $ Spice",
    "desc": "American Cafe.",
    "status": "Open Now",
    "rating": "4.2",
    "image": require('../image/imgmenu2.png'),
  },
  {
    "name": "Beijing Bites",
    "desc": "Lawrence Road. Casual Dining.",
    "status": "Open Now",
    "rating": "4.1",
    "image": require('../image/imgmenu3.png'),
  },
  {
    "name": "Londoners",
    "desc": "Lawrence Road. Casual Dining.",
    "status": "Open Now",
    "rating": "4.5",
    "image": require('../image/imgmenu4.png'),
  },
  {
    "name": "Big Wong",
    "desc": "Chinese ,Thai.",
    "status": "Open Now",
    "rating": "3.7",
    "image": require('../image/imgmenu5.png'),
  },
  {
    "name": "Tamura",
    "desc": "Japanese.",
    "status": "Open Now",
    "rating": "4.3",
    "image": require('../image/imgmenu6.png'),
  },
  {
    "name": "NYC Pie",
    "desc": "Italian.",
    "status": "Open Now",
    "rating": "4.1",
      "image": require('../image/imgmenu7.png'),
  },
  {
    "name": "Moets Curry Leaf",
    "desc": "North Indian,Seafood,Chicken.",
    "status": "Open Now",
    "rating": "3.3",
      "image": require('../image/imgmenu8.png'),
  },
  {
    "name": "Dzukou Tribal Kitchen",
    "desc": "Naga.",
    "status": "Closed Now",
    "rating": "4.5",
    "image": require('../image/imgmenu9.png'),
  },
  {
    "name": "Berco's",
    "desc": "American Cafe.",
    "status": "Open Now",
    "rating": "4.2",
    "image": require('../image/imgmenu10.png'),
  },
  {
    "name": "Truffles Ice $ Spice",
    "desc": "American Cafe.",
    "status": "Open Now",
    "rating": "4.2",
    "image": require('../image/imgmenu11.png'),
  },
  {
    "name": "Beijing Bites",
    "desc": "Lawrence Road. Casual Dining.",
    "status": "Open Now",
    "rating": "4.1",
    "image": require('../image/imgmenu1.png'),
  },
  {
    "name": "Truffles Ice $ Spice",
    "desc": "American Cafe.",
    "status": "Open Now",
    "rating": "4.2",
    "image": require('../image/imgmenu1.png'),
  },

];


export const Orders = [
  {
    "type":1,
    "group": "MOETS CURRY LEAF",
    "price": "$2.99",
    "items": [
          {
             "name": "Truffles Ice $ Spice",
             "image": require('../image/imgmenu2.png'),
             "desc": "Lawrence Road. Casual Dining.",
             "price":  "$2.99",
             "quantity":1,
           }
         ]
  },
  {
    "type":1,
    "group": "CAFE 5H BY THE KITCHEN",
    "price": "$2.99",
    "items": [
          {
             "name": "Veg Mix Fried Rice ",
             "image": require('../image/imgmenu3.png'),
             "desc": "Lawrence Road. Casual Dining.",
             "price":  "$2.99",
             "quantity":1,
           },
           {
              "name": "Paneer Tikka",
              "image": require('../image/imgmenu4.png'),
              "desc": "American Cafe.",
              "price":  "$2.99",
              "quantity":1,
            }
         ]
  },
  {
    "type":4,
    "group": "You May Also Like",
    "items": [
      {
        "name": "Truffles Ice $ Spice",
        "desc": "American Cafe.",
        "status": "Open Now",
        "rating": "4.2",
        "image": require('../image/imgmenu11.png'),
      },
      {
        "name": "Beijing Bites",
        "desc": "Lawrence Road. Casual Dining.",
        "status": "Open Now",
        "rating": "4.1",
        "image": require('../image/imgmenu1.png'),
      },
      {
        "name": "Truffles Ice $ Spice",
        "desc": "American Cafe.",
        "status": "Open Now",
        "rating": "4.2",
        "image": require('../image/imgmenu1.png'),
      }
    ]
  },
  {
    "type":2,
    "group": "Amount",
    "subtotal": "$17.99",
    "servicetax": "$1.00",
  },
  {
    "type":3,
    "group": "total",
    "total": "$18.99",
  }


];
