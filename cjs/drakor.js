/**
  * Made by MannR
  * https://whatsapp.com/channel/0029VaGqCO6I1rcjc9hisJ3U
  * Cr ini njirr
**/

let axios = require("axios"), cheerio = require("cheerio")

async function search(q) {
    let { data } = await axios.get("https://drakorindo.fyi/?s=" + q)
    let $ = cheerio.load(data)
    
    let title = []
    let image = []
    let link = []
    let rilis = []
    let sinopsis = []
    let result = []
    
    $(".mh-loop-thumb img").each(function(a, b) {
        let x = $(b).attr("alt")
        title.push(x)
    })
    
    $(".mh-loop-thumb img").each(function(a, b) {
        let x = $(b).attr("src")
        image.push(x)
    })
    
    $(".mh-loop-thumb a").each(function(a, b) {
        let x = $(b).attr("href")
        link.push(x)
    })
    
    $("span[class='mh-meta-date updated']").each(function(a, b) {
        let x = $(b).text().trim()
        rilis.push(x)
    })
    
    $(".mh-excerpt p").each(function(a, b) {
        let x = $(b).text().trim()
        sinopsis.push(x)
    })
    
    for (let i = 0; i < link.length; i++) {
        result.push({
            title: title[i],
            image: image[i],
            link: link[i],
            rilis: rilis[i],
            sinopsis: sinopsis[i]
        })
    }
    return ({
      status: true,
      creator: "MannR",
      result
    })
}

async function ongoing(q = "1") {
    let { data } = await axios.get("https://drakorindo.fyi/genre/ongoing/page/" + q + "/")
    let $ = cheerio.load(data)
    
    let title = []
    let image = []
    let link = []
    let rilis = []
    let sinopsis = []
    let result = []
    
    $(".mh-loop-thumb img").each(function(a, b) {
        let x = $(b).attr("alt")
        title.push(x)
    })
    
    $(".mh-loop-thumb img").each(function(a, b) {
        let x = $(b).attr("src")
        image.push(x)
    })
    
    $(".mh-loop-thumb a").each(function(a, b) {
        let x = $(b).attr("href")
        link.push(x)
    })
    
    $("span[class='mh-meta-date updated']").each(function(a, b) {
        let x = $(b).text().trim()
        rilis.push(x)
    })
    
    $(".mh-excerpt p").each(function(a, b) {
        let x = $(b).text().trim()
        sinopsis.push(x)
    })
    
    for (let i = 0; i < link.length; i++) {
        result.push({
            title: title[i],
            image: image[i],
            link: link[i],
            rilis: rilis[i],
            sinopsis: sinopsis[i]
        })
    }
    return ({
      status: true,
      creator: "MannR",
      result
    })
}

module.exports = { search, ongoing }
