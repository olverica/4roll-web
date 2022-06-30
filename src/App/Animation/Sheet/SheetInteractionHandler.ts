import InteractionBehaviour from 'App/Animation/Sheet/Info/InteractionBehaviour'
import InteractionBoundaries from 'App/Animation/Sheet/Info/InteractionBoundaries'
import InteractionInfo from 'App/Animation/Sheet/Info/InteractionInfo'
import ActionHandler from 'App/Animation/Transition/ActionHandler'
import AppeareState from 'App/Animation/Sheet/States/AppeareState'
import EventHandler from 'App/Animation/Behaviour/EventHandler'
import {Updatable} from 'App/Animation/Engine/AnimationEngine'
import SheetDTO from 'App/Animation/Sheet/SheetDTO'


export default class SheetInteractionHandler implements Updatable
{
    private eventHandler: EventHandler;
    
    private actions: ActionHandler;
    
    private info: InteractionInfo;


    public constructor(dto: SheetDTO, boundaries: InteractionBoundaries)
    {
        this.actions = new ActionHandler();
        this.eventHandler = new EventHandler();
        
        let behaviour = new InteractionBehaviour(this.actions, dto);
        this.info = new InteractionInfo(boundaries, behaviour, dto);
        this.info.changeState(new AppeareState(this.info));
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

    public onTouchRelease(): void
    {
        let event = this.eventHandler.released();

        this.info.getState()
            .onTouchRelease(event);
    }

    public update(deltaTime: number): void
    {
        this.actions.update(deltaTime);
    }

    public onClose(): void
    {
        this.info.getState().onClose();
    }
}