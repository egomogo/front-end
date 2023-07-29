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
