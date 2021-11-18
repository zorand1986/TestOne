import axios from 'axios';

const fetchData = async () => {
  await axios.get('API: https://api.github.com/gists/public', {
    params: {
      since: 'YYYY-MM-DDTHH:MM:SSZ',
      per_page: 30,
      page: 2,
    },
  });
};

export default fetchData;
