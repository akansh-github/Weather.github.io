const dt = new Date();
const n = dt.toDateString();




const date = document.getElementById('date');
date.innerText = `${n}`


let country = document.querySelector("#country");

let City = document.querySelector("#City");

let check = document.querySelector("#check");
let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temp");
// let weatherDescription = document.querySelector("#weatherDescription");
let feelsLike = document.querySelector("#feelsLike");

let longitude = document.querySelector("#longitude");
let latitude = document.querySelector("#latitude");

let minmax = document.querySelector('#minmax');

let toddleBtn = document.querySelector('#toggleBtn');
let weatherDetail = document.querySelector('#BtnWeDet');

let NextDaysWeather = document.querySelector('#BtnNextDays');

let humidity = document.querySelector("#humidity");
let windSpeed = document.querySelector('#windSpeed');
let sealevel = document.querySelector('#sealevel');
let AirPressure = document.querySelector('#airPressure');
let visibility = document.querySelector('#visibility')
let appTemp = document.querySelector('#appTemp')
// let cel = document.querySelector('#cel');
// let farh = document.querySelector('#farh');

let descToday = document.querySelector('#descToday')
let descTommarrow = document.querySelector('#descTommarrow')
let descDay = document.querySelector('#descDay')

document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?nature" + " ')";
// document.body.style.backgroundSize="100% 100%";
// document.body.style.backgroundRepeat='no-repeat center center';

