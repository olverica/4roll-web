import TouchEvent from 'App/Animation/Behaviour/Events/Touch/TouchEvent'
import MoveEvent from 'App/Animation/Behaviour/Events/Touch/MoveEvent'
import Vector2D from 'App/Animation/Types/Vector2D'


export default class MouseMove implements MoveEvent
{
    readonly positionDelta: Vector2D;
    
    readonly touchedAt: Vector2D;
    
    readonly velocity: Vector2D;
    
    readonly timestamp: number;


    public constructor(raw: MouseEvent , previous: TouchEvent)
    {
        this.timestamp = Date.now();

        this.touchedAt = {
            x: raw.clientX,
            y: raw.clientY
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