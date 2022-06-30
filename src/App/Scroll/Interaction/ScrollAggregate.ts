import SizeObserver from 'App/Scroll/Settings/SizeObserver'
import EventHandler from 'App/Animation/Behaviour/EventHandler'
import {Updatable} from 'App/Animation/Engine/AnimationEngine'
import ScrollDTO from 'App/Scroll/Interaction/ScrollDTO'
import Scroll from 'App/Scroll/Models/Scroll'


export default class ScrollAggregate implements Updatable
{
    private eventHandler: EventHandler;

    private resizer: SizeObserver;
    
    private scroll: Scroll;
    
    private dto: ScrollDTO;

    
    public constructor(resizer: SizeObserver, scroll: Scroll, dto: ScrollDTO)
    {
        this.dto = dto;
        this.scroll = scroll;
        this.resizer = resizer;
        this.eventHandler = new EventHandler();
    }

    public onTouchStart(raw: TouchEvent): void
    {
        this.eventHandler.fingerTouch(raw);
        this.scroll.touch();
    }   

    public onTouchMove(raw: TouchEvent): void
    {
        let event = this.eventHandler.fingerMove(raw);
        this.scroll.touchMove(event);
    }   

    public onTouchRelease(raw: TouchEvent): void
    {
        let event = this.eventHandler.fingerRelease(raw);
        this.scroll.touchRelease(event);
    }   

    public onWheelSpin(raw: WheelEvent): void
    {
        this.scroll.wheelSpin(raw);
    }   

    public update(deltaTime: number): void
    {
        this.scroll.update(deltaTime);
        this.scroll.render(this.dto);
    }

    public detach(): void
    {
        this.resizer.detach();
    }
}