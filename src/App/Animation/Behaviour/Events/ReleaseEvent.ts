import  GestureDetector, {Gesture} from 'App/Animation/Behaviour/GestureDetector';
import FingerEvent, {RawEvent} from 'App/Animation/Behaviour/Events/FingerEvent'
import Vector2D from 'App/Animation/Types/Vector2D'


export default class ReleaseEvent implements FingerEvent
{
    readonly fingerAt: Vector2D;
    
    readonly velocity: Vector2D;
    
    readonly gesture: Gesture;
    
    readonly timestamp: number;


    public constructor(raw: RawEvent, previous: FingerEvent, events: FingerEvent[])
    {
        this.gesture = new GestureDetector().proceed(events);
        this.timestamp = raw.timeStamp;
        this.fingerAt = previous.fingerAt;
        this.velocity = previous.velocity;
    }
}