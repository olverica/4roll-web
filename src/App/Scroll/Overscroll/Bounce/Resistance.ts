import Setting from 'App/Scroll/Settings/Value/Setting'


export default class Resistance
{
    private modifier: Setting<number>;


    public constructor(value: Setting<number>)
    {
        this.modifier = value;
    }
    
    public mutate(momentum: number): number
    {
        return  momentum * (1 - this.modifier.value());
    }
}