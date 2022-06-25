import FingerEvent, {RawEvent} from 'App/Animation/Behaviour/Events/FingerEvent'
import Vector2D from 'App/Animation/Types/Vector2D'


export default class MoveEvent implements FingerEvent
{
    readonly positionDelta: Vector2D;
    
    readonly fingerAt: Vector2D;
    
    readonly velocity: Vector2D;
    
    readonly timestamp: number;


    public constructor(raw: RawEvent , previous: FingerEvent)
    {
        this.timestamp = Date.now();

        let finger = raw.touches.item(0);
        this.fingerAt = {
            x: finger.clientX,
            y: finger.clientY
        };

        this.positionDelta = {
            x: previous.fingerAt.x - this.fingerAt.x,
            y: previous.fingerAt.y - this.fingerAt.y,
        };

        let timeDifference = this.timestamp - previous.timestamp;
        this.velocity = {
            x: -this.positionDelta.x / timeDifference,
            y: -this.positionDelta.y / timeDifference
        };
    }
}