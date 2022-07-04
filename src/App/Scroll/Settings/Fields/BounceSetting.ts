import Config from 'App/Scroll/Settings/Config'
import Field from 'App/Fields/Field'


export default class BounceSetting implements Field<boolean>
{
    private config: Config;
    
    private name: string; 


    public constructor(config: Config, name: 'top'|'bottom'|'right'|'left')
    {
        this.config = config;
        this.name = name;
    }

    public change(value: boolean)
    {
        this.config.boundaries.bounce[this.name] = value;
    }

    public getValue(): boolean
    {
        return this.config.boundaries.bounce[this.name];
    }
}