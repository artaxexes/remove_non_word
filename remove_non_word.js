var str = "#hashtag Text to be standardizate for the 1st time!"
var new_str = str.replace(/\s/g, "_").replace(/\W/g, "").toLowerCase()
