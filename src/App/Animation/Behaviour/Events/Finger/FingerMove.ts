import CustomTouchEvent from 'App/Animation/Behaviour/Events/Touch/TouchEvent'
import MoveEvent from 'App/Animation/Behaviour/Events/Touch/MoveEvent'
import Vector2D from 'App/Animation/Types/Vector2D'


export default class FingerMove implements MoveEvent
{
    readonly positionDelta: Vector2D;
    
    readonly touchedAt: Vector2D;
    
    readonly velocity: Vector2D;
    
    readonly timestamp: number;

    readonly touches: TouchList;


    public constructor(raw: TouchEvent , previous: CustomTouchEvent)
    {
        this.timestamp = Date.now();
        this.touches = raw.touches;
        
        let finger = raw.touches.item(0);
        this.touchedAt = {
            x: finger.clientX,
            y: finger.clientY
        };

        this.positionDelta = {
            x: previous.touchedAt.x - this.touchedAt.x,
            y: previous.touchedAt.y - this.touchedAt.y,
        };

        let timeDifference = this.timestamp - previous.timestamp;
        this.velocity = {
            x: -this.positionDelta.x / timeDifference,
            y: -this.positionDelta.y / timeDifference
        };
    }
}