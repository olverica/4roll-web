import InteractionBehaviour from '~/services/Animation/Sheet/Info/InteractionBehaviour'
import InteractionBoundaries from '~/services/Animation/Sheet/Info/InteractionBoundaries'
import InteractionInfo from '~/services/Animation/Sheet/Info/InteractionInfo'
import ActionHandler from '~/services/Animation/Sheet/Transition/ActionHandler';
import EventHandler from '~/services/Animation/Sheet/Behaviour/EventHandler'
import AppeareState from '~/services/Animation/Sheet/States/AppeareState'
import Engine from '~/services/Animation/Sheet/Transition/Engine';
import SheetDTO from '~/services/Animation/Sheet/SheetDTO';


export default class SheetInteractionHandler
{
    private eventHandler: EventHandler;
    
    private transitionEngine: Engine;
    
    private info: InteractionInfo;


    public constructor(dto: SheetDTO, boundaries: InteractionBoundaries)
    {
        let actions = new ActionHandler();
        this.transitionEngine = new Engine(60, actions);
        this.eventHandler = new EventHandler();
        
        let behaviour = new InteractionBehaviour(actions, dto);
        this.info = new InteractionInfo(boundaries, behaviour, dto);
        this.info.changeState(new AppeareState(this.info));
        
        this.transitionEngine.fire();
    }

    public onTouchMove(fingerAt: number): void
    {
        let event = this.eventHandler.moved(fingerAt);

        this.info.getState()
            .onTouchMove(event);
    }

    public onTouchStart(fingerAt: number): void
    {
        let event = this.eventHandler.touched(fingerAt);

        this.info.getState()
            .onTouchStart(event);
    }

    public onTouchRelease(fingerAt: number): void
    {
        let event = this.eventHandler.released(fingerAt);

        this.info.getState()
            .onTouchRelease(event);
    }

    public onClose(): void
    {
        this.info.getState().onClose();
    }
}