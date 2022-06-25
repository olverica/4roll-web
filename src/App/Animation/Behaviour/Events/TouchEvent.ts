import FingerEvent, {RawEvent} from 'App/Animation/Behaviour/Events/FingerEvent'
import Vector2D from 'App/Animation/Types/Vector2D'


export default class TouchEvent implements FingerEvent
{
    readonly positionDelta: Vector2D;

    readonly fingerAt: Vector2D;

    readonly velocity: Vector2D;

    readonly timestamp: number;


    public constructor(raw: RawEvent)
    {
        this.timestamp = raw.timeStamp;
        this.positionDelta = {x: 0,y: 0};
        this.velocity = {x: 0, y: 0};

        let finger = raw.touches.item(0);
        this.fingerAt = {
            x: finger.clientX,
            y: finger.clientY
        };
    }
}