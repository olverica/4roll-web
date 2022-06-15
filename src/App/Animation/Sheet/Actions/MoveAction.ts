import InteractionBehaviour from 'App/Animation/Sheet/Info/InteractionBehaviour'
import {ResolveCallback} from 'App/Animation/Transition/ResolvingAction'
import EasingAction from 'App/Animation/Sheet/Actions/Easing/EasingAction'
import MovingSpeed from 'App/Animation/Behaviour/MovingSpeed'
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