function load_single_moon(moon){    
    var day = new Date().getDate()
    var moonsvg = moon.phase[day].svg
    // remove link
    var newMoonSVG = moonsvg.split("<a ")[0] + moonsvg.split("<a ")[1].split('</a>')[1]
    var dayWeek=moon.phase[day].dayWeek
    var html = "<div>" +
    "<b>" + moon.nameDay[dayWeek]+ "</b>" +
    "<div>" + day + " <b>" + moon.monthName + "</b> " +
    moon.year + "</div>" +
    "<div shadow>" + newMoonSVG + "</div>" +
    "<div>" + moon.phase[day].phaseName + " " +
    "" + ((moon.phase[day].isPhaseLimit )? ""  :   Math.round(moon.phase[day].lighting) + "%") +
    "</div>" +
    "</div>"
    document.getElementById("moon").innerHTML = html
}   

function load_moon_phases(){
    var configMoon = {
        lang  		:'en', 
        month 		:new Date().getMonth() + 1,
        year  		:new Date().getFullYear(),
        size		:150, 
        lightColor	:"rgb(255,255,210)", 
        shadeColor	:"black", 
        texturize	:false, 
    }

    var gets=[]
    for (var i in configMoon){
        gets.push(i + "=" +encodeURIComponent(configMoon[i]))
    }
    gets.push("LDZ=" + new Date(configMoon.year,configMoon.month-1,1) / 1000)
    var xmlhttp = new XMLHttpRequest()
    var url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&")
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            load_single_moon(JSON.parse(xmlhttp.responseText))
        }
    }
    xmlhttp.open("GET", url, true)
    xmlhttp.send()
}

export default load_moon_phases;

