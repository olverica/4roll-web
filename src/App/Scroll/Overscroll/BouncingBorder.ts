import Border, {LimitType} from 'App/Scroll/Overscroll/Border'
import ViewportDimenssion from 'App/Scroll/Model/ViewportDimenssion'
import Resistance from 'App/Scroll/Overscroll/Resistance'
import Controls from 'App/Scroll/Behaviour/Controls'


export default class BouncingBorder implements Border
{
    private viewport?: ViewportDimenssion = null;
    
    private resistance: Resistance;
    
    private limitType: LimitType; 
    
    private controls: Controls;
    
    private brekaingPoint: number;
    
    private friction: number;
    
    private momentum: number;


    public constructor(controls: Controls, resistance: Resistance)
    {
        this.controls = controls;
        this.momentum = 0;
        this.friction = 0.2;
        this.brekaingPoint = 0;
        this.resistance = resistance;
    }

    public overscrolled(): number
    {
        return this.momentum;
    }

    public limit(point: number, type: LimitType): void
    {
        this.brekaingPoint = point;
        this.limitType = type;   
    }

    public breaksAt(point: number): boolean
    {
        return this.limitType === LimitType.Greather ?
            point < this.brekaingPoint : 
            point > this.brekaingPoint
    }

    public restrict(viewport: ViewportDimenssion): void
    {           
        if (this.viewport)
            return;

        console.log('GOT IT');
        this.momentum = 0;
        this.resistance.release();
        this.viewport = viewport;
    }

    public update()
    {
        if (!!!this.viewport)
            return;

        this.momentum += (this.getDistance() * this.getFriction() - this.getDamping());
        this.viewport.chanagePosition(this.brekaingPoint);
        
        if (this.momentum < 0)
            this.release()
    }

    private release(): void
    {
        console.log('STOOOP');

        this.viewport.releaseMomentum();
        this.resistance.release();
        this.momentum = 0;
        this.viewport = null;
    }

    private getDamping(): number
    {
        if (this.controls.captured())
            return 0;

        return this.resistance.compute();
    }

    private getDistance(): number
    {
        return (this.brekaingPoint - this.viewport.getPosition()) * -this.limitType;
    }

    private getFriction(): number
    {
        return this.controls.captured() ? this.friction: 1
    }
}