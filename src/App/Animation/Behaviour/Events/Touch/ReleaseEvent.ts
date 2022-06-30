import {Gesture} from 'App/Animation/Behaviour/GestureDetector';
import TouchEvent from 'App/Animation/Behaviour/Events/Touch/TouchEvent'


export default interface ReleaseEvent extends TouchEvent
{
    readonly gesture: Gesture;
}