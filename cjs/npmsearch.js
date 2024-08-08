/**
  * Made by MannR
  * https://whatsapp.com/channel/0029VaGqCO6I1rcjc9hisJ3U
**/

var axios = require('axios'), cheerio = require('cheerio')

let search = async (q) => {
  let { data } = await axios.get("https://registry.npmjs.org/" + q)
  let versions = data.versions
  let allver = Object.keys(versions)
  let verLatest = allver[allver.length-1]
  let verPublish = allver[0]
  let packageLatest = versions[verLatest]
  return {
    name: q,
    versionLatest: verLatest,
    versionPublish: verPublish,
    versionUpdate: allver.length,
    latestDependencies: Object.keys(packageLatest.dependencies).length,
    publishDependencies: Object.keys(versions[verPublish].dependencies).length,
    publishTime: data.time.created,
    latestPublishTime: data.time[verLatest]
  }
}

module.exports = search
