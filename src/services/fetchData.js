import axios from 'axios';
import { API_ENDPOINT } from '@env';

const fetchData = (
  page = 1,
  since = '2011-12-19T15:28:46.493Z',
  perPage = 30,
) => {
  return axios.get(`${API_ENDPOINT}`, {
    params: {
      since,
      per_page: perPage,
      page,
    },
  });
};

export default fetchData;
