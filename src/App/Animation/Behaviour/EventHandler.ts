import AnimationTouchEvent from 'App/Animation/Behaviour/Events/Touch/TouchEvent'
import FingerRelease from 'App/Animation/Behaviour/Events/Finger/FingerRelease'
import FingerCapture from 'App/Animation/Behaviour/Events/Finger/FingerCaputre'
import FingerMove from 'App/Animation/Behaviour/Events/Finger/FingerMove'
import MouseRelease from 'App/Animation/Behaviour/Events/Mouse/MouseRelease'
import MouseClick from 'App/Animation/Behaviour/Events/Mouse/MouseClick'
import MouseMove from 'App/Animation/Behaviour/Events/Mouse/MouseMove'


export default class EventHandler
{
    private events: AnimationTouchEvent[] = [];

    public fingerTouch(raw: TouchEvent): AnimationTouchEvent
    {
        let event = new FingerCapture(raw);
        this.events.unshift(event)

        return event;
    }

    public fingerMove(raw: TouchEvent): FingerMove
    {
        let event = new FingerMove(raw, this.lastEvent());
        this.events.unshift(event)

        return event;
    }

    public fingerRelease(raw: TouchEvent): FingerRelease
    {
        let event = new FingerRelease(raw, this.lastEvent(), this.events);
        this.events = [];

        return event;
    }

    public ended(): boolean
    {
        return !!!this.events.length;
    }

    private lastEvent(): AnimationTouchEvent
    {   
        if (this.events.length)
            return this.events[0];

        throw Error('Array is empty');
    }
}