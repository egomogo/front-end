import request from './axios';
import { GET_CATEGORY } from '../constants/API';

export const getCategory = async () => {
  return request.get(GET_CATEGORY());
};
