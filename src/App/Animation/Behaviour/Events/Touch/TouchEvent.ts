import Vector2D from 'App/Animation/Types/Vector2D'


export default interface TouchEvent
{
    readonly touchedAt: Vector2D;
    
    readonly velocity: Vector2D;
    
    readonly timestamp: number;
}