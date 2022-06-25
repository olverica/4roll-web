import Resistance from 'App/Scroll/Overscroll/Resistance'
import Config from 'App/Scroll/Settings/Config'


export default class UpdatableResistance extends Resistance
{
    private config: Config;

    private damping: number;


    constructor(config: Config)
    {
        super(0);
        this.damping = 0;
        this.config = config;
    }
    
    public compute(): number
    {
        this.damping += this.config.boundaries.resistance;
        return this.damping;
    }

    public release(): void
    {
        this.damping = 0;
    }
}