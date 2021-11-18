import axios from 'axios';

const fetchData = (page = 1) => {
  return axios.get('https://api.github.com/gists/public', {
    params: {
      since: '2011-12-19T15:28:46.493Z',
      per_page: 30,
      page: page,
    },
  });
};

export default fetchData;
