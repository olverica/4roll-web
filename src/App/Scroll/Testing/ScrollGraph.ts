import ScrollDTO from 'App/Scroll/Interaction/ScrollDTO'
import Vector2D from 'App/Animation/Types/Vector2D'
import Size from 'App/Animation/Types/Size'


export interface Log
{
    position: number
    timeStep: number;
}


export default class ScrollGraph
{
    private canvas: HTMLCanvasElement;

    private dto: ScrollDTO;
    
    private size: Size;
    
    private logs: Log[];

    private timeModifier;


    public constructor(element: HTMLElement, dto: ScrollDTO)
    {
        this.size = {height: 300, width: 300};
        this.timeModifier = 0.2;
        this.logs = [];
        this.dto = dto;

        this.canvas = document.createElement('canvas') as HTMLCanvasElement;
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;
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
            if (x < this.size.width * 1.1)
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
        let path: Vector2D[] = [];
        let {max, min} = this.borders();
        let x = 0;
        let y = 0;

        for (let {position, timeStep} of this.logs)
        {
            let distance = Math.abs(max - min);
            y = distance !== 0 ? 
                this.size.height - (position - min) * this.size.height / distance:
                this.size.height; 

            path.push({x, y})
            x += timeStep * this.timeModifier;
        }

        this.drawGrarient(path);
        this.drawLine(path);
    }

    private drawLine(path: Vector2D[]): void
    {
        let ctx = this.canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(0, 0);

        for (let {x, y} of path)
            ctx.lineTo(x, y)

        ctx.strokeStyle = '#54BAB9';
        ctx.lineWidth = 2.5;
        ctx.stroke();
    }

    private drawGrarient(path: Vector2D[]): void
    {
        let ctx = this.canvas.getContext('2d');
        let gradient = ctx.createLinearGradient(0 ,0, 0, 300);

        gradient.addColorStop(0, '#54bab9');
        gradient.addColorStop(0.46, '#bceeee');
        gradient.addColorStop(1, '#fff');
        ctx.fillStyle = gradient;
        ctx.fillRect(0 , 0, this.size.width, this.size.height);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        for (let {x, y} of path)
            ctx.lineTo(x, y)

        ctx.fillStyle = 'white';
        ctx.lineTo(this.size.width, 0);
        ctx.lineTo(0, 0);
        ctx.fill();
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
        ctx.fillRect(0, 0, this.size.width, this.size.height);
    }
}