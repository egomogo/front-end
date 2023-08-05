import request from './axios';
import { GET_CATEGORY } from '../constants/api';

export const getCategory = async () => {
  return request.get(GET_CATEGORY());
  //   return GET_CATEGORY();
};
