import Action from 'App/Animation/Transition/Action'


export type ResolveCallback = () => void;


export default abstract class ResolvingAction implements Action
{
    protected stopped: boolean;

    private resolve: ResolveCallback;

    
    public abstract update(time: number): void;


    public constructor(resolve: ResolveCallback)
    {
        this.stopped = false;
        this.resolve = resolve;
    }

    public ended(): boolean
    {
        return this.stopped;
    }

    public stop(): void
    {
        this.stopped = true;
        this.resolve();
    }
}