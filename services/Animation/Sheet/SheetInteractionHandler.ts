import {MovedEvent, TouchedEvent, ReleasedEvent} from '~/services/Animation/Sheet/Behaviour/Events';
import InteractionBehaviour from '~/services/Animation/Sheet/Info/InteractionBehaviour'
import InteractionBoundaries from '~/services/Animation/Sheet/Info/InteractionBoundaries'
import InteractionInfo from '~/services/Animation/Sheet/Info/InteractionInfo'
import ActionHandler from '~/services/Animation/Sheet/Transition/ActionHandler';
import AppeareState from '~/services/Animation/Sheet/States/AppeareState'
import Engine from '~/services/Animation/Sheet/Transition/Engine';


export default class SheetInteractionHandler
{
    private info: InteractionInfo;

    private inited: boolean;

    private transitionEngine: Engine;


    public constructor()
    {
        let actions = new ActionHandler();
        this.transitionEngine = new Engine(60, actions);

        let behaviour = new InteractionBehaviour(actions);
        let boundaries = new InteractionBoundaries({
            closePoint: 844,
            bottomBreak: 200,
            topBreak: 200,
        });

        this.info = new InteractionInfo(boundaries, behaviour);
      
        behaviour.changePosition(boundaries.closeAt());
        // behaviour.changePosition(530);
    }

    public loaded(): boolean
    {
        return this.inited;
    }

    public init(): void
    {
        this.inited = true;
        this.info.changeState(new AppeareState(this.info));
        this.transitionEngine.fire();
    }

    public onTouchMove(event: MovedEvent): void
    {
        this.info.getState().onTouchMove(event);
    }

    public onTouchStart(event: TouchedEvent): void
    {
        this.info.getState().onTouchStart(event);
    }

    public onTouchRelease(event: ReleasedEvent): void
    {
        this.info.getState().onTouchRelease(event);
    }

    public onClose(): void
    {
        this.info.getState().onClose();
    }

    public stateName(): string
    {
        return this.info.getState().getName();
    }
    
    public position(): number
    {
        return this.info.getBehaviour().getPosition();
    }

    public closed(): boolean
    {
        return this.info.isClosed();
    }
}