import korea from '../../assets/korea.png';
import japan from '../../assets/japan.png';
import china from '../../assets/china.png';
import asia from '../../assets/asia.png';
import meat from '../../assets/meat.png';
import dining from '../../assets/dining.png';
import cafe from '../../assets/cafe.png';
import fast_food from '../../assets/fast_food.png';

export const foodCategory = {
  KOREAN: { name: '한식', img: korea },
  JAPANESE: { name: '일식', img: japan },
  CHINESE: { name: '중식', img: china },
  WESTERN_ASIAN: { name: '양식/아시안', img: asia },
  ALL: { name: 'ALL', img: null },
  CHICKEN: { name: '치킨', img: meat },
  SNACKS: { name: '분식', img: dining },
  CAFE: { name: '카페/디저트', img: cafe },
  FASTFOOD: { name: '패스트푸드', img: fast_food },
};

export const dummyData = {
  [foodCategory.KOREAN.name]: [
    '떡볶이',
    '김밥',
    '라면',
    '비빔밥',
    '육회비빔밥',
  ],
  [foodCategory.JAPANESE.name]: ['초밥', '라멘'],
  [foodCategory.CHINESE.name]: ['짜장면', '짬뽕'],
  [foodCategory.WESTERN_ASIAN.name]: ['파스타', '피자'],
  [foodCategory.CHICKEN.name]: ['땅땅치킨', '교촌'],
  [foodCategory.ALL.name]: ['햄버거', '핫도그'],
  [foodCategory.SNACKS.name]: ['떡볶이', '핫도그', '어묵'],
  [foodCategory.CAFE.name]: [
    '아메리카노',
    '카페라떼',
    '카푸치노',
    '플랫화이트',
  ],
  [foodCategory.FASTFOOD.name]: ['삼각김밥', '도시락'],
};
