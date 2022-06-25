import Vector2D from 'App/Animation/Types/Vector2D'


export type RawEvent = TouchEvent;

export default interface FingerEvent
{
    readonly fingerAt: Vector2D;
    
    readonly velocity: Vector2D;
    
    readonly timestamp: number;
}