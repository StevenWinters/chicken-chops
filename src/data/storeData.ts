import MenuSpecials1 from "../assets/menu/specials/menu-specials-1.jpg";
import MenuSpecials2 from "../assets/menu/specials/menu-specials-2.jpg";
import MenuSpecials3 from "../assets/menu/specials/menu-specials-3.jpg";
import MenuSpecials4 from "../assets/menu/specials/menu-specials-4.jpg";
import MenuSpecials5 from "../assets/menu/specials/menu-specials-5.jpg";
import MenuBestSeller1 from "../assets/menu/bestsellers/menu-bestseller-1.jpg";
import MenuBestSeller2 from "../assets/menu/bestsellers/menu-bestseller-2.jpg";
import MenuBestSeller3 from "../assets/menu/bestsellers/menu-bestseller-3.jpg";
import MenuBestSeller4 from "../assets/menu/bestsellers/menu-bestseller-4.jpg";
import MenuBestSeller5 from "../assets/menu/bestsellers/menu-bestseller-5.jpg";
import MenuBreakfast1 from "../assets/menu/breakfast/menu-breakfast-1.jpg";
import MenuBreakfast2 from "../assets/menu/breakfast/menu-breakfast-2.jpg";
import MenuBreakfast3 from "../assets/menu/breakfast/menu-breakfast-3.jpg";
import MenuBreakfast4 from "../assets/menu/breakfast/menu-breakfast-4.jpg";
import MenuBreakfast5 from "../assets/menu/breakfast/menu-breakfast-5.jpg";
import MenuMeals1 from "../assets/menu/meals/menu-meals-1.jpg";
import MenuMeals2 from "../assets/menu/meals/chicken/menu-chicken-l-meals-2.jpg";
import MenuChicken4PC from "../assets/menu/meals/chicken/menu-chicken-s.jpg";
import MenuChicken6PC from "../assets/menu/meals/chicken/menu-chicken-m.jpg";
import MenuMeals3 from "../assets/menu/meals/menu-meals-3.jpg";
import MenuMeals4 from "../assets/menu/meals/menu-meals-4.jpg";
import MenuMeals5 from "../assets/menu/meals/menu-meals-5.jpg";
import MenuSandwiches1 from "../assets/menu/sandwiches/menu-sandwiches-1.jpg";
import MenuSandwiches2 from "../assets/menu/sandwiches/menu-sandwiches-2.jpg";
import MenuSandwiches3 from "../assets/menu/sandwiches/menu-sandwiches-3.jpg";
import MenuSandwiches4 from "../assets/menu/sandwiches/menu-sandwiches-4.jpg";
import MenuSandwiches5 from "../assets/menu/sandwiches/menu-sandwiches-5.jpg";
import MenuPasta1 from "../assets/menu/pasta/menu-pasta-1.jpg";
import MenuPasta2 from "../assets/menu/pasta/menu-pasta-2.jpg";
import MenuPasta3 from "../assets/menu/pasta/menu-pasta-3.jpg";
import MenuSnacks1 from "../assets/menu/snacks/fries/menu-fries-m-snacks-1.jpg";
import MenuFriesS from "../assets/menu/snacks/fries/menu-fries-s.jpg";
import MenuFriesL from "../assets/menu/snacks/fries/menu-fries-l.jpg";
import MenuSnacks2 from "../assets/menu/snacks/shots/menu-shots-r-snacks-2.jpg";
import MenuShotsL from "../assets/menu/snacks/shots/menu-shots-l.jpg";
import MenuSnacks3 from "../assets/menu/snacks/menu-snacks-3.jpg";
import MenuSnacks4 from "../assets/menu/snacks/menu-snacks-4.jpg";
import MenuSnacks5 from "../assets/menu/snacks/menu-snacks-5.jpg";
import MenuDrink1 from "../assets/menu/drinks/menu-drink-1.jpg";
import MenuDrink2 from "../assets/menu/drinks/menu-drink-2.jpg";
import MenuDrink3 from "../assets/menu/drinks/menu-drink-3.jpg";
import MenuDrink4 from "../assets/menu/drinks/menu-drink-4.jpg";
import MenuDrink5 from "../assets/menu/drinks/menu-drink-5.jpg";

