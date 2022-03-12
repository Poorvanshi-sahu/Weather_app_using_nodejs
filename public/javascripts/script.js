var btn = document.querySelector("#submitbtn");
var city = document.querySelector("#cityname");
var cityn = document.querySelector("#cityn");
var day = document.querySelector("#day");
var date = document.querySelector("#date");
var temp = document.querySelector("#temp span");
var stat = document.querySelector("#status");
var all = new Date();
var datee = `${all.getDate()}/${all.getMonth()}/${all.getFullYear()}`;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayy = days[all.getDay()];
console.log(day)

let getinfo = async(val) => {
    var nnn = city.value;
    val.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${nnn}&appid=568cc0df3008e0b2f8885727db65a6ea`;
    const response = await fetch(url);
    const data = await response.json();
    console.log([data]);
    console.log(response);
    if (city.value === "") {
        cityn.innerHTML = "please write something before search";
    } else {
        fetch(url).then(res => {
            return res.json();
        }).then(data => {
            var ar = [data];
            day.innerHTML = dayy;
            date.innerHTML = datee;
            temp.textContent = ar[0].main.temp;
            cityn.innerHTML = nnn;
            stat.innerHTML = ar[0].weather[0].main;
        }).catch((err) => {
            cityn.innerHTML = "please write something";
        })
    }
}

btn.addEventListener('click', getinfo);