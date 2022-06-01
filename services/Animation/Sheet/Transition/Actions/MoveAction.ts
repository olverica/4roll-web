import InteractionBehaviour from '~/services/Animation/Sheet/Info/InteractionBehaviour'
import {ResolveCallback} from '~/services/Animation/Sheet/Transition/Actions/ResolvingAction'
import EasingAction from '~/services/Animation/Sheet/Transition/Actions/EasingTemplate/EasingAction'
import MovingSpeed from '~/services/Animation/Sheet/Behaviour/MovingSpeed'
import bezier from 'bezier-easing'


export default class MoveAction extends EasingAction
{
    public constructor(to: number, behaviour: InteractionBehaviour, resolve: ResolveCallback, speed: MovingSpeed = null)
    {
        let easing = bezier(0, 0, .58, 1);
        
        if (speed == null)
            speed = new MovingSpeed(10, 100);

        super(to, behaviour, resolve, easing, speed);
    } 
}