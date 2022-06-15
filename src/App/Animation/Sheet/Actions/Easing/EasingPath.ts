
export default class EasingPath
{
    private toPosition: number;

    private fromPosition: number;


    public constructor(from: number, to: number)
    {
        this.fromPosition = from;
        this.toPosition = to;
    }

    public difference(): number
    {
        return this.toPosition - this.fromPosition;
    }

    public distance(): number
    {
        return Math.abs(this.fromPosition - this.toPosition);
    }

    public from(): number
    {
        return this.fromPosition;
    }

    public to(): number
    {
        return this.toPosition;
    }
}