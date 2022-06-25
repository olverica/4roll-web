import ScrollDTO from 'App/Scroll/Interaction/ScrollDTO'


export interface Log
{
    position: number
    timeStep: number;
}


export default class ScrollGraph
{
    private canvas: HTMLCanvasElement;

    private logs: Log[] = [];

    private dto: ScrollDTO;

    private height: number = 300;
    
    private width: number = 300;

    private timeModifier: number = 0.1;


    public constructor(element: HTMLElement, dto: ScrollDTO)
    {
        this.dto = dto;
        this.canvas = document.createElement('canvas') as HTMLCanvasElement;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        element.appendChild(this.canvas);
    }

    public push(time: number)
    {
        this.logs.unshift({
            position: this.dto.viewport.y + this.dto.borders.top - this.dto.borders.bottom, 
            timeStep: time
        });

        for (let i = 0, x = 0; i < this.logs.length; i++)
        {
            x += this.logs[i].timeStep * this.timeModifier;
            if (x < this.width)
                continue;

            this.logs.splice(i, this.logs.length - i);
            return;
        }
    }

    public update(time: number)
    {
        this.clear();
        this.push(time);
        this.draw();
    }

    private draw(): void
    {
     
        let {max, min} = this.borders();
        let ctx = this.canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(0, 0);

        let x = 0;
        let y = 0;
        for (let {position, timeStep} of this.logs) {
            y = (position - min) * this.height / Math.abs(max - min);

            ctx.lineTo(x, y);
            x += timeStep * this.timeModifier;
        }

        ctx.strokeStyle = 'green';
        ctx.lineWidth = 2.5;
        ctx.stroke();
    }

    private borders(): {min: number, max: number}
    {
        let max = this.logs[0].position;
        let min = max;

        for (let {position} of this.logs) {
            if (position > max)
                max = position;

            if (position < min)
                min = position;
        }

        return {min, max};
    }


    private clear()
    {
        let ctx = this.canvas.getContext("2d");
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, this.width, this.height);
    }
}