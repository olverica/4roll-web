import Config from 'App/Scroll/Settings/Config'
import Field from 'App/Fields/Field'


export default class AxisSetting implements Field<boolean>
{
    private config: Config;
    
    private name: string; 


    public constructor(config: Config, name: 'vertical'|'horizontal')
    {
        this.config = config;
        this.name = name;
    }

    public change(value: boolean)
    {
        this.config.axis[this.name] = value;
    }

    public getValue(): boolean
    {
        return this.config.axis[this.name];
    }
}