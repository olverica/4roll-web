import TouchEvent from 'App/Animation/Behaviour/Events/TouchEvent'
import CaptureState from 'App/Animation/Scroll/States/CaptureState'
import {StateBase} from 'App/Animation/Scroll/States/ScrollState'


import MoveEvent from '../../Behaviour/Events/MoveEvent';
import ReleaseEvent from '../../Behaviour/Events/ReleaseEvent';
import ScrollAction from '../Actions/ScrollAction'


export default class StaticState extends StateBase
{
    private action: ScrollAction;

    private previosTouch: number;


    public onStateAttached(): void
    {
        this.action = new ScrollAction(this.scroll.getViewport());
        this.scroll.addAction(this.action);
    }

    public onTouchMove(event: MoveEvent): void
    {
        let delta = -event.fingerAt + this.previosTouch;
        this.previosTouch = event.fingerAt;

        this.scroll.getViewport().addMomentum(delta);
    }

    public onTouchRelease(event: ReleaseEvent): void
    {
        this.scroll.getViewport().stopForward();
    }

    public onTouchStart(event: TouchEvent): void
    {
        this.scroll.getViewport().forward();
        this.previosTouch = event.fingerAt;
    }
}   