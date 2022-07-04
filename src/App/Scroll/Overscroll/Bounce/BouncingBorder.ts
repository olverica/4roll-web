import Border, {LimitType} from 'App/Scroll/Overscroll/Border'
import ViewportDimenssion from 'App/Scroll/Models/ViewportDimenssion'
import Resistance from 'App/Scroll/Overscroll/Bounce/Resistance'
import Friction from 'App/Scroll/Overscroll/Bounce/Friction'
import Controls from 'App/Scroll/Behaviour/Controls'


export default class BouncingBorder implements Border
{
    private viewport?: ViewportDimenssion;
    
    private limitType: LimitType; 
    
    private controls: Controls;

    private brekaingPoint: number;
    
    private momentum: number;

    private position: number = 0;

    private friction: Friction;

    private resistance: Resistance;


    public constructor(controls: Controls, resistance: Resistance, friction: Friction)
    {
        this.momentum = 0;
        this.viewport = null;
        this.brekaingPoint = 0;
        this.controls = controls;
        this.friction = friction;
        this.resistance = resistance;
    }

    public overscrolled(): number
    {
        return this.position;
    }

    public limit(point: number, type: LimitType): void
    {
        this.brekaingPoint = point;
        this.limitType = type;   
    }

    public getLimit(): { point: number; type: LimitType; }
    {
        return {
            point: this.brekaingPoint,
            type: this.limitType
        }
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


        // window['path'] = []
        // window['viewport'] = this;

        this.position = 1;
        this.viewport = viewport;
        this.momentum = Math.floor(this.eatMomentum() * this.limitType);

    }

    public update(deltaTime: number)
    {
        if (!!!this.viewport)
            return;

        let absorbed = this.eatMomentum();
        if (absorbed)
            this.momentum += Math.floor(absorbed * this.limitType);

        
        if (this.controls.pointer().forwarding())
        {
            this.position -= absorbed * this.limitType;
            this.momentum -= absorbed * 10 * this.limitType;
        }
        else
        {
            let nextMomentum  = Math.floor(this.resistance.mutate(this.momentum));
            this.position = Math.floor(this.resistance.mutate(this.momentum - nextMomentum));
            this.momentum = nextMomentum;
        }

        if (this.position <= 0)
            this.release();
    }

    private eatMomentum(): number 
    {
        let position = this.viewport.getPosition();
        let moved = this.brekaingPoint - position;

        let absorbed = this.viewport.releaseMomentum();
        this.viewport.chanagePosition(this.brekaingPoint);

        return this.friction.mutate(absorbed + moved);
    }

    private release(): void
    {
        window['viewport'] = null;
        console.log('STOOOP');

        this.viewport.releaseMomentum();
        this.momentum = 0;
        this.viewport = null;
    }
}