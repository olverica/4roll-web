import BoundingBorders from './BoundingBorders'

export default class Viewport
{
    private position: number = 0;

    private momentum: number = 0;

    private damping: number = 0.05;

    private forwarding: boolean = false;

    private borders: BoundingBorders;


    constructor(borders: BoundingBorders) {
        this.borders = borders;
    }


    public update(time: number): void
    {
        if (this.momentum === 0)
            return;

        let damping = this.forwarding ? 0 : (1 - this.damping);

        let nextMomentum =  this.momentum * damping;
        if (Math.abs(this.momentum) > 0 && Math.abs(this.momentum) < 0.1)
            nextMomentum = 0;   

        let nextPosition = this.position + this.momentum - nextMomentum;

        if (nextPosition < this.borders.top()) {
            nextPosition = this.borders.top();
            nextMomentum += this.position - this.borders.top()

            console.log(nextPosition);
        }   

   

        this.position = nextPosition;
        this.momentum = nextMomentum;

        if (!!!this.forwarding)
            console.log(this.momentum);


        // if (this.position === this.borders.top())
        //     this.momentum = this.borders.bumpInto({border: 'top', momentum: this.momentum})
    }

    public forward(): void
    {
        this.forwarding = true;
    }

    public stopForward() :void
    {
        this.forwarding = false;
        console.log('DROOOP');
    }

    public addMomentum(momentun: number): void
    {
        console.log('add', momentun);
        this.momentum += momentun;
    }

    public getPosition(): number
    {
        return this.position;
    }
}