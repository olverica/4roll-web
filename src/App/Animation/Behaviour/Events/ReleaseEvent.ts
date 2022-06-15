import  GestureDetector, {Gesture} from 'App/Animation/Behaviour/GestureDetector';
import FingerEvent from 'App/Animation/Behaviour/Events/FingerEvent'


export default class ReleaseEvent implements FingerEvent
{
    readonly gesture: Gesture;
    
    readonly fingerAt: number;
    
    readonly timestamp: number;
    
    readonly movingSpeed: number;


    public constructor(events: FingerEvent[])
    {
        this.gesture = this.computeGesture(events);
        this.fingerAt = this.computeFingerPosition(events);
        this.movingSpeed = this.computeSpeed(events);
        this.timestamp = Date.now();
    }

    private computeSpeed(events: FingerEvent[]): number
    {
        if (events.length < 2)
            return 0;

        let last = events[0];
        let prelast = events[1];

        return (last.fingerAt - prelast.fingerAt) / (last.timestamp - prelast.timestamp);
    }

    private computeGesture(events: FingerEvent[]): Gesture
    {
        return new GestureDetector().proceed(events);
    }

    private computeFingerPosition(events: FingerEvent[]): number
    {
        return events[0].fingerAt;
    }
}