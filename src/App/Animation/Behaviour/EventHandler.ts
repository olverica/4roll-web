import ReleaseEvent from 'App/Animation/Behaviour/Events/ReleaseEvent'
import FingerEvent from 'App/Animation/Behaviour/Events/FingerEvent'
import TouchEvent from 'App/Animation/Behaviour/Events/TouchEvent'
import MoveEvent from 'App/Animation/Behaviour/Events/MoveEvent'


export default class EventHandler
{
    private events: FingerEvent[] = [];


    public moved(fingerPosition: number): MoveEvent
    {
        let event = new MoveEvent(fingerPosition, this.events);
        this.events.unshift(event);

        return event;
    }

    public touched(fingerPosition: number): TouchEvent
    {
        let event = new TouchEvent(fingerPosition);
        this.events = [event];

        return event;
    }

    public released(): ReleaseEvent {
        let event = new ReleaseEvent(this.events);
        this.events = [];

        return event;
    }
}