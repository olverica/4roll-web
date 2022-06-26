import Vector2D from 'App/Animation/Types/Vector2D'


export default class Controls
{
    private releasModifier: number = -500;

    private spinModifier: number = 2;

    private velocityLimit: number = 4;

    private forwarding: boolean = false;


    public captured(): boolean
    {
        return this.forwarding 
    }
    
    public forward(): void
    {
        this.forwarding = true;
    }

    public drop(): void
    {
        this.forwarding = false;
    }

    public momentumFromSpin(delta: Vector2D)
    {
        return {
            x: delta.x * this.spinModifier,
            y: delta.y * this.spinModifier
        };
    }

    public momentumFromRelease(velocity: Vector2D): Vector2D
    {
        return {
            y: this.limit(velocity.y) * this.releasModifier,
            x: this.limit(velocity.x) * this.releasModifier
        }
    }

    private limit(value: number): number
    {
        if (Math.abs(value) <= this.velocityLimit)
            return value;

        return value < 0 ? -this.velocityLimit : this.velocityLimit;
    }
}