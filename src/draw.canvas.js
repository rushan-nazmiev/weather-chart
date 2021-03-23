import {BaseAxis} from "./base.axis";
import {LineChart} from './charts/line.chart'


export class DrawCanvas {
    constructor(canvasid){
        this.canvasId = canvasid;
        this.canvas = document.getElementById(this.canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.canWidth = this.canvas.width;
        this.canWidthOffset = this.canWidth - 30;
        this.canHeight = this.canvas.height;
        this.canHeightOffset = this.canHeight-30;
        this.chart = new LineChart(this.canvas,this.ctx);
        this.baseAxis = new BaseAxis(this.ctx,30,10,this.canWidthOffset,530);
    }
    drawCanvas(maxVal){
        this.baseAxis.drawBaseAxis();
        this.baseAxis.drawYAxis(5,maxVal,33,this.canWidthOffset,'rgb(230, 236, 240)');
        this.baseAxis.drawXAxis(48,'#000');
    }
    drawChart(xStep,xCount,yArray,ratio,color){
        for(let i=0;i<xCount;i++){
            let next = i+1;
            this.chart.circle(i*xStep+30,this.canHeightOffset - (yArray[i])*ratio,2,color,'#fff');
            this.chart.line(i*xStep+30,this.canHeightOffset - (yArray[i])*ratio,next*xStep+30,this.canHeightOffset - (yArray[next])*ratio,color)

        }
    }
    clearChart(){
        this.ctx.clearRect(0,0,this.canWidth,this.canHeightOffset);
    }

}