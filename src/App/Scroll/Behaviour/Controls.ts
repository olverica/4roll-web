import Vector2D from 'App/Animation/Types/Vector2D'
import Setting from 'App/Scroll/Settings/Value/Setting'


class Pointer
{
    private captured: boolean = false;


    public forwarding(): boolean
    {
        return this.captured;
    }

    public capture(): void
    {
        this.captured = true;
    }

    public drop(): void
    {
        this.captured = false;
    }
}

export default class Controls
{
    private releasModifier: Setting<number>;

    private velocityLimit: Setting<number>;
    
    private spinModifier: Setting<number>;

    private pointerHandler: Pointer;


    public constructor(releasModifier: Setting<number>, spinModifier: Setting<number>, velocityLimit: Setting<number>)
    {
        this.releasModifier = releasModifier;
        this.velocityLimit = velocityLimit;
        this.spinModifier = spinModifier;
        this.pointerHandler = new Pointer();
    }

    public pointer(): Pointer
    {
        return this.pointerHandler 
    }

    public momentumFromSpin(delta: Vector2D)
    {
        return {
            x: this.limit(delta.x * this.spinModifier.value()),
            y: this.limit(delta.y * this.spinModifier.value())
        };
    }

    public momentumFromRelease(velocity: Vector2D): Vector2D
    {
        return {
            y: this.limit(-velocity.y * this.releasModifier.value()),
            x: this.limit(-velocity.x * this.releasModifier.value())
        }
    }

    private limit(value: number): number
    {
        if (Math.abs(value) <= this.velocityLimit.value())
            return value;

        return value < 0 ? -this.velocityLimit.value() 
            : this.velocityLimit.value();
    }
}