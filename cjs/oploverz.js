/**
  * Made by MannR
  * https://whatsapp.com/channel/0029VaGqCO6I1rcjc9hisJ3U
  * Cr ini njirr
**/

var { get } = require("axios"), { load } = require("cheerio"), creator = "MannR", baseUrl = "https://oploverz.my/"

let search = async (q) => {
    var { data } = await get(baseUrl + "?s=" + q), $ = load(data), title = [], status = [], type = [], url = [], thumb = [], result = []
    
    $(".bsx a").each((a, b) => {
        title.push($(b).attr("title"))
        url.push($(b).attr("href"))
    })
    
    $(".bsx .status").each((a, b) => {
        status.push($(b).text().trim())
    })
    
    $(".bsx .typez").each((a, b) => {
        type.push($(b).text().trim())
    })
    
    $(".bsx img").each((a, b) => {
        thumb.push($(b).attr("src"))
    })
    
    for (let i = 0; i < title.length; i++) {
        result.push({
            title: title[i],
            status: status[i],
            type: type[i],
            url: url[i],
            thumb: thumb[i]
        })
    }
    return ({
        status: true,
        creator,
        result
    })
}

let detail = async (q) => {
    var { data } = await get(q), $ = load(data), x = $(".bigcontent .thumb img"), title = x.attr("title"), rating = $(".rt .rating").text().trim().replace("Rating ",""), thumb = x.attr("src"), status = $(".spe span:nth-child(1)").text().trim().replace("Status: ",""), studio = $(".spe span:nth-child(2)").text().trim().replace("Studio: ",""), duration = $(".spe span:nth-child(3)").text().trim().replace("Duration: ",""), season = $(".spe span:nth-child(4)").text().trim().replace("Season: ",""), type = $(".spe span:nth-child(5)").text().trim().replace("Type: ",""), release = $(".spe span:nth-child(8)").text().trim().replace("Released on: ",""), update = $(".spe span:nth-child(9)").text().trim().replace("Updated on: ",""), genre = [], synopsis = $(".desc").text().trim(), episode = []
    
    $(".genxed a").each((a, b) => {
        genre.push($(b).text().trim())
    })
    
    $(".postbody a[href*='episode']").each((a, b) => {
        episode.push($(b).attr("href"))
    })
    
    return ({
        status: true,
        creator,
        result: {
            title,
            rating,
            status,
            studio,
            duration,
            season,
            type,
            genre,
            release,
            update,
            thumb,
            episode,
            synopsis
        }
    })
}

let detail_epsd = async (q) => {
    var { data } = await get(q), $ = load(data), title = $(".title-section h1[class='entry-title']").text().trim(), type = $("span[class='epx']").text().trim(), update = $("span[class='updated']").text().trim(), thumb = $(".tb img").attr("src"), rating = $(".rating").text().trim().replace("Rating ",""), status = $(".spe span:nth-child(1)").text().trim().replace("Status: ",""), studio = $(".spe span:nth-child(2)").text().trim().replace("Studio: ",""), duration = $(".spe span:nth-child(3)").text().trim().replace("Duration: ",""), season = $(".spe span:nth-child(4)").text().trim().replace("Season: ",""), type = $(".spe span:nth-child(5)").text().trim().replace("Type: ",""), release = $(".spe span:nth-child(8)").text().trim().replace("Released on: ",""), update = $(".spe span:nth-child(9)").text().trim().replace("Updated on: ",""), synopsis = $(".desc").text().trim(), genre = [], download = []
    
    $(".genxed a").each((a, b) => {
        genre.push($(b).text().trim())
    })
    
    //$(".soraurlx a[href*='mediafire']").each((a, b) => {
        download.push($(b).attr("href"))
    })
    
    let { url } = await o(download[0])
    
    return ({
        status: true,
        creator,
        result: {
            title,
            rating,
            status,
            studio,
            duration,
            season,
            type,
            genre,
            update,
            thumb,
            //download,
            synopsis
        }
    })
}

module.exports = { search, detail, detail_epsd }
