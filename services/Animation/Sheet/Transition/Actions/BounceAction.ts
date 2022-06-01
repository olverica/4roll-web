import InteractionBehaviour from '~/services/Animation/Sheet/Info/InteractionBehaviour'
import {ResolveCallback} from '~/services/Animation/Sheet/Transition/Actions/ResolvingAction'
import EasingAction from '~/services/Animation/Sheet/Transition/Actions/EasingTemplate/EasingAction'
import MovingSpeed from '~/services/Animation/Sheet/Behaviour/MovingSpeed'
import bezier from 'bezier-easing'


export default class BounceAction extends EasingAction
{
    public constructor(to: number, behaviour: InteractionBehaviour, resolve: ResolveCallback)
    {
        let speed = new MovingSpeed(12, 10);
        let easing = bezier(.17, .67, .35, 1.28);
        
        super(to, behaviour, resolve, easing, speed);
    }
}