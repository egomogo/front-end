// restaurant.js
export const GET_RANDOM_RESTAURANT = (
  seed,
  category,
  x,
  y,
  distanceLimit,
  page,
  size
) => {
  return `/restaurants/random?seed=${seed}&category=${category}&x=${x}&y=${y}&distance_limit=${distanceLimit}&page=${page}&size=${size}`;
};

export const GET_DETAIL_RESTAURANT = (restaurantId) => {
  return `/restaurants/${restaurantId}`;
};

// category.js
export const GET_CATEGORY = () => {
  return `/restaurants/categories`;
};
