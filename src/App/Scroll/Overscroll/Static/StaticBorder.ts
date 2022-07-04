import ViewportDimenssion from 'App/Scroll/Models/ViewportDimenssion'
import Border, { LimitType } from 'App/Scroll/Overscroll/Border'


export default class StaticBorder implements Border
{
    private viewport?: ViewportDimenssion;
    
    private limitType: LimitType;
    
    private brekaingPoint: number;


    public overscrolled(): number
    {
        return 0;
    }

    public breaksAt(point: number): boolean
    {
        return this.limitType === LimitType.Greather ?
            point < this.brekaingPoint : 
            point > this.brekaingPoint
    }

    public getLimit(): { point: number; type: LimitType; }
    {
        return {
            point: this.brekaingPoint,
            type: this.limitType
        }
    }

    public limit(point: number, type: LimitType): void
    {
        this.brekaingPoint = point;
        this.limitType = type;    
    }
    
    public restrict(viewport: ViewportDimenssion): void
    {           
        if (this.viewport)
            return;

        this.viewport = viewport;
    }

    public update()
    {
        if (!!!this.viewport)
            return;

        this.viewport.chanagePosition(this.brekaingPoint);
        this.viewport = null
    }
}