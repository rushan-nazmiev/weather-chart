import './styles/style.css'

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canWidth = canvas.width;
let canHeight = canvas.height;

ctx.fillStyle = "grey";
ctx.lineWidth = 2.0;
ctx.beginPath();
ctx.moveTo(30, 10);
ctx.lineTo(30, 530);
ctx.lineTo(canWidth - 30, 530);
ctx.stroke();

// Y
for(let i=0; i<10; i++){
    ctx.fillText((10-i)*5,4,i * 50+30)
    ctx.beginPath();
    ctx.moveTo(33,i * 50+30);
    ctx.lineTo(canWidth - 30,i * 50+30);
    ctx.strokeStyle = 'rgb(230, 236, 240)';
    ctx.stroke();
}

// X
for(let i=0; i<48; i++){
    ctx.fillText(i,25*i+30,555)
    ctx.beginPath();
    ctx.moveTo(25*i+30,530);
    ctx.lineTo(25*i+30,535)
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

 fetch('https://api.openweathermap.org/data/2.5/onecall?lat=26.820553&lon=30.802498&units=metric&appid=54e81243d019119b9012a7972cd60df1')
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        let canHeightData = canHeight-30
        let day = 25;
        for(let i=0;i<data.hourly.length;i++){
            let nextDay = i+1
            let temp = data.hourly[i].temp*10
            let nextTemp = data.hourly[i+1].temp*10
            circle([day*i+30, canHeightData - temp], 'rgb(61 194 63)')
            line([day*i+30,canHeightData - temp],[day*nextDay+30,canHeightData - nextTemp],'rgb(61 194 63)')

            let humidity = data.hourly[i].humidity*10
            let nextHumidity = data.hourly[i+1].humidity*10
            circle([day*i+30, canHeightData - humidity], '#F34C44')
            line([day*i+30,canHeightData - humidity],[day*nextDay+30,canHeightData - nextHumidity],'#F34C44')

            let windSpeed = data.hourly[i].wind_speed*10
            let nextWindSpeed = data.hourly[i+1].wind_speed*10
            circle([day*i+30, canHeightData - windSpeed], '#4682b4')
            line([day*i+30,canHeightData -  windSpeed],[day*nextDay+30,canHeightData - nextWindSpeed],'#4682b4')
        }
    })
    .catch(function () {
        // console.log('error');
    });

function circle([x, y], color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.fillStyle = "#fff";
    ctx.arc(x,y,2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function line([x, y], [x2,y2],color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color;
    ctx.stroke();
}
