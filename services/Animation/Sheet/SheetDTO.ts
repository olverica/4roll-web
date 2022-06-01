
export default class SheetDTO
{
    private position: number = 0;

    private closed: boolean = false;

    private state: string = 'none';

    private delay: number = 0;


    public changePosition(position: number): void
    {
        this.position = position;
    }

    public changeClosed(value: boolean): void
    {
        this.closed = value;
    }

    public changeState(name: string): void
    {
        this.state = name;
    }

    public changeDelay(value: number): void
    {
        this.delay = value;
    }

    public getPosition(): number
    {
        return this.position;
    }

    public isClosed(): boolean
    {
        return this.closed;
    }

    public getState(): string
    {
        return this.state;
    }

    public getDelay(): number
    {
        return this.delay;
    }
}