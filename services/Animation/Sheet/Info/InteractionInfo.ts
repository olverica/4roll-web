import InteractionBoundaries from '~/services/Animation/Sheet/Info/InteractionBoundaries'
import InteractionBehaviour from '~/services/Animation/Sheet/Info/InteractionBehaviour'
import SheetState from '~/services/Animation/Sheet/States/State'


export default class InteractionInfo
{
    private boundaries: InteractionBoundaries;

    private behaviour: InteractionBehaviour;
    
    private state?: SheetState;
    
    private closed: boolean;


    public constructor(boundaries: InteractionBoundaries, behaviour: InteractionBehaviour)
    {
        this.state = null;
        this.boundaries = boundaries;
        this.behaviour = behaviour;
    }

    public getBehaviour(): InteractionBehaviour 
    {
        return this.behaviour;
    }

    public getBoundaries(): InteractionBoundaries
    {
        return this.boundaries;
    }
    
    public markClosed(): void
    {
        this.closed = true;
    }

    public isClosed(): boolean
    {
        return this.closed;
    }

    public changeState(state: SheetState): void
    {
        console.log('CHANGING TO', state.constructor.name);
        this.state = state;
    }

    public getState(): SheetState
    {
        if (this.state === null)
            throw new Error('State isn`t initialized');

        return this.state;
    }
}