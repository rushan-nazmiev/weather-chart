// Example api request Class

export class WeatherRequest {
    constructor(options) {
        this.ip = options.ip;
    }

    getResponse(){
        let url = this.ip;
        fetch(url)
            .then(function (resp) {return resp.json() })
            .then(function (data) {
                return data;
                let day = 25;
                for(let i=0;i<data.hourly.length;i++){
                    let nextDay = i+1
                    let temp = data.hourly[i].temp*10
                    let nextTemp = data.hourly[i+1].temp*10
                    this.apiChart.circle(day*i+30,this.heightOffset - temp,2,'rgb(61 194 63)','#fff');
                    this.apiChart.line(day*i+30,this.heightOffset - temp,day*nextDay+30,this.heightOffset - nextTemp,'rgb(61 194 63)')
                }
            })
            .catch(function () {
                // console.log('error');
            });
    }
}