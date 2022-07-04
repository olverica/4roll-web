import ScrollDTO from 'App/Scroll/Interaction/ScrollDTO'
import Vector2D from 'App/Animation/Types/Vector2D'
import Setting from 'App/Scroll/Settings/Value/Setting'
import Size from 'App/Animation/Types/Size'
import { createNuxtApp } from 'nuxt3/dist/app/nuxt'


export interface Log
{
    position: number
    timeStep: number;
}

export interface GraphColors
{
    stroke: string;
    background: string;
    gradient: string;
}

export default class ScrollGraph
{
    private canvas: HTMLCanvasElement;

    private timeSkip: Setting<number>;
    
    private colors: GraphColors;
    
    private dto: ScrollDTO;
    
    private size: Size;
    
    private logs: Log[];


    private path: any[] = [];

    public constructor(element: HTMLCanvasElement, dto: ScrollDTO, colors: GraphColors, timeSkip: Setting<number>)
    {
        this.size = {height: 300, width: 300};
        this.timeSkip = timeSkip;
        this.colors = colors;
        this.logs = [];
        this.dto = dto;

        this.canvas = element;
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;

        let canvas = (document.querySelector('#asd') as any);

        canvas.height = 500;
        canvas.width = 500;
    }

    public push(time: number)
    {
        this.logs.unshift({
            position: this.dto.viewport.y + this.dto.borders.top - this.dto.borders.bottom, 
            timeStep: time
        });

        for (let i = 0, x = 0; i < this.logs.length; i++)
        {
            x += this.logs[i].timeStep * this.timeSkip.value();
            if (x < this.size.width * 1.1)
                continue;

            this.logs.splice(i, this.logs.length - i);
            return;
        }
    }

    public update(time: number)
    {
        if (window['viewport']) 
        {
            window['path'].push({position: window['viewport'].position, momentum: window['viewport'].momentum })
            let some = (document.querySelector('#asd') as any);

            let ctx = some.getContext('2d')
            let width = 500;
            let height = 500;

            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, width, height);

            ctx.beginPath();
            let i = 0;
            ctx.moveTo(i, height- window['path'][0].momentum/ 3);
            for (let {momentum, position} of window['path']) {
                i++;
                ctx.lineTo(i, height-  momentum / 3);
            }


            ctx.strokeStyle = 'green';
            ctx.stroke();

            ctx.beginPath();
            i = 0;
            ctx.moveTo(i, height- window['path'][0].position/ 3);
            for (let {momentum, position} of window['path']) {
                i++;
                ctx.lineTo(i, height-  position / 3);
                }


            ctx.strokeStyle = 'blue';
            ctx.stroke();
        }

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
            x += timeStep * this.timeSkip.value();
        }

        this.drawGrarient(path);
        this.drawLine(path);
    }

    private drawLine(path: Vector2D[]): void
    {
        if (!!!path.length)
            return;

        let ctx = this.canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);

        for (let {x, y} of path.slice(1))
            ctx.lineTo(x, y)

        ctx.strokeStyle =this.colors.stroke;
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    private drawGrarient(path: Vector2D[]): void
    {
        let ctx = this.canvas.getContext('2d');
        let gradient = ctx.createLinearGradient(0 ,0, 0, 300);

        gradient.addColorStop(0, this.colors.gradient);
        gradient.addColorStop(1, this.colors.background);

        ctx.fillStyle = gradient;
        ctx.fillRect(0 , 0, this.size.width, this.size.height);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        for (let {x, y} of path)
            ctx.lineTo(x, y)

        ctx.fillStyle = this.colors.background;

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
        ctx.fillStyle = this.colors.background;
        ctx.fillRect(0, 0, this.size.width, this.size.height);
    }
}