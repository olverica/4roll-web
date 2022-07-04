import ConfigParser, {BounceSettings} from 'App/Scroll/Settings/Parsers/ConfigParser'
import ReactiveSetting from 'App/Scroll/Settings/Value/ReactiveSetting'
import Setting from 'App/Scroll/Settings/Value/Setting'
import Config from 'App/Scroll/Settings/Config'


export default class ReativeParser implements ConfigParser
{
    private config: Config;


    public constructor(config: Config)
    {
        this.config = config;
    }

    public bounce(): BounceSettings
    {
        return {
            bottom: new ReactiveSetting(this.config, 'boundaries.bounce.bottom'),
            right: new ReactiveSetting(this.config, 'boundaries.bounce.right'),
            left: new ReactiveSetting(this.config, 'boundaries.bounce.left'),
            top: new ReactiveSetting(this.config, 'boundaries.bounce.top'),
        }
    }

    public damping(): Setting<number>
    {
        return new ReactiveSetting(this.config, 'viewport.damping');
    }

    public friction(): Setting<number>
    {
        return new ReactiveSetting(this.config, 'boundaries.friction');
    }
    
    public resistance(): Setting<number>
    {
        return new ReactiveSetting(this.config, 'boundaries.resistance');
    }

    public horizontalAxis(): Setting<boolean>
    {
        return new ReactiveSetting(this.config, 'axis.horizontal');
    }

    public verticallAxis(): Setting<boolean>
    {
        return new ReactiveSetting(this.config, 'axis.vertical');
    }

    public maxVelocity(): Setting<number>
    {
        return new ReactiveSetting(this.config, 'controls.maxVelocity');
    }

    public spinModifier(): Setting<number>
    {
        return new ReactiveSetting(this.config, 'controls.spinModifier');
    }

    public releaseModifier(): Setting<number>
    {
        return new ReactiveSetting(this.config, 'controls.releaseModifier');
    }
}