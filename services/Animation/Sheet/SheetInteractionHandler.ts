import {MovedEvent, TouchedEvent, ReleasedEvent} from '~/services/Animation/Sheet/Behaviour/Events';
import InteractionBehaviour from '~/services/Animation/Sheet/Info/InteractionBehaviour'
import InteractionBoundaries from '~/services/Animation/Sheet/Info/InteractionBoundaries'
import InteractionInfo from '~/services/Animation/Sheet/Info/InteractionInfo'
import MovingSpeed from '~/services/Animation/Sheet/Behaviour/MovingSpeed'
import StaticState from '~/services/Animation/Sheet/States/StaticState'


export default class SheetInteractionHandler
{
    private info: InteractionInfo;


    public constructor()
    {
        let behaviour = new InteractionBehaviour(new MovingSpeed(1, 1));
        let boundaries = new InteractionBoundaries({
            closePoint: 844,
            bottomBreak: 200,
            topBreak: 200,
        });

        this.info = new InteractionInfo(boundaries, behaviour);
        this.info.changeState(new StaticState(this.info));
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

    public affectedTo(): number
    {
        return this.info.getBoundaries().affectedTo();
    }
    
    public position(): number
    {
        return this.info.getBehaviour().getPosition();
    }

    public smooth(): boolean
    {
        return this.info.getBehaviour().isSmooth();
    }

    public delay(): number
    {
        return this.info.getBehaviour().getDelay();
    }

    public closed(): boolean
    {
        return this.info.getBehaviour().isClosed();
    }
}