import { atom, selector } from 'recoil';

export const xState = atom({
  key: 'xState',
  default: 126.9226047,
});

export const yState = atom({
  key: 'yState',
  default: 37.5802219,
});

export const minuteState = atom({
  key: 'minuteState',
  default: 5,
});

export const distanceLimitState = selector({
  key: 'distanceLimitState',
  get: ({ get }) => {
    const minute = get(minuteState);
    return minute * 67;
  },
});

export const kakaoShopIdState = atom({
  key: 'kakaoShopIdState',
  default: '',
});
