import Config from 'App/Scroll/Settings/Config'
import ValueStorage from 'App/Fields/Values/ValueStorage'


export default class FrictionValue implements ValueStorage<number>
{
    private config: Config;


    public constructor(config: Config)
    {
        this.config = config;
    }

    public get(): number
    {
        return this.config.boundaries.friction;
    }

    public set(value: number): void
    {
        this.config.boundaries.friction = value;
    }
}