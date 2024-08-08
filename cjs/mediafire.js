let { load } = require("cheerio"), { get } = require("axios")

async function mediafire(url) {
  let { data } = await get(url), $ = load(data), urlFile = $('a#downloadButton').attr('href'), sizeFile = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('', ''), split = urlFile.split('/'), nameFile = split[5]
  mime = nameFile.split('.')
  mime = mime[1]
  let result = {
    title: nameFile,
    size: sizeFile,
    url: urlFile
  }
  return result
}

module.exports = mediafire
