/* Global Const */


/* BLOC INFO */

const date = document.querySelector('.date');
const hour = document.querySelector('.hour');
const city = document.querySelector('.city');
const pays = document.querySelector('.pays');

/* BLOC TEMPERATURE */

const img = document.querySelector('.image');
const tmp = document.querySelector('.tmp');
const temps = document.querySelector('.temps');

/* BLOC DETAIL */

const presure = document.querySelector('.presure');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

/* OTHER-DAY */

const icon = document.querySelector('.icone');
const day = document.querySelector('.day') ;
const tmpDay = document.querySelector('.tmpDay')

const icon2 = document.querySelector('.icone2');
const day2 = document.querySelector('.day2') ;
const tmpDay2 = document.querySelector('.tmpDay2')

const icon3 = document.querySelector('.icone3');
const day3 = document.querySelector('.day3') ;
const tmpDay3 = document.querySelector('.tmpDay3')

const icon4 = document.querySelector('.icone4');
const day4 = document.querySelector('.day4') ;
const tmpDay4 = document.querySelector('.tmpDay4') ;

/* Request GET */

get('https://www.prevision-meteo.ch/services/json/paris').then(function(data){

    console.log(data)

    /* BLOC INFO */

    date.textContent = data.current_condition.date;
    hour.textContent = data.current_condition.hour;
    city.textContent = data.city_info.name  ;
    pays.textContent = data.city_info.country;
    
    /* BLOC TMP */

    img.src = data.current_condition.icon;
    tmp.textContent = data.current_condition.tmp + " °C ";
    temps.textContent = data.current_condition.condition;

    /* BLOC DETAIL */

    presure.textContent = data.current_condition.pressure + " HPA ";
    humidity.textContent = data.current_condition.humidity + " % ";
    wind.textContent = data.current_condition.wnd_spd + " k/hm ";

    /* OTHER DAY */

    icon.src = data.fcst_day_1.icon
    day.textContent = data.fcst_day_1.day_long
    tmpDay.textContent = data.fcst_day_1.tmin + " °C "

    icon2.src = data.fcst_day_2.icon
    day2.textContent = data.fcst_day_2.day_long
    tmpDay2.textContent = data.fcst_day_2.tmin + " °C "

    icon3.src = data.fcst_day_3.icon
    day3.textContent = data.fcst_day_3.day_long
    tmpDay3.textContent = data.fcst_day_3.tmin + " °C "

    icon4.src = data.fcst_day_4.icon
    day4.textContent = data.fcst_day_4.day_long
    tmpDay4.textContent = data.fcst_day_4.tmin + " °C "

})

