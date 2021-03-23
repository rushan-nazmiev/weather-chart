export class BaseAxis{

    constructor(ctx,x,y,x2,y2){
        this.ctx = ctx;
        this.x= x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
        this.fillStyle = "grey";
        this.lineWidth = 2;
    }
    drawBaseAxis(){
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.x, this.y2);
        this.ctx.lineTo(this.x2, this.y2);
        this.ctx.strokeStyle = '#000';
        this.ctx.stroke();
    }
    drawYAxis(partheight,maxVal,x,x2,strokeStyle){
        let step = maxVal/partheight;
        let stepSize = 500/partheight;
        for(let i=0; i<partheight; i++){
            this.ctx.fillText(Math.round((partheight-i)*step),4,i * stepSize+30);
            this.ctx.beginPath();
            this.ctx.moveTo(x,i * stepSize+30);
            this.ctx.lineTo(x2,i * stepSize+30);
            this.ctx.strokeStyle = strokeStyle;
            this.ctx.stroke();
        }

    }
    drawXAxis(forCount,strokeStyle){
        for(let i=0; i<forCount; i++){
            this.ctx.fillText(i,25*i+30,555)
            this.ctx.beginPath();
            this.ctx.moveTo(25*i+30,530);
            this.ctx.lineTo(25*i+30,535)
            this.ctx.strokeStyle = strokeStyle;
            this.ctx.stroke();
        }
    }
}
