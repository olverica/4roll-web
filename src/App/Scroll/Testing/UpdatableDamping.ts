import Vector2D from 'App/Animation/Types/Vector2D'
import Damping from 'App/Scroll/Behaviour/Damping'
import Config from 'App/Scroll/Settings/Config'


export default class UpdatableDamping extends Damping
{
    private config: Config;


    public constructor(config: Config)
    {
        super(0);
        this.config = config;
    }

    public getValue(): Vector2D
    {
        return {
            x: 1 - this.config.viewport.damping,
            y: 1 - this.config.viewport.damping
        }
    }
}