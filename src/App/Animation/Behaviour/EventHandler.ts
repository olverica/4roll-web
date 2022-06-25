import FingerEvent, {RawEvent} from 'App/Animation/Behaviour/Events/FingerEvent'
import ReleaseEvent from 'App/Animation/Behaviour/Events/ReleaseEvent'
import TouchEvent from 'App/Animation/Behaviour/Events/TouchEvent'
import MoveEvent from 'App/Animation/Behaviour/Events/MoveEvent'


export default class EventHandler
{
    private events: FingerEvent[] = [];


    public touched(raw: RawEvent): TouchEvent
    {
        let event = new TouchEvent(raw);
        this.events = [event];

        return event;
    }

    public moved(raw: RawEvent): MoveEvent
    {
        let event = new MoveEvent(raw, this.lastEvent());
        this.events.unshift(event);

        return event;
    }

    public released(raw: RawEvent): ReleaseEvent
    {
        let event = new ReleaseEvent(raw, this.lastEvent(), this.events);
        this.events = [];

        return event;
    }

    private lastEvent(): FingerEvent
    {   
        if (this.events.length)
            return this.events[0];

        throw Error('Array is empty');
    }
}