import axios from 'axios';
//----------------------------------------------//

const KEY_PIX = '29452902-708c79e62c53166b5b11e2c07';
const BASE_URL = 'https://pixabay.com/api/';

async function getImgs(name, page) {
  const params = {
    url: BASE_URL,
    params: {
      key: KEY_PIX,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: false,
      q: name,
      page: page,
      per_page: 40,
    },
  };

  return await axios(params);
}

export { getImgs };