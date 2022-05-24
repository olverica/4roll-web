

export default class MovingSpeed
{
    private value: number;


    public constructor(px: number, ms: number)
    {
        this.value = ms !== 0 ? px/ms : 0;
    } 

    public getValue(): number
    {
        return this.value;
    }

    public computeTime(px: number): number
    {
        return this.value !== 0 ? px / this.value : 0; 
    }
}