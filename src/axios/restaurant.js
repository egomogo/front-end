import { GET_DETAIL_RESTAURANT, GET_RANDOM_RESTAURANT } from '../constants/API';
import request from './axios';

export const getRandomRestaurant = async (
  seed,
  category,
  x,
  y,
  distanceLimit,
  page,
  size
) => {
  return request.get(
    GET_RANDOM_RESTAURANT(seed, category, x, y, distanceLimit, page, size)
  );
};

export const getDetailRestaurant = async (restaurantId) => {
  return request.get(GET_DETAIL_RESTAURANT(restaurantId));
};
