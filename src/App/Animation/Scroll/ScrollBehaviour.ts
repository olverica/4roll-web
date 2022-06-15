
export default class ScrollBehaviour
{
    private speed: number = 0;

    private resistance: number = 0.0055;


    public stopped(): boolean
    {
        return this.speed === 0;
    }

    public setSpeed(value: number): void
    {
        this.speed = value;
    }

    public getSpeed(): number
    {
        return this.speed;
    }

    public slowBy(time: number): void
    {
        let reductionValue = this.resistance * time;

        this.reduceSpeedBy(reductionValue);
    }

    private reduceSpeedBy(value: number): void
    {
        let diracetion = this.speed > 0 ? -1 : 1;

        this.speed += value * diracetion;
        if (this.speed * diracetion > 0)
            this.speed = 0;
    }
}