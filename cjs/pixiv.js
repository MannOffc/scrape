var { get } = require("axios")

let pixiv = async (word) => {
  const url = 'https://www.pixiv.net/touch/ajax/tag_portal';
  const params = { word, lang: 'en', version: 'b355e2bcced14892fe49d790ebb9ec73d2287393' };
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
    'Referer': 'https://www.pixiv.net/',
    'Accept-Encoding': 'gzip, deflate, br'
  };
  const { data } = await get(url, { params, headers });
  const illusts = data.body.illusts;
  const random = illusts[Math.floor(Math.random() * illusts.length)].url;
  const image = await axios.get(random, { responseType: 'arraybuffer', headers });

  return image.data;
}

module.exports = pixiv
