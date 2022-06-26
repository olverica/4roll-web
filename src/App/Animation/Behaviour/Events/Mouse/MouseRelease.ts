import GestureDetector, {Gesture} from 'App/Animation/Behaviour/GestureDetector';
import TouchEvent from 'App/Animation/Behaviour/Events/Touch/TouchEvent'
import ReleaseEvent from 'App/Animation/Behaviour/Events/Touch/ReleaseEvent'
import Vector2D from 'App/Animation/Types/Vector2D'


export default class MouseRelease implements ReleaseEvent
{
    readonly touchedAt: Vector2D;
    
    readonly velocity: Vector2D;
    
    readonly gesture: Gesture;
    
    readonly timestamp: number;


    public constructor(raw: MouseEvent, previous: TouchEvent, events: TouchEvent[])
    {
        this.gesture = new GestureDetector().proceed(events);
        this.timestamp = raw.timeStamp;
        this.touchedAt = previous.touchedAt;
        this.velocity = previous.velocity;
    }
}