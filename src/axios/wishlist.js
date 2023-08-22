import request from 'axios';

export const fetchWishList = async (ids) => {
  try {
    const idString = ids.join(',');
    const url = `http://13.125.224.220:8080/api/v1/restaurants/wishes?ids=${idString}`;

    const response = await request.get(url);

    if (response.status !== 200) {
      throw new Error('Failed to fetch the wishlist');
    }


    return response.data.restaurants.map(item => item);
  } catch (error) {
    return [];
  }
};
