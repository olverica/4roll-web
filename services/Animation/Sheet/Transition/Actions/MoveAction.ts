import InteractionBehaviour from 'Services/Animation/Sheet/Info/InteractionBehaviour'
import {ResolveCallback} from 'Services/Animation/Sheet/Transition/Actions/ResolvingAction'
import EasingAction from 'Services/Animation/Sheet/Transition/Actions/EasingTemplate/EasingAction'
import MovingSpeed from 'Services/Animation/Sheet/Behaviour/MovingSpeed'
import bezier from 'bezier-easing'


export default class MoveAction extends EasingAction
{
    public constructor(to: number, behaviour: InteractionBehaviour, resolve: ResolveCallback, speed: MovingSpeed = null)
    {
        let easing = bezier(0, 0, .58, 1);
        
        if (speed == null)
            speed = new MovingSpeed({px: 10, ms: 100});

        super(to, behaviour, resolve, easing, speed);
    } 
}