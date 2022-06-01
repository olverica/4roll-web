import InteractionBehaviour from '~/services/Animation/Sheet/Info/InteractionBehaviour'
import {ResolveCallback} from '~/services/Animation/Sheet/Transition/Actions/ResolvingAction'
import {EasingFunction} from 'bezier-easing'
import ResolvingAction from '~/services/Animation/Sheet/Transition/Actions/ResolvingAction'
import MovingSpeed from '~/services/Animation/Sheet/Behaviour/MovingSpeed'
import EasingPath from '~/services/Animation/Sheet/Transition/Actions/EasingTemplate/EasingPath'


export default abstract class EasingAction extends ResolvingAction
{
    protected behaviour: InteractionBehaviour;

    protected easing: EasingFunction;

    protected path: EasingPath;

    protected passed: number;
    
    protected time: number;
    

    public constructor(to: number, behaviour: InteractionBehaviour, resolve: ResolveCallback, easing: EasingFunction, speed: MovingSpeed)
    {
        super(resolve);
        
        this.passed = 0;
        this.behaviour = behaviour;

        this.path = new EasingPath(this.behaviour.getPosition(), to);
        this.time = speed.computeTime(this.path.distance());
        this.easing = easing;
        
        this.behaviour.changeDelay(this.time);
    }   

    public update(tick: number): void
    {
        this.passed += tick;

        if (this.passed > this.time) {
            this.passed = this.time;
            this.behaviour.changeDelay(0);
            this.stop();
        }

        let position = this.getPosition();
        this.moveTo(position);
    }

    private getPosition(): number
    {
        return this.path.difference() * this.easing(this.passed / this.time);
    }

    private moveTo(position: number)
    {
        this.behaviour.changePosition(this.path.from() + position);
    }
}