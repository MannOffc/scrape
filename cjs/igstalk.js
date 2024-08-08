/**
  * Made by MannR
  * https://whatsapp.com/channel/0029VaGqCO6I1rcjc9hisJ3U
  * Cr ini njirr
**/

var { get } = require("axios"), { load } = require("cheerio")

exports.stalk = async (q) => {
try {
    var { data } = await get("https://tools.revesery.com/stalkig/revesery.php?username=" + q)
    var $ = load(data)
    let c = []
    $("p").each(function(a, b) {
        let x = $(b).text().trim()
        c.push(x)
    })
    let username = c[0].replace("👤 Username: ", "")
    let fullname = c[1].replace("🧑‍🎓 Full name: ", "")
    let bio = c[2].replace("📖 Bio: ", "")
    let followers = c[3].replace("👥 Followers: ", "")
    let following = c[4].replace("👫 Following: ", "")
    let post_count = c[5].replace("📷 Posts count: ", "")
    let image = $("a").attr("href")
    return ({
    creator: "MannR",
    status: 200,
    result: {
        username,
        fullname,
        bio,
        followers,
        following,
        post_count,
        image
    }
    })
} catch (e) {
console.log(e)
}
}
