
export default class Resistance
{
    private acceleration: number;

    private value: number;


    constructor(acceleration: number)
    {
        this.acceleration = acceleration;
        this.value = 0;
    }
    
    public compute(): number
    {
        this.value += this.acceleration;
        return this.value;
    }

    public release(): void
    {
        this.value = 0;
    }
}