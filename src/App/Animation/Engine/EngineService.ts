import AnimationEngine, {Updatable} from 'App/Animation/Engine/AnimationEngine'
import UpdatableContainer from 'App/Animation/Engine/UpdatableContainer'


export default class EngineService
{
    private engine: AnimationEngine;

    private updatebles: UpdatableContainer;


    public constructor()
    {
        this.updatebles = new UpdatableContainer();
        this.engine = new AnimationEngine(60, this.updatebles)
    }

    public register(updatable: Updatable)
    {
        this.updatebles.add(updatable);

        if (this.updatebles.length() === 1)
            this.engine.fire();
    }

    public detach(updatable: Updatable)
    {
        this.updatebles.remove(updatable);

        if (this.updatebles.length() === 0)
            this.engine.stop();
    }
}