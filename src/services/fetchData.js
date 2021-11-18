import axios from 'axios';

const fetchData = (page = 2) => {
  return axios.get('https://api.github.com/gists/public', {
    params: {
      //   since: 'YYYY-MM-DDTHH:MM:SSZ',
      per_page: 30,
      page: page,
    },
  });
};

export default fetchData;
