import korea from '../../assets/korea.png';
import japan from '../../assets/japan.png';
import china from '../../assets/china.png';
import asia from '../../assets/asia.png';
import meat from '../../assets/meat.png';
import dining from '../../assets/dining.png';
import cafe from '../../assets/cafe.png';
import fast_food from '../../assets/fast_food.png';

export const foodCategory = {
  KOREAN: { text: '한식', name: 'KOREAN', img: korea },
  JAPANESE: { text: '일식', name: 'JAPANESE', img: japan },
  CHINESE: { text: '중식', name: 'CHINESE', img: china },
  WESTERN_ASIAN: { text: '아시안', name: 'ASIAN', img: asia },
  ALL: { text: 'ALL', name: '', img: null },
  CHICKEN: { text: '치킨', name: 'CHICKEN', img: meat },
  SNACKS: { text: '분식', name: 'SCHOOL_FOOD', img: dining },
  CAFE: { text: '카페/디저트', name: 'CAFE_DESSERT', img: cafe },
  FASTFOOD: { text: '패스트푸드', name: 'FAST_FOOD', img: fast_food },
};


// ROOT,
//     KOREAN, SEA_FOOD, MEAT, NODDLE, RAW_FISH, PORRIDGE, KOREAN_STEW,
//     JAPANESE, TUNA_SASHIMI, SUSHI, PORK_CUTLET_UDON, RAMEN,
//     ALCOHOL, INDOOR_STALLS, HOF_PUB, WINE_BAR, IZAKAYA, COCKTAIL_BAR, SHABU_SHABU, DRIVERS,
//     ASIAN, SOUTH_EAST_ASIAN, INDIAN, CHINESE, LAMB_SKEWERS, LUNCH_BOX, FAST_FOOD,
//     SANDWICH, CAFE_DESSERT, BAKERY, RICE_CAKE, ICE_CREAM, DONUT, TOAST, CHICKEN,
//     SCHOOL_FOOD, WESTERN_FOOD, ITALY, PIZZA, BURGER, STEAK_RIB, MEXICAN, SALAD,
//     OTHER;


export const foodCategory1 = [

  {
    title: "KOREAN",
    categories: [
      { text: 'KOREAN', name: 'KOREAN' },
      { text: 'SEA_FOOD', name: 'SEA_FOOD' },
      { text: 'MEAT', name: 'MEAT' },
      { text: 'NODDLE', name: 'NODDLE' },
      { text: 'RAW_FISH', name: 'RAW_FISH' },
      { text: 'PORRIDGE', name: 'PORRIDGE' },
      { text: 'KOREAN_STEW', name: 'KOREAN_STEW' },
    ]
  },
  {
    title: "JAPANESE",
    categories: [
      { text: 'JAPANESE', name: 'JAPANESE' },
      { text: 'TUNA_SASHIMI', name: 'TUNA_SASHIMI' },
      { text: 'SUSHI', name: 'SUSHI' },
      { text: 'PORK_CUTLET_UDON', name: 'PORK_CUTLET_UDON' },
      { text: 'RAMEN', name: 'RAMEN' },
    ]
  },
  {
    title: "CHINESE",
    categories: [
      { text: 'INDOOR_STALLS', name: 'INDOOR_STALLS'},
      { text: 'HOF_PUB', name: 'HOF_PUB'},
      { text: 'WINE_BAR', name: 'WINE_BAR'},
      { text: 'IZAKAYA', name: 'IZAKAYA'},
      { text: 'COCKTAIL_BAR', name: 'COCKTAIL_BAR'},
      { text: 'SHABU_SHABU', name: 'SHABU_SHABU'},
      { text: 'DRIVERS', name: 'DRIVERS'},
      ]
    },
  {
    title: "ASIAN",
    categories: [
    { text: 'SOUTH_EAST_ASIAN', name: 'SOUTH_EAST_ASIAN'},
    { text: 'INDIAN', name: 'INDIAN'},
     { text: 'CHINESE', name: 'CHINESE'},
     { text: 'LAMB_SKEWERS', name: 'LAMB_SKEWERS'},
     { text: 'LUNCH_BOX', name: 'LUNCH_BOX'},
     { text: 'FAST_FOOD', name: 'FAST_FOOD'},
      ]
    },
  {
    title: "CAFE",
    categories: [
   { text: 'CAFE_DESSERT', name: 'CAFE_DESSERT'},
   { text: 'SANDWICH', name: 'SANDWICH'},
   { text: 'BAKERY', name: 'BAKERY'},
   { text: 'RICE_CAKE', name: 'RICE_CAKE'},
   { text: 'ICE_CREAM', name: 'ICE_CREAM'},
   { text: 'DONUT', name: 'DONUT'},
   { text: 'TOAST', name: 'TOAST'},
   { text: 'CHICKEN', name: 'CHICKEN'},
      ]
    },
    {
    title: "SCHOOL_FOOD",
    categories: [
 { text: 'WESTERN_FOOD', name: 'WESTERN_FOOD'},
   { text: 'ITALY', name: 'ITALY'},
   { text: 'PIZZA', name: 'PIZZA'},
   { text: 'BURGER', name: 'BURGER'},
   { text: 'STEAK_RIB', name: 'STEAK_RIB'},
   { text: 'MEXICAN', name: 'MEXICAN'},
   { text: 'SALAD', name: 'SALAD'},
      ]
    },
  ];
