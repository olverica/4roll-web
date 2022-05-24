import MovingSpeed from '~/services/Animation/Sheet/Behaviour/MovingSpeed'


export default class InteractionBehaviour
{
    private smoothSpeed: MovingSpeed
    
    private position: number;
    
    private smooth: boolean;
    
    private closed: boolean;
    
    private delay: number;


    public constructor(smoothSpeed: MovingSpeed)
    {
        this.smoothSpeed = smoothSpeed;
        this.position = 0;
        this.delay = 0;
        this.closed = false;
        this.smooth= false;
    }

    public smoothMoveTo(newPosition: number, speed?: MovingSpeed): void
    {

        let chosenSpeed = speed || this.smoothSpeed;
        let distance = Math.abs(this.position - newPosition);

        this.smooth = true;
        this.delay = chosenSpeed.computeTime(distance);
        this.position = newPosition;
    }
    
    public changePosition(value: number): void
    {
        this.position = value;
    }

    public getPosition(): number
    {
        return this.position;
    }

    public makeSmooth(): void
    {
        this.smooth = true;
    }

    public makeRough(): void
    {
        this.smooth = false;
    }

    public markClosed(): void
    {
        this.closed = true;
    }

    public isClosed(): boolean
    {
        return this.closed;
    }

    public isSmooth(): boolean
    {
        return this.smooth;
    }

    public getDelay(): number
    {
        return this.delay;
    }
}