check.addEventListener('click', () => {
    // let key = `530d38c3f079277e9228a0cc9529d5e4`;
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value},${country.value}&lang=en&units=metric&appid=bbf4cd2973c9ca256f3b4883f544995f`;
    // api.openweathermap.org/data/2.5/forecast?q=${city.name.value},${city.country.value}&appid=530d38c3f079277e9228a0cc9529d5e4
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        City.innerText = `${data.city.name} / ${data.city.country}`;
        temperature.innerText = `${data.list[0].main.temp}°`;

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?nature" + "')";

        data.list[0].weather.forEach(items => {
            weatherDescription.innerText = items.main;
            if (items.id < 250) {
                tempIcon.src = `icons/lightining.svg`;
            } else if (items.id < 350) {
                tempIcon.src = `icons/cloudRain.svg`;
            } else if (items.id < 550) {
                tempIcon.src = `icons/RainLigntining.svg`;
            } else if (items.id < 650) {
                tempIcon.src = `icons/rain.svg`;
            } else if (items.id < 800) {
                tempIcon.src = `icons/Haze.svg`;
            } else if (items.id === 800) {
                tempIcon.src = `icons/sunny.svg`;
            } else if (items.id > 800) {
                tempIcon.src = `icons/clouds.svg`;
            }
        })

        feelsLike.innerHTML = `Feels Like :${data.list[0].main.feels_like}°`;

        // humidity.innerHTML = `Humidity ${data.main.humidity}`;
        latitude.innerText = `Latitude :${data.city.coord.lat}`;
        longitude.innerText = `Latitude :${data.city.coord.lon}`;
        minmax.innerText = `${data.list[0].main.temp_min} °C | ${data.list[0].main.temp_max} °C`;

        appTemp.innerText = ` Apparent Temperature :  ${data.list[0].main.temp}°C`;
        AirPressure.innerText = `Air Pressure :  ${data.list[0].main.pressure} hPa`;
        humidity.innerText = `Humidity :  ${data.list[0].main.humidity} %`;
        visibility.innerText = `Visibility :  ${data.list[0].visibility} m`;
        windSpeed.innerText = `Wind Speed :  ${data.list[0].wind.speed} km/h`;
        sealevel.innerText = `Sea-Level :  ${data.list[0].main.sea_level} m`;



        const minmaxToday = document.querySelector('#minmaxToday');
        const minmaxTomarrow = document.querySelector('#minmaxTomarrow');
        const minmaxNextDay = document.querySelector('#minmaxNextDay');

        const descToday = document.querySelector('#descToday');
        const descTommarrow = document.querySelector('#descTommarrow');
        const descDay = document.querySelector('#descDay');

        minmaxToday.textContent = `${data.list[0].main.temp_min} °C | ${data.list[0].main.temp_max} °C`;
        minmaxTomarrow.textContent = `${data.list[1].main.temp_min} °C | ${data.list[1].main.temp_max} °C`;
        minmaxNextDay.textContent = `${data.list[2].main.temp_min} °C | ${data.list[2].main.temp_max} °C`;


        descToday.innerHTML = `${data.list[0].weather[0].description}`;
        descTommarrow.innerHTML = `${data.list[1].weather[0].description}`;
        descDay.innerHTML = `${data.list[2].weather[0].description}`;
    })
    country.value = "";
    City.value = "";



})
const NextDay = document.querySelector('#NextDay');

// var tomorrow = new Date();
// tomorrow.setDate(dt.getDate()+2);
// var Nday = tomarrow.toDateString();
// NextDay.innerHTML = `${Nday}`;



const day = new Date()
let DANDay = new Date()
DANDay.setDate(day.getDate() + 2);
// let result = DANDay.slice(0, 3);
// console.log(result);
const string= DANDay.toString();
let s=string.slice(0,3);
console.log("DANDay => ", DANDay)
console.log(string);
console.log(s);




NextDay.innerHTML = `${s}`;



// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// const d = new Date();
// let day = weekday[d.getDay()];
// if(day <5){
//     day=weekday[i]

// }
// let thatDay= weekday[d.getDay()+2];

// NextDay.innerHTML =`${day.value+2}`;

// var DayAftertomorrow = new Date();
// NextDay.innerHTML=DayAftertomorrow.setDate(new Date().getDate()+2);


// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// const day = new Date();
// const d = day.getDay();

// var d1=(d==5)?weekday[0]:"error";

// var d2 =(d==6)?weekday[1]:"error";


// const DayAfterNextDay = () => {
//     const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     const day = new Date();
//     const d = day.getDay();

//         var d1 = (d == 5) ? weekday[0] : "error";
//         console.log(d1);

//         var d2 = (d == 6) ? weekday[1] : "error";
//         console.log(d2);



// }
// console.log(DayAfterNextDay());











// const dt = new Date();
// const n = dt.toDateString();
// if (d <= 4) {
//     console.log(weekday[d]);
// }
// else {
//     // if (d == 5) { console.log(weekday[0]);}
//     // else { console.log('error'); }

//     // if (d == 6) {console.log(weekday[1]);}
//     // else { console.log('error'); }


// weatherDetail.addEventListener('click', () => {
//     let weatherDet = `

//     `
// })

// const cel = document.getElementById('cel');
// const fehr = document.getElementById('farh');
// const numberTemp = document.getElementById('temp').value;
// const num = parseFloat(numberTemp)
// console.log(num);

// const calculateTemp=()=>{
//     // const numberTemp=document.getElementById('temp').value;

//     // const tempSelected=document.getElementById('temp_diff');

//       //  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

//    const celToFah=(cel)=>{
//     let fahrenheit=((cel*9/5)+32);
//     return fahrenheit;
//    }

//    const fehToCel=(fehr)=>{
//     let celsius=((fehr-32)*5/9);
//     return celsius;
//    }
//    let result;

//    if(numberTemp=='cel'){
//     result= celToFah(numberTemp);
//     document.getElementById('temp').innerText=` = ${result}`;

//    }
//    else{
//     result= fehToCel(numberTemp);
//     document.getElementById('temp').innerText=`= ${result}`;


//    }
// }
// let show =document.addEventListener('click',calculateTemp())

// numberTemp.innerHTML=`${show};`

//>>>>>>>>>>>>>>>>>>...html data
// let htmlData =()=>{
//     const HtmlData = ``;

//     htmlData.insertAdjacentHTML('beforeend',HtmlData)
// }







// var numberTemp = document.getElementById('temp').value;

// //>>>>>>>>>>>>>>>>>>>>>>>

// const celToFerh=()=>{

//     let fahrenheit = parseFloat((numberTemp * 9 / 5) + 32);

//     var numberTemp = document.getElementById('temp').value=fahrenheit;

// }

// const ferhToCel=()=>{

//     let celsius = parseFloat(( fahrenheit - 32) * 5 / 9);

//     var numberTemp = document.getElementById('temp').value=celsius;

// }




// window.onload =function print() {


// cel.addEventListener('click',()=>{

//     const celToFah = (cel) => {

//                 let fahrenheit = ((cel * 9 / 5) + 32);
//                 return parseFloat(fahrenheit);
//             }

//             cel.style = 'white';
//             cel.style.backgroundColor = 'black';
//             fehr.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';

//                 var celToFarh;


//                 celToFarh = celToFah(numberTemp);
//                 // numberTemp.innerHTML = `${celToFarh}`;
//                 document.getElementById('temp').innerHTML = `${celToFarh}`;
// });


// fehr.addEventListener('click',()=>{

//     const fehToCel = (fehr) => {
//                 let celsius = ((fehr - 32) * 5 / 9);
//                 return parseFloat(celsius);
//             }


//             fehr.style = 'white';
//                 fehr.style.backgroundColor = 'black';
//                 cel.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';


//             var FarhToCel;

//             FarhToCel = fehToCel(numberTemp);
//             // numberTemp.innerHTML = `${FarhToCel}`;

//             document.getElementById('temp').innerHTML = `${FarhToCel}`;

// });


// }


// fehr.onclick = (() => {
//     const celToFah = (cel) => {
//         let fahrenheit = ((cel * 9 / 5) + 32);
//         return fahrenheit;
//     }

//     fehr.style = 'white';
//     fehr.style.backgroundColor = 'black';
//     cel.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';

//     var celToFarh;


//     celToFarh = celToFah(numberTemp);
//     numberTemp.innerHTML = `${celToFarh}`;
//     document.getElementById('temp').innerHTML = `${celToFarh}`;


// })

// cel.onclick = (() => {

//     const fehToCel = (fehr) => {
//         let celsius = ((feyhr - 32) * 5 / 9);
//         return celsius;
//     }

//     cel.style = 'white';
//     cel.style.backgroundColor = 'black';
//     fehr.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';


//     var FarhToCel;

//     FarhToCel = fehToCel(numberTemp);
//     numberTemp.innerHTML = `${FarhToCel}`;
//     document.getElementById('temp').innerHTML = `${FarhToCel}`;

// })



// let show =document.addEventListener('click',convert());

// farh.style='white';
// farh.style.backgroundColor='black'
// numberTemp.innerHTML=`${show};`

// htmlData.insertAdjacentHTML('beforeend', HtmlData)
const today = document.querySelector('#today');
const tomarrow = document.querySelector('#tomarrow');

// const 
// const 
// const 



// let otherDayForcast='';
// data.daily.forEach((day,idx)=>{
//     if (idx==0) {

//     }else{
//         otherDayForcast +=`
//         <h2>Today</h2>
//         <span class="MinMax" id="minmaxToday">Min | Max</span><br>
//         <span class="desc" id="descToday">Description</span>

//         `
//     }
// })


window.onload = function hide() {
    section2.style.display = 'none'
    section3.style.display = 'none'
}

const BtnWeDet = document.getElementById('BtnWeDet');
const BtnNextDays = document.getElementById('BtnNextDays');
const back = document.getElementById('back');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');

BtnWeDet.addEventListener('click', () => {
    section1.style.display = 'none';
    section2.style.display = 'flex';

    section3.style.display = 'none';
})

BtnNextDays.addEventListener('click', () => {
    section1.style.display = 'none';
    section2.style.display = 'none';
    section3.style.display = 'flex';
})

back.addEventListener('click', () => {
    section1.style.display = 'flex';
    section2.style.display = 'none';
    section3.style.display = 'none';
})
