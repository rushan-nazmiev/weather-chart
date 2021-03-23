import {DrawCanvas} from '../src/draw.canvas'

export class InitCanvas {
    constructor(random) {
        this.canvas = new DrawCanvas('canvas');
        this.random = random;
        this.baseMaxVal = [];
        this.chartHeight = this.canvas.canHeight-60;
        this.slider = document.getElementById("myRange");
        this.view = document.getElementById("view");
    }

    init(){
        for(let i=1;i<=3;i++){
            this.baseMaxVal.push(Math.max.apply(null,this.random[i]));
        }
        let maxVal = Math.max.apply(null,this.baseMaxVal);
        let ratio = this.chartHeight/maxVal;
        this.canvas.drawCanvas(maxVal);
        this.canvas.drawChart(100,1200,this.random[1],ratio,'rgb(61 194 63)');
        this.canvas.drawChart(100,1200,this.random[2],ratio,'#F34C44');
        this.canvas.drawChart(100,1200,this.random[3],ratio,'#4682b4');
        this.slider.addEventListener('input', e => {
            this.canvas.clearChart();
            this.canvas.drawCanvas(maxVal);
            this.view.innerHTML = e.target.value;
            let step = e.target.value;
            this.canvas.drawChart(step,1200,this.random[1],ratio,'rgb(61 194 63)');
            this.canvas.drawChart(step,1200,this.random[2],ratio,'#F34C44');
            this.canvas.drawChart(step,1200,this.random[3],ratio,'#4682b4');
        })
    }

}

