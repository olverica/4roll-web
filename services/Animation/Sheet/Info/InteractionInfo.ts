import InteractionBoundaries from '~/services/Animation/Sheet/Info/InteractionBoundaries'
import InteractionBehaviour from '~/services/Animation/Sheet/Info/InteractionBehaviour'
import SheetState from '~/services/Animation/Sheet/States/State'
import SheetDTO from '~/services/Animation/Sheet/SheetDTO';


export default class InteractionInfo
{
    private boundaries: InteractionBoundaries;

    private behaviour: InteractionBehaviour;
    
    private state?: SheetState;
    
    private dto: SheetDTO;


    public constructor(boundaries: InteractionBoundaries, behaviour: InteractionBehaviour, dto: SheetDTO)
    {
        this.state = null;
        this.boundaries = boundaries;
        this.behaviour = behaviour;
        this.dto = dto;
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
        this.dto.changeClosed(true);
    }

    public changeState(state: SheetState): void
    {
        console.log('CHANGING TO', state.constructor.name);
        this.state = state;
        this.dto.changeState(state.getName());
    }

    public getState(): SheetState
    {
        if (this.state === null)
            throw new Error('State isn`t initialized');

        return this.state;
    }
}