import korea from '../../assets/korea.png';
import japan from '../../assets/japan.png';
import china from '../../assets/china.png';
import asia from '../../assets/asia.png';
import meat from '../../assets/meat.png';
import dining from '../../assets/dining.png';
import cafe from '../../assets/cafe.png';
import fast_food from '../../assets/fast_food.png';

export const foodCategory = {
  KOREAN: { name: 'KOREAN', img: korea },
  JAPANESE: { name: 'JAPANESE', img: japan },
  CHINESE: { name: 'CHINESE', img: china },
  WESTERN_ASIAN: { name: '양식/아시안', img: asia },
  ALL: { name: 'ALL', img: null },
  CHICKEN: { name: '치킨', img: meat },
  SNACKS: { name: '분식', img: dining },
  CAFE: { name: '카페/디저트', img: cafe },
  FASTFOOD: { name: '패스트푸드', img: fast_food },
};

// ROOT,
//     KOREAN, SEA_FOOD, MEAT, NODDLE, RAW_FISH, PORRIDGE, KOREAN_STEW,
//     JAPANESE, TUNA_SASHIMI, SUSHI, PORK_CUTLET_UDON, RAMEN,
//     ALCOHOL, INDOOR_STALLS, HOF_PUB, WINE_BAR, IZAKAYA, COCKTAIL_BAR, SHABU_SHABU, DRIVERS,
//     ASIAN, SOUTH_EAST_ASIAN, INDIAN, CHINESE, LAMB_SKEWERS, LUNCH_BOX, FAST_FOOD,
//     SANDWICH, CAFE_DESSERT, BAKERY, RICE_CAKE, ICE_CREAM, DONUT, TOAST, CHICKEN,
//     SCHOOL_FOOD, WESTERN_FOOD, ITALY, PIZZA, BURGER, STEAK_RIB, MEXICAN, SALAD,
//     OTHER;
