export class LineChart {
    constructor(canvas,ctx) {
        this.ctx = ctx;
        this.canvas = canvas;
    }

    circle(x,y,radius,colorStroke,colorFill) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = colorStroke;
        this.ctx.fillStyle = colorFill;
        this.ctx.arc(x,y,radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();


    }
    line(x, y, x2,y2,color) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineWidth = 0;
        this.ctx.lineTo(x2, y2)
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    }

}