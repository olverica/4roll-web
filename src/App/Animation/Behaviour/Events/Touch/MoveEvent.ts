import TouchEvent from 'App/Animation/Behaviour/Events/Touch/TouchEvent'
import Vector2D from 'App/Animation/Types/Vector2D'


export default interface MoveEvent extends TouchEvent
{
    readonly positionDelta: Vector2D;
}