export const storeData = [
  {
    id: "specials",
    title: "New Specials",
    items: [
      {
        id: 1,
        name: "The Chomps",
        src: MenuSpecials1,
        price: 85,
        description:
          "The Offical Burger of Chicken Chops that are meant to entice your taste buds into this. Made with a mayo dressing, jalapenos, and Chops chicken.",
        quantity: 1,
      },
      {
        id: 2,
        name: "Steak Feat",
        src: MenuSpecials2,
        price: 999.99,
        description:
          "A burger made with an A5 Wagyu with crisped onions, red onions, and siracha mayo dressing.",
        quantity: 1,
      },
      {
        id: 3,
        name: "Coaster Fries",
        src: MenuSpecials3,
        price: 102,
        description:
          "Fries made in a spiral form with several different spices.",
        quantity: 1,
      },
      {
        id: 4,
        name: "Solonggah",
        src: MenuSpecials4,
        price: 1199.99,
        description:
          "One of the longest sandwiches that is made precisely with chicken, mayo, tomato, and lettuce.",
        quantity: 1,
      },
      {
        id: 5,
        name: "Chop Browns",
        src: MenuSpecials5,
        price: 34.99,
        description: "Flavorfully beautifully crispy in every bite you take.",
        quantity: 1,
      },
    ],
  },
  {
    id: "best-sellers",
    title: "Best Sellers",
    items: [
      {
        id: 6,
        name: "Bucket Meal w/ Regular Shots & Drinks",
        src: MenuBestSeller1,
        price: 753.99,
        description:
          "A bucket meal consisting of 2 regular shots, 2 drinks, and an 8 pcs. bucket of chicken.",
        quantity: 1,
      },
      {
        id: 7,
        name: "Bucket Meal w/ Small Fries & Coke",
        src: MenuBestSeller2,
        price: 753.99,
        description:
          "A bucket meal consisting of 3 small fries and coke with an 8 pcs. bucket of chicken.",
        quantity: 1,
      },
      {
        id: 8,
        name: "Bucket Meal w/ Regular Shots, Medium Fries, & Drinks",
        src: MenuBestSeller3,
        price: 772.99,
        description:
          "A bucket meal consisting of 2 rice, 1 fries, 1 large shots, 2 drinks, and a 8 pcs. bucket of chicken.",
        quantity: 1,
      },
      {
        id: 9,
        name: "Burger Meal with Large Fries & Coke",
        src: MenuBestSeller4,
        price: 331,
        description:
          "A burger meal consisting of 2 majessers, 1 large fries, and 2 drinks.",
        quantity: 1,
      },
      {
        id: 10,
        name: "Classic Chomps Combo",
        src: MenuBestSeller5,
        price: 195.99,
        description:
          "A classic burger combo served with 1 medium fries, 1 drink, and 1 chomps burger.",
        quantity: 1,
      },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    items: [
      {
        id: 11,
        name: "ChopsDog",
        src: MenuBreakfast1,
        price: 68.99,
        description:
          "A hotdog w/ ketchup & mayo, tomato, lettuce, and red onions.",
        quantity: 1,
      },
      {
        id: 12,
        name: "One Chicken Solo",
        src: MenuBreakfast2,
        price: 85.99,
        description:
          "Enjoy the times with a simple chicken known for its flavors and juicyness.",
        quantity: 1,
      },
      {
        id: 13,
        name: "3 pc. Pancakes",
        src: MenuBreakfast3,
        price: 105.99,
        description:
          "Can't never go wrong with some delicious pancakes served with some butter and maple syrup.",
        quantity: 1,
      },
      {
        id: 14,
        name: "Choveggie",
        src: MenuBreakfast4,
        price: 49.99,
        description:
          "The perfect sandwich for staying healthy and strong as it is served with lettuce, bell pepper, red onions, cabbage, and other herbs and leaves.",
        quantity: 1,
      },
      {
        id: 15,
        name: "French Fry Duo",
        src: MenuBreakfast5,
        price: 190.99,
        description:
          "If you're a french fry lover, go try this! This is served with Coaster and Chomper Fries.",
        quantity: 1,
      },
    ],
  },
  {
    id: "meals",
    title: "Meals",
    items: [
      {
        id: 16,
        name: "4 pc. Chicken Chops w/ Chops Spaghetti",
        src: MenuMeals1,
        price: 331.99,
        description:
          "The blend of 2 different unique flavors that goes well together.",
        quantity: 1,
      },
      {
        id: 17,
        name: "Chicken Chops Bucket",
        src: MenuMeals2,
        price: 499,
        description:
          "Our famous best-selling chicken known for its unique flavors that joys you with each and every bite.",
        quantity: 1,
        sizes: [
          {
            name: "4 pcs. Chicken Chops Bucket",
            sizeValue: "4 pcs. Chicken",
            src: MenuChicken4PC,
          },
          {
            name: "6 pcs. Chicken Chops Bucket",
            sizeValue: "6 pcs. Chicken",
            src: MenuChicken6PC,
          },
          {
            name: "8 pcs. Chicken Chops Bucket",
            sizeValue: "8 pcs. Chicken",
            src: MenuMeals2,
          },
        ],
      },
      {
        id: 18,
        name: "Christmas Bucket Meal w/ Rice, Brownies, & Drinks",
        src: MenuMeals3,
        price: 593.99,
        description:
          "Spend the holidays with this great meal serving with 2 rice, 2 brownies, 2 drinks, and a 6 pcs. bucket of chicken.",
        quantity: 1,
      },
      {
        id: 19,
        name: "Baconette Trio",
        src: MenuMeals4,
        price: 496.99,
        description:
          "The best burger and fries meal of all-time consisting of 3 Baconette Burgers & Large Fries.",
        quantity: 1,
      },
      {
        id: 20,
        name: "Majesser Duo",
        src: MenuMeals5,
        price: 460.99,
        description:
          "The best burger and fries meal of all-time consisting of 2 Majesser Burgers, 2 Large Fries, & Drinks.",
        quantity: 1,
      },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    items: [
      {
        id: 21,
        name: "The Majesser",
        src: MenuSandwiches1,
        price: 140.99,
        description:
          "One of the best-tasting burgers with its super crunchy chicken, mozarella cheese, lettuce, and siracha mayo.",
        quantity: 1,
      },
      {
        id: 22,
        name: "All-Decked Burger Combo",
        src: MenuSandwiches2,
        price: 662.99,
        description:
          "The best burger and fries meal of all-time consisting of 1 majesser, baconette, and chomps Burger w/ 1 small and 1 coaster fries, and drinks.",
        quantity: 1,
      },
      {
        id: 23,
        name: "Baconette Burger",
        src: MenuSandwiches3,
        price: 140.99,
        description:
          "A glorious burger with its meatiest, tastiest, and cheesiest flavors. The toppings are bacon, cheese, meat, tomato, and lettuce.",
        quantity: 1,
      },
      {
        id: 24,
        name: "The Majesser Combo",
        src: MenuSandwiches4,
        price: 228.99,
        description: "A classic burger and fries combo served with drinks.",
        quantity: 1,
      },
      {
        id: 25,
        name: "Veggity Sandwich",
        src: MenuSandwiches5,
        price: 49.99,
        description:
          "A sandwich to keep you healthy and strong served with bell peppers, red onions, lettuce, tomato, cucumber, and black olives.",
        quantity: 1,
      },
    ],
  },
  {
    id: "pastas",
    title: "Pastas",
    items: [
      {
        id: 26,
        name: "Chops Spaghetti",
        src: MenuPasta1,
        price: 96.99,
        description:
          "A sweet, meaty, and delicious spaghetti ready to be served.",
        quantity: 1,
      },
      {
        id: 27,
        name: "Chicken Fettucine Alfredo Pasta",
        src: MenuPasta2,
        price: 104.99,
        description:
          "A delicious silky, creamy, and smooth pasta made with some chicken.",
        quantity: 1,
      },
      {
        id: 28,
        name: "Mac n' Cheese",
        src: MenuPasta3,
        price: 115.99,
        description:
          "A bowl full of cheesy goodness with some crispy and crunchy chicken.",
        quantity: 1,
      },
    ],
  },
  {
    id: "snacks",
    title: "Snacks",
    items: [
      {
        id: 29,
        name: "Fries",
        src: MenuSnacks1,
        price: 55.99,
        description:
          "The perfectly-cooked fries that goes with the perfect crisp and the potato-y goodness.",
        quantity: 1,
        sizes: [
          {
            name: "Small Fries",
            sizeValue: "Small",
            src: MenuFriesS,
          },
          {
            name: "Medium Fries",
            sizeValue: "Medium",
            src: MenuSnacks1,
          },
          {
            name: "Large Fries",
            sizeValue: "Large",
            src: MenuFriesL,
          },
        ],
      },
      {
        id: 30,
        name: "Shots",
        src: MenuSnacks2,
        price: 82.99,
        description:
          "The best snack to eat with just a bite of its tasty crunchy chicken.",
        quantity: 1,
        sizes: [
          {
            name: "Regular Shots",
            sizeValue: "Regular",
            src: MenuSnacks2,
          },
          {
            name: "Large Shots",
            sizeValue: "Large",
            src: MenuShotsL,
          },
        ],
      },
      {
        id: 31,
        name: "Large Shots and Fries Combo",
        src: MenuSnacks3,
        price: 248.99,
        description:
          "Can't decide to choose fries or shots? Then here's the deal with 1 large shots and medium fries served w/ coke.",
        quantity: 1,
      },
      {
        id: 32,
        name: "Regular Shots and Fries Combo",
        src: MenuSnacks4,
        price: 193.99,
        description:
          "Can't decide which to choose fries or shots? Then here's the deal with 1 regular shots and medium fries served w/ coke.",
        quantity: 1,
      },
      {
        id: 33,
        name: "Chomper Fries",
        src: MenuSnacks5,
        price: 101.99,
        description:
          "These good-crusted fries are made with large portions of chicken and potatoes.",
        quantity: 1,
      },
    ],
  },
  {
    id: "drinks-and-desserts",
    title: "Drinks and Desserts",
    items: [
      {
        id: 34,
        name: "Brownies",
        src: MenuDrink1,
        price: 35.99,
        description:
          "Need something good and sweet? Here's the brownies made for you to sweeten your taste buds with a nice dark chocolate flavor.",
        quantity: 1,
      },
      {
        id: 35,
        name: "Soda",
        src: MenuDrink2,
        price: 55.99,
        description: "An ice-cold soda to hydrate and cool yourself down.",
        quantity: 1,
      },
      {
        id: 36,
        name: "Fruit Drinks",
        src: MenuDrink3,
        price: 55.99,
        description: "A great and healthy refresher to cool off your day.",
        quantity: 1,
      },
      {
        id: 37,
        name: "Sundae",
        src: MenuDrink4,
        price: 49.99,
        description:
          "Chill your day's off with a good vanilla-chocolate sundae.",
        quantity: 1,
      },
      {
        id: 38,
        name: "Iced Coffee",
        src: MenuDrink5,
        price: 68.99,
        description: "An ice-cold brewed coffee to refresh yourself.",
        quantity: 1,
      },
    ],
  },
];
