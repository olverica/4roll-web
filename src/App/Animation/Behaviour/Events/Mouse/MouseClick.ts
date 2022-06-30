import CaptureEvent from 'App/Animation/Behaviour/Events/Touch/CaptureEvent'
import Vector2D from 'App/Animation/Types/Vector2D'


export default class MouseClick implements CaptureEvent
{
    readonly positionDelta: Vector2D;
    
    readonly touchedAt: Vector2D;
    
    readonly velocity: Vector2D;
    
    readonly timestamp: number;


    public constructor(raw: MouseEvent)
    {
        this.timestamp = raw.timeStamp;
        this.positionDelta = {x: 0,y: 0};
        this.velocity = {x: 0, y: 0};

        this.touchedAt = {
            x: raw.clientX,
            y: raw.clientY
        };
    }
}