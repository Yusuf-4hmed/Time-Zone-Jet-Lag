const mainTime = document.getElementById("main-time")



const updateMainTime = () => {
    const now = new Date();
    mainTime.innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    // console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`)
}
updateMainTime()
setInterval(updateMainTime, 1000)

const AllAvailableTimeZoneData = fetch(`https://timeapi.io/api/timezone/availabletimezones`)
.then(res => res.json())
.then(data => {return data})

const timeZoneData = fetch(`https://timeapi.io/api/time/current/zone?timeZone=Asia%2FTokyo`)
.then(res => res.json())
.then(data => console.log(data))


const searchTimeZone = document.getElementById("search-time-zone")
const timeZoneName = () => {
    
    if (AllAvailableTimeZoneData.includes(searchTimeZone.value)){
        console.log(1)
    } else {
        console.log(0)
    }
}

const addNewTimeZone = () => {
    const otherTimeContainer = document.getElementById("other-time-container");
    otherTimeContainer.innerHTML += `<div class="time-zone">
            <h2 class="time-zone-name">Name</h2>
            <p class="time-zone-time">hh:mm:ss</p>
        </div>`;
}




