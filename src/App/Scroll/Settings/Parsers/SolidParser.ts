import ConfigParser, {BounceSettings} from 'App/Scroll/Settings/Parsers/ConfigParser'
import SolidSetting from 'App/Scroll/Settings/Value/SolidSetting'
import Setting from 'App/Scroll/Settings/Value/Setting'
import Config from 'App/Scroll/Settings/Config'


export default class SolidParser implements ConfigParser
{
    private config: Config;


    public constructor(config: Config)
    {
        this.config = config;
    }

    public bounce(): BounceSettings
    {
        return {
            bottom: new SolidSetting<boolean>(this.config.boundaries.bounce.bottom),
            right: new SolidSetting<boolean>(this.config.boundaries.bounce.right),
            left: new SolidSetting<boolean>(this.config.boundaries.bounce.left),
            top: new SolidSetting<boolean>(this.config.boundaries.bounce.top),
        }
    }

    public damping(): Setting<number>
    {
        return new SolidSetting(this.config.viewport.damping);
    }

    public friction(): Setting<number>
    {
        return new SolidSetting(this.config.boundaries.friction);
    }
    
    public resistance(): Setting<number>
    {
        return new SolidSetting(this.config.boundaries.resistance);
    }

    public horizontalAxis(): Setting<boolean>
    {
        return new SolidSetting(this.config.axis.horizontal);
    }

    public verticallAxis(): Setting<boolean>
    {
        return new SolidSetting(this.config.axis.vertical);
    }

    public maxVelocity(): Setting<number>
    {
        return new SolidSetting(this.config.controls.maxVelocity);
    }

    public spinModifier(): Setting<number>
    {
        return new SolidSetting(this.config.controls.spinModifier);
    }

    public releaseModifier(): Setting<number>
    {
        return new SolidSetting(this.config.controls.releaseModifier);
    }
}