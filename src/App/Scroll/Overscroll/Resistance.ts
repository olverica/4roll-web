import Setting from 'App/Scroll/Settings/Value/Setting'


export default class Resistance
{
    private acceleration: Setting<number>;

    private value: number;


    constructor(acceleration: Setting<number>)
    {
        this.acceleration = acceleration;
        this.value = 0;
    }
    
    public compute(): number
    {
        this.value += this.acceleration.value();
        return this.value;
    }

    public release(): void
    {
        this.value = 0;
    }
}