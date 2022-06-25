import {RawEvent} from 'App/Animation/Behaviour/Events/FingerEvent'
import ScrollInteraction from 'App/Scroll/Interaction/ScrollInteraction'
import EventHandler from 'App/Animation/Behaviour/EventHandler'
import {Updatable} from 'App/Animation/Engine/AnimationEngine'


import Viewport from 'App/Scroll/Model/Viewport'
import Boundaries from 'App/Scroll/Overscroll/Boundaries'
import ScrollDTO from 'App/Scroll/Interaction/ScrollDTO'
import SizeObserver from 'App/Scroll/Settings/SizeObserver'


export default class ScrollAggregate implements Updatable
{
    private eventHandler: EventHandler;

    private interactions: ScrollInteraction;

    private boundaries: Boundaries;
    
    private resizer: SizeObserver;
    
    private viewport: Viewport;
    
    private dto: ScrollDTO;

    
    public constructor(resizer: SizeObserver, interactions: ScrollInteraction, viewport: Viewport, boundaris: Boundaries, dto: ScrollDTO)
    {
        this.dto = dto;
        this.resizer = resizer;
        this.viewport = viewport;
        this.boundaries = boundaris;
        this.interactions = interactions;
        this.eventHandler = new EventHandler();
    }

    public onTouchStart(raw: RawEvent): void
    {
        this.eventHandler.touched(raw);
        this.interactions.onTouchStart();
    }

    public onTouchMove(raw: RawEvent): void
    {
        let event = this.eventHandler.moved(raw);
        this.interactions.onTouchMove(event);
    }   

    public onTouchRelease(raw: RawEvent): void
    {
        let event = this.eventHandler.released(raw);
        this.interactions.onTouchRelease(event);
    }   

    public update(deltaTime: number): void
    {
        this.viewport.update();
        this.boundaries.restrict(this.viewport);
        this.boundaries.update();
        
        this.viewport.render(this.dto);
        this.boundaries.render(this.dto);
    }

    public detach(): void
    {
        this.resizer.detach();
    }
}