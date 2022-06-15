import Viewport from 'App/Animation/Scroll/Viewport'


export default class BoundingBorders
{
    public overscrolled = {
        x: 0,
    };


    private borders = {
        top: 0,
        bottom: 844
    }


    public bumpInto({border, momentum}: {border: string, momentum: number}): number
    {
        this.overscrolled.x = Math.sqrt(Math.abs(momentum * 100)) * (momentum < 0 ? -1 : 1);

        return momentum;    
    }

    public top(): number {
        return this.borders.top;
    }

    public bottom(): number {
        return this.borders.bottom;
    }

    public getOverscrolled() {
        return this.overscrolled;
    }
}