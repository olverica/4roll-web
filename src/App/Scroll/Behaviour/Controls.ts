
export default class Controls
{
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
}