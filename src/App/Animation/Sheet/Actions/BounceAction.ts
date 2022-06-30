import InteractionBehaviour from 'App/Animation/Sheet/Info/InteractionBehaviour'
import {ResolveCallback} from 'App/Animation/Transition/ResolvingAction'
import EasingAction from 'App/Animation/Sheet/Actions/Easing/EasingAction'
import MovingSpeed from 'App/Animation/Behaviour/MovingSpeed'
import bezier from 'bezier-easing'


export default class BounceAction extends EasingAction
{
    public constructor(to: number, behaviour: InteractionBehaviour, resolve: ResolveCallback)
    {
        let speed = new MovingSpeed({px: 12, ms: 10});
        let easing = bezier(.17, .67, .35, 1.28);
        
        super(to, behaviour, resolve, easing, speed);
    }
}