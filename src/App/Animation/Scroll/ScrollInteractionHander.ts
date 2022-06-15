import InteractionInfo from 'App/Animation/Scroll/Info/InteractionContext'
import ActionHandler from 'App/Animation/Transition/ActionHandler'
import EventHandler from 'App/Animation/Behaviour/EventHandler'
import StaticState from 'App/Animation/Scroll/States/StaticState'
import {Updatable} from 'App/Animation/Engine/AnimationEngine'
import Viewport from 'App/Animation/Scroll/Viewport'


export default class ScrollInteractionHandler implements Updatable
{
    private info: InteractionInfo;

    private actions: ActionHandler;

    private eventHandler: EventHandler;

    
    public constructor(viewport: Viewport)
    {
        this.actions = new ActionHandler();
        this.eventHandler = new EventHandler();

        this.info = new InteractionInfo(viewport, this.actions);
        this.info.changeState(new StaticState(this.info));
    }

    public onTouchStart(fingerAt: number): void
    {
        let event = this.eventHandler.touched(fingerAt);

        this.info.getState()
            .onTouchStart(event);
    }

    public onTouchMove(fingerAt: number): void
    {
        let event = this.eventHandler.moved(fingerAt);

        this.info.getState()
            .onTouchMove(event);
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
}