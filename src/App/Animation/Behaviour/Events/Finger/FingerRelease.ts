import GestureDetector, {Gesture} from 'App/Animation/Behaviour/GestureDetector';
import CustomTouchEvent from 'App/Animation/Behaviour/Events/Touch/TouchEvent'
import ReleaseEvent from 'App/Animation/Behaviour/Events/Touch/ReleaseEvent'
import Vector2D from 'App/Animation/Types/Vector2D'


export default class FingerRelease implements ReleaseEvent
{
    readonly touchedAt: Vector2D;
    
    readonly velocity: Vector2D;
    
    readonly gesture: Gesture;
    
    readonly timestamp: number;


    public constructor(raw: TouchEvent, previous: CustomTouchEvent, events: CustomTouchEvent[])
    {
        this.gesture = new GestureDetector().proceed(events);
        this.timestamp = raw.timeStamp;
        this.touchedAt = previous.touchedAt;
        this.velocity = previous.velocity;
    }
